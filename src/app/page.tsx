'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, Users, BookOpen, Phone, ArrowRight } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import EventCard from '@/components/EventCard'
import { useLanguage } from '@/contexts/LanguageContext'

const HomePage = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const bannerImages = [
    {
      id: 1,
      image: '/images/banner1.jpg',
      title: 'ยินดีต้อนรับสู่โรงเรียนตัวอย่าง',
      subtitle: 'สถาบันการศึกษาที่มุ่งเน้นคุณภาพและความเป็นเลิศ'
    },
    {
      id: 2,
      image: '/images/banner2.jpg',
      title: 'การศึกษาที่ทันสมัย',
      subtitle: 'เทคโนโลยีการเรียนการสอนที่ก้าวหน้า'
    },
    {
      id: 3,
      image: '/images/banner3.jpg',
      title: 'พัฒนาศักยภาพนักเรียน',
      subtitle: 'เสริมสร้างทักษะและความรู้อย่างครบถ้วน'
    }
  ]

  const latestNews = [
    {
      id: 1,
      title: 'ประกาศรับสมัครนักเรียนใหม่ ปีการศึกษา 2567',
      excerpt: 'เปิดรับสมัครนักเรียนใหม่ระดับมัธยมศึกษาตอนต้น และตอนปลาย',
      date: '2024-01-15',
      image: '/images/news1.jpg'
    },
    {
      id: 2,
      title: 'โครงการแลกเปลี่ยนนักเรียนกับต่างประเทศ',
      excerpt: 'เปิดโอกาสให้นักเรียนได้เรียนรู้วัฒนธรรมและภาษาต่างประเทศ',
      date: '2024-01-10',
      image: '/images/news2.jpg'
    },
    {
      id: 3,
      title: 'ผลการแข่งขันวิชาการระดับชาติ',
      excerpt: 'นักเรียนของเราคว้ารางวัลชนะเลิศในการแข่งขันวิชาการระดับชาติ',
      date: '2024-01-05',
      image: '/images/news3.jpg'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'งานวันเปิดบ้านโรงเรียน',
      date: '2024-02-15',
      time: '09:00 - 16:00',
      location: 'อาคารหลัก',
      image: '/images/event1.jpg'
    },
    {
      id: 2,
      title: 'การแข่งขันกีฬาสีประจำปี',
      date: '2024-02-20',
      time: '08:00 - 17:00',
      location: 'สนามกีฬา',
      image: '/images/event2.jpg'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          {bannerImages.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-lg md:text-xl mb-8">{banner.subtitle}</p>
                  <Link href="/about" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
                    เรียนรู้เพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,200+</h3>
              <p className="text-gray-600">นักเรียน</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">หลักสูตร</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
              <p className="text-gray-600">ปี ประสบการณ์</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.latestNews}</h2>
            <p className="text-gray-600">ติดตามข่าวสารและกิจกรรมของโรงเรียน</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/news" className="btn-primary">
              ดูข่าวสารทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.upcomingEvents}</h2>
            <p className="text-gray-600">เตรียมพบกับกิจกรรมสนุกๆ ของโรงเรียน</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.quickLinks}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/admissions" className="group">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {t.home.admissions}
                </h3>
                <p className="text-gray-600">ข้อมูลการรับสมัครและเงื่อนไขการสมัคร</p>
              </div>
            </Link>
            <Link href="/courses" className="group">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {t.home.academics}
                </h3>
                <p className="text-gray-600">หลักสูตรและโปรแกรมการเรียนการสอน</p>
              </div>
            </Link>
            <Link href="/events" className="group">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {t.home.studentLife}
                </h3>
                <p className="text-gray-600">กิจกรรมและชีวิตนักเรียนในโรงเรียน</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Remove this default export since we have another one below

export default function Home() {
  const { t } = useLanguage();

  // Sample data - ในการใช้งานจริงควรดึงจาก API
  const newsData = [
    {
      id: 1,
      title: 'การรับสมัครนักเรียนใหม่ ปีการศึกษา 2567',
      excerpt: 'เปิดรับสมัครนักเรียนใหม่สำหรับปีการศึกษา 2567 ตั้งแต่วันที่ 1-31 มีนาคม 2567',
      date: '2024-02-15',
      image: '/images/admissions-2567.jpg',
      slug: 'admissions-2567'
    },
    {
      id: 2,
      title: 'ผลการแข่งขันวิชาการระดับชาติ',
      excerpt: 'นักเรียนของเราคว้ารางวัลชนะเลิศในการแข่งขันวิชาการระดับชาติ',
      date: '2024-02-10',
      image: '/images/academic-competition.jpg',
      slug: 'academic-competition-2024'
    },
    {
      id: 3,
      title: 'โครงการแลกเปลี่ยนนักเรียนต่างชาติ',
      excerpt: 'เปิดโอกาสให้นักเรียนได้เรียนรู้วัฒนธรรมและภาษาจากต่างประเทศ',
      date: '2024-02-05',
      image: '/images/exchange-program.jpg',
      slug: 'exchange-program-2024'
    }
    // ... more news
  ];

  const eventsData = [
    {
      id: 1,
      title: 'งานวันกีฬาสี ประจำปี 2567',
      date: '2024-03-15',
      time: '08:00 - 16:00',
      location: 'สนามกีฬาโรงเรียน',
      image: '/images/sports-day.jpg', // Add missing image property
      slug: 'sports-day-2567'
    },
    // ... more events
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.home.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t.home.subtitle}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t.home.learnMore}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,200+</h3>
              <p className="text-gray-600">นักเรียน</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">หลักสูตร</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">ปีของความเป็นเลิศ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.latestNews}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.upcomingEvents}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.home.quickLinks}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/admissions" className="group">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {t.home.admissions}
                </h3>
                <p className="text-gray-600">ข้อมูลการรับสมัครและเงื่อนไขการสมัคร</p>
              </div>
            </Link>
            <Link href="/courses" className="group">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {t.home.academics}
                </h3>
                <p className="text-gray-600">หลักสูตรและโปรแกรมการเรียนการสอน</p>
              </div>
            </Link>
            <Link href="/events" className="group">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group-hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {t.home.studentLife}
                </h3>
                <p className="text-gray-600">กิจกรรมและชีวิตนักเรียนในโรงเรียน</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}