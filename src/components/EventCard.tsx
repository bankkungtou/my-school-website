import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface EventProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    image: string
  }
}

const EventCard = ({ event }: EventProps) => {
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
        <span className="text-gray-500">รูปภาพกิจกรรม</span>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-primary-600" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-primary-600" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-primary-600" />
            {event.location}
          </div>
        </div>
        <Link 
          href={`/events/${event.id}`} 
          className="inline-block mt-4 btn-primary"
        >
          ดูรายละเอียด
        </Link>
      </div>
    </div>
  )
}

export default EventCard