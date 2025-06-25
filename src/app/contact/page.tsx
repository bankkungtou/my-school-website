import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-primary-100">
            เรายินดีให้คำปรึกษาและตอบข้อสงสัยของคุณ
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">ข้อมูลการติดต่อ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">เบอร์โทรศัพท์</h3>
                    <p className="text-gray-600">02-123-4567</p>
                    <p className="text-gray-600">02-123-4568 (แฟกซ์)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">อีเมล</h3>
                    <p className="text-gray-600">info@school.ac.th</p>
                    <p className="text-gray-600">admission@school.ac.th</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ที่อยู่</h3>
                    <p className="text-gray-600">
                      123 ถนนตัวอย่าง แขวงตัวอย่าง<br />
                      เขตตัวอย่าง กรุงเทพมหานคร 10100
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">เวลาทำการ</h3>
                    <p className="text-gray-600">จันทร์ - ศุกร์: 08:00 - 16:30</p>
                    <p className="text-gray-600">เสาร์: 08:00 - 12:00</p>
                    <p className="text-gray-600">อาทิตย์: ปิด</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">แผนที่</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Google Map จะแสดงที่นี่</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ติดต่อด่วน</h2>
            <p className="text-gray-600">สำหรับข้อมูลเร่งด่วนหรือการนัดหมาย</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <Phone className="mx-auto text-primary-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">โทรศัพท์</h3>
              <p className="text-gray-600 mb-4">สำหรับข้อมูลทั่วไป</p>
              <a href="tel:02-123-4567" className="btn-primary">
                โทร 02-123-4567
              </a>
            </div>
            
            <div className="card p-6 text-center">
              <Mail className="mx-auto text-primary-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">อีเมล</h3>
              <p className="text-gray-600 mb-4">สำหรับการสอบถามรายละเอียด</p>
              <a href="mailto:info@school.ac.th" className="btn-primary">
                ส่งอีเมล
              </a>
            </div>
            
            <div className="card p-6 text-center">
              <MapPin className="mx-auto text-primary-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">เยี่ยมชม</h3>
              <p className="text-gray-600 mb-4">นัดหมายเยี่ยมชมโรงเรียน</p>
              <button className="btn-primary">
                นัดหมาย
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage