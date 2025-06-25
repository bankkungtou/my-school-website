'use client'

import { useState } from 'react'
import EventCard from '@/components/EventCard'
import { Calendar, Filter } from 'lucide-react'

const EventsPage = () => {
  const [filter, setFilter] = useState('all')
  
  const allEvents = [
    {
      id: 1,
      title: 'งานวันเปิดบ้านโรงเรียน',
      date: '2024-02-15',
      time: '09:00 - 16:00',
      location: 'อาคารหลัก',
      image: '/images/event1.jpg',
      type: 'upcoming',
      description: 'เชิญชวนผู้ปกครองและนักเรียนมาเยี่ยมชมโรงเรียนและทำความรู้จักกับหลักสูตรต่างๆ'
    },
    {
      id: 2,
      title: 'การแข่งขันกีฬาสีประจำปี',
      date: '2024-02-20',
      time: '08:00 - 17:00',
      location: 'สนามกีฬา',
      image: '/images/event2.jpg',
      type: 'upcoming',
      description: 'การแข่งขันกีฬาระหว่างบ้านสี เพื่อส่งเสริมความสามัคคีและสุขภาพที่ดี'
    },
    {
      id: 3,
      title: 'งานแสดงผลงานนักเรียน',
      date: '2024-03-01',
      time: '10:00 - 15:00',
      location: 'หอประชุม',
      image: '/images/event3.jpg',
      type: 'upcoming',
      description: 'นิทรรศการแสดงผลงานสร้างสรรค์ของนักเรียนจากทุกหลักสูตร'
    },
    {
      id: 4,
      title: 'งานวันคริสต์มาส 2023',
      date: '2023-12-25',
      time: '18:00 - 21:00',
      location: 'หอประชุมใหญ่',
      image: '/images/event4.jpg',
      type: 'past',
      description: 'งานเฉลิมฉลองวันคริสต์มาสพร้อมการแสดงและกิจกรรมสนุกสนาน'
    },
    {
      id: 5,
      title: 'โครงการอนุรักษ์สิ่งแวดล้อม',
      date: '2023-12-15',
      time: '08:00 - 12:00',
      location: 'ป่าชุมชน',
      image: '/images/event5.jpg',
      type: 'past',
      description: 'กิจกรรมปลูกป่าและทำความสะอาดสิ่งแวดล้อมร่วมกับชุมชน'
    },
    {
      id: 6,
      title: 'การแข่งขันวิชาการระดับชาติ',
      date: '2023-11-20',
      time: '09:00 - 16:00',
      location: 'มหาวิทยาลัยชั้นนำ',
      image: '/images/event6.jpg',
      type: 'past',
      description: 'นักเรียนเข้าร่วมการแข่งขันวิชาการระดับชาติและคว้ารางวัลชนะเลิศ'
    }
  ]

  const filteredEvents = filter === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.type === filter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">กิจกรรม</h1>
          <p className="text-xl text-primary-100">
            ติดตามกิจกรรมและเหตุการณ์สำคัญของโรงเรียน
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <Filter className="text-gray-500" size={20} />
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ทั้งหมด
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'upcoming'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                กำลังจะจัด
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'past'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ย้อนหลัง
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">ไม่มีกิจกรรมในหมวดหมู่นี้</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      {filter === 'all' && (
        <section className="bg-primary-600 text-white section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">กิจกรรมที่กำลังจะจัด</h2>
            <p className="text-xl text-primary-100 mb-8">
              อย่าพลาดกิจกรรมสนุกๆ ที่เรากำลังจะจัดขึ้น
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allEvents.filter(event => event.type === 'upcoming').slice(0, 2).map((event) => (
                <div key={event.id} className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center justify-center space-x-4 text-primary-100">
                    <span>{new Date(event.date).toLocaleDateString('th-TH')}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default EventsPage