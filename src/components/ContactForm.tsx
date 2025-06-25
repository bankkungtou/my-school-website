'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('ส่งข้อความเรียบร้อยแล้ว!')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold mb-6">ส่งข้อความถึงเรา</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อ-นามสกุล *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="กรุณากรอกชื่อ-นามสกุล"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            อีเมล *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="example@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            หัวข้อ *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">เลือกหัวข้อ</option>
            <option value="admission">สอบถามการสมัครเรียน</option>
            <option value="course">สอบถามหลักสูตร</option>
            <option value="general">สอบถามทั่วไป</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            ข้อความ *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="กรุณากรอกข้อความที่ต้องการสอบถาม"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={16} />
          <span>{isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ'}</span>
        </button>
      </form>
    </div>
  )
}

export default ContactForm