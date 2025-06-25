import Link from 'next/link'
import { Calendar } from 'lucide-react'

interface NewsProps {
  news: {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
  }
}

const NewsCard = ({ news }: NewsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="card overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">รูปภาพข่าว</span>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={16} className="mr-2" />
          {formatDate(news.date)}
        </div>
        <h3 className="font-semibold text-lg mb-3 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
        <Link 
          href={`/news/${news.id}`} 
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          อ่านเพิ่มเติม →
        </Link>
      </div>
    </div>
  )
}

export default NewsCard