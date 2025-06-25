import Link from 'next/link'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">โรงเรียนตัวอย่าง</span>
            </div>
            <p className="text-gray-300 mb-4">
              สถาบันการศึกษาที่มุ่งเน้นการพัฒนาผู้เรียนให้มีคุณภาพ มีคุณธรรม และเป็นพลเมืองที่ดีของสังคม
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">หลักสูตร</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">ข่าวสาร</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors">กิจกรรม</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ติดต่อเรา</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">info@school.ac.th</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-gray-300">
                  123 ถนนตัวอย่าง แขวงตัวอย่าง<br />
                  เขตตัวอย่าง กรุงเทพฯ 10100
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 โรงเรียนตัวอย่าง. สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer