import { BookOpen, Clock, Users, Award } from 'lucide-react'

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      name: 'หลักสูตรวิทยาศาสตร์-คณิตศาสตร์',
      description: 'เน้นการเรียนรู้ด้านวิทยาศาสตร์และคณิตศาสตร์ เพื่อเตรียมความพร้อมสู่การศึกษาต่อในระดับอุดมศึกษา',
      duration: '3 ปี',
      students: '120 คน',
      subjects: ['คณิตศาสตร์', 'ฟิสิกส์', 'เคมี', 'ชีววิทยา', 'วิทยาการคอมพิวเตอร์'],
      career: ['วิศวกร', 'แพทย์', 'นักวิทยาศาสตร์', 'นักวิจัย']
    },
    {
      id: 2,
      name: 'หลักสูตรภาษา-สังคม',
      description: 'มุ่งเน้นการพัฒนาทักษะด้านภาษาและสังคมศาสตร์ เพื่อสร้างผู้นำที่มีวิสัยทัศน์',
      duration: '3 ปี',
      students: '100 คน',
      subjects: ['ภาษาไทย', 'ภาษาอังกฤษ', 'สังคมศึกษา', 'ประวัติศาสตร์', 'ภูมิศาสตร์'],
      career: ['นักการทูต', 'นักข่าว', 'นักกฎหมาย', 'นักการเมือง']
    },
    {
      id: 3,
      name: 'หลักสูตรศิลป์-ดนตรี',
      description: 'พัฒนาความสามารถด้านศิลปะและดนตรี เพื่อสร้างสรรค์ผลงานที่มีคุณค่า',
      duration: '3 ปี',
      students: '80 คน',
      subjects: ['ทัศนศิลป์', 'ดนตรี', 'นาฏศิลป์', 'การออกแบบ', 'สื่อดิจิทัล'],
      career: ['ศิลปิน', 'นักดนตรี', 'นักออกแบบ', 'ผู้กำกับ']
    },
    {
      id: 4,
      name: 'หลักสูตรเทคโนโลยี-คอมพิวเตอร์',
      description: 'เรียนรู้เทคโนโลยีสมัยใหม่และการเขียนโปรแกรม เพื่อก้าวสู่ยุคดิจิทัล',
      duration: '3 ปี',
      students: '150 คน',
      subjects: ['การเขียนโปรแกรม', 'เครือข่าย', 'ฐานข้อมูล', 'ปัญญาประดิษฐ์', 'การออกแบบเว็บ'],
      career: ['โปรแกรมเมอร์', 'วิศวกรซอฟต์แวร์', 'นักวิเคราะห์ระบบ', 'ผู้ประกอบการ']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">หลักสูตร</h1>
          <p className="text-xl text-primary-100">
            หลักสูตรที่หลากหลายเพื่อพัฒนาศักยภาพของนักเรียน
          </p>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">หลักสูตรของเรา</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เรามีหลักสูตรที่หลากหลายเพื่อตอบสนองความต้องการและความสนใจของนักเรียน
              พร้อมเตรียมความพร้อมสู่อนาคตที่สดใส
            </p>
          </div>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={course.id} className="card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.name}</h3>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="text-primary-600 mr-2" size={20} />
                        <span className="text-gray-700">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="text-primary-600 mr-2" size={20} />
                        <span className="text-gray-700">{course.students}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="text-primary-600 mr-2" size={20} />
                        <span className="text-gray-700">{course.subjects.length} วิชา</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">วิชาหลัก:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.subjects.map((subject, idx) => (
                          <span key={idx} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">อาชีพในอนาคต:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.career.map((job, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center">
                      <BookOpen className="text-gray-500" size={48} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">สนใจสมัครเรียน?</h2>
          <p className="text-xl text-primary-100 mb-8">
            ติดต่อเราเพื่อขอข้อมูลเพิ่มเติมหรือนัดหมายเยี่ยมชมโรงเรียน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              ติดต่อเรา
            </a>
            <a href="tel:02-123-4567" className="btn-primary bg-primary-700 hover:bg-primary-800">
              โทร 02-123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoursesPage