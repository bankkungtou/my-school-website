import { Users, Target, Eye, Award } from 'lucide-react'

const AboutPage = () => {
  const management = [
    {
      name: 'ดร.สมชาย ใจดี',
      position: 'ผู้อำนวยการโรงเรียน',
      image: '/images/director.jpg'
    },
    {
      name: 'อาจารย์สมหญิง รักการสอน',
      position: 'รองผู้อำนวยการฝ่ายวิชาการ',
      image: '/images/vice-director1.jpg'
    },
    {
      name: 'อาจารย์สมศักดิ์ ใส่ใจ',
      position: 'รองผู้อำนวยการฝ่ายกิจการนักเรียน',
      image: '/images/vice-director2.jpg'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl text-primary-100">
            ทำความรู้จักกับโรงเรียนตัวอย่าง สถาบันการศึกษาที่มุ่งเน้นความเป็นเลิศ
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ประวัติโรงเรียน</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  โรงเรียนตัวอย่างก่อตั้งขึ้นในปี พ.ศ. 2542 ด้วยวิสัยทัศน์ในการสร้างสถาบันการศึกษา
                  ที่มีคุณภาพและทันสมัย เพื่อพัฒนาเยาวชนไทยให้เป็นบุคคลที่มีความรู้ ความสามารถ 
                  และคุณธรรมจริยธรรม
                </p>
                <p>
                  ตลอดระยะเวลา 25 ปีที่ผ่านมา โรงเรียนได้พัฒนาและเติบโตอย่างต่อเนื่อง 
                  จนกลายเป็นหนึ่งในสถาบันการศึกษาชั้นนำของประเทศ ด้วยหลักสูตรที่หลากหลาย
                  และการเรียนการสอนที่เน้นผู้เรียนเป็นสำคัญ
                </p>
                <p>
                  ปัจจุบันโรงเรียนมีนักเรียนกว่า 1,200 คน และคณาจารย์ที่มีคุณภาพกว่า 80 ท่าน
                  พร้อมสิ่งอำนวยความสะดวกที่ทันสมัยครบครัน
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">รูปภาพโรงเรียน</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <Eye className="text-primary-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">วิสัยทัศน์</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                เป็นสถาบันการศึกษาชั้นนำที่ผลิตบัณฑิตที่มีคุณภาพ มีความรู้ความสามารถ 
                มีคุณธรรมจริยธรรม และสามารถแข่งขันได้ในระดับสากล พร้อมเป็นพลเมืองที่ดี
                ของสังคมและประเทศชาติ
              </p>
            </div>
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <Target className="text-primary-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">พันธกิจ</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• จัดการศึกษาที่มีคุณภาพตามมาตรฐานสากล</li>
                <li>• พัฒนาผู้เรียนให้มีทักษะในศตวรรษที่ 21</li>
                <li>• ส่งเสริมการเรียนรู้ตลอดชีวิต</li>
                <li>• สร้างสรรค์นวัตกรรมทางการศึกษา</li>
                <li>• ปลูกฝังคุณธรรมจริยธรรม</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ผู้บริหาร</h2>
            <p className="text-gray-600">ทีมผู้บริหารที่มีประสบการณ์และวิสัยทัศน์</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((person, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-gray-500" size={48} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{person.name}</h3>
                <p className="text-gray-600">{person.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ความสำเร็จของเรา</h2>
            <p className="text-primary-100">รางวัลและความสำเร็จที่ภาคภูมิใจ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-primary-100">รางวัลระดับชาติ</p>
            </div>
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="text-primary-100">อัตราการเข้ามหาวิทยาลัย</p>
            </div>
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-primary-100">ทุนการศึกษา</p>
            </div>
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">25</h3>
              <p className="text-primary-100">ปี ประสบการณ์</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage