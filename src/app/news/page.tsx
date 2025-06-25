'use client'

import { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import { Search } from 'lucide-react'

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const allNews = [
    {
      id: 1,
      title: 'ประกาศรับสมัครนักเรียนใหม่ ปีการศึกษา 2567',
      excerpt: 'เปิดรับสมัครนักเรียนใหม่ระดับมัธยมศึกษาตอนต้น และตอนปลาย สำหรับปีการศึกษา 2567',
      date: '2024-01-15',
      image: '/images/news1.jpg',
      category: 'ประชาสัมพันธ์'
    },
    {
      id: 2,
      title: 'โครงการแลกเปลี่ยนนักเรียนกับต่างประเทศ',
      excerpt: 'เปิดโอกาสให้นักเรียนได้เรียนรู้วัฒนธรรมและภาษาต่างประเทศ ผ่านโครงการแลกเปลี่ยน',
      date: '2024-01-10',
      image: '/images/news2.jpg',
      category: 'กิจกรรม'
    },
    {
      id: 3,
      title: 'ผลการแข่งขันวิชาการระดับชาติ',
      excerpt: 'นักเรียนของเราคว้ารางวัลชนะเลิศในการแข่งขันวิชาการระดับชาติ สาขาคณิตศาสตร์',
      date: '2024-01-05',
      image: '/images/news3.jpg',
      category: 'ความสำเร็จ'
    },
    {
      id: 4,
      title: 'การปรับปรุงห้องสมุดและศูนย์การเรียนรู้',
      excerpt: 'โรงเรียนได้ทำการปรับปรุงห้องสมุดให้ทันสมัยและเพิ่มพื้นที่การเรียนรู้',
      date: '2024-01-01',
      image: '/images/news4.jpg',
      category: 'พัฒนา'
    },
    {
      id: 5,
      title: 'โครงการอนุรักษ์สิ่งแวดล้อม',
      excerpt: 'นักเรียนร่วมกิจกรรมปลูกป่าและอนุรักษ์สิ่งแวดล้อมในชุมชน',
      date: '2023-12-28',
      image: '/images/news5.jpg',
      category: 'กิจกรรม'
    },
    {
      id: 6,
      title: 'การจัดงานวันคริสต์มาส',
      excerpt: 'โรงเรียนจัดงานเฉลิมฉลองวันคริสต์มาสพร้อมกิจกรรมสนุกสนานมากมาย',
      date: '2023-12-25',
      image: '/images/news6.jpg',
      category: 'กิจกรรม'
    }
  ]

  const filteredNews = allNews.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">ข่าวสาร</h1>
          <p className="text-xl text-primary-100">
            ติดตามข่าวสารและความเคลื่อนไหวของโรงเรียน
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ค้นหาข่าวสาร..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">ไม่พบข่าวสารที่ค้นหา</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default NewsPage