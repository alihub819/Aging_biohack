import { ArrowRight } from "lucide-react"
import { treatments } from "../data/treatments"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
export default function TreatmentsPage() {
  return (
    <Layout>

    <main>
      <div className="bg-teal-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Treatments
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-teal-100">
            Explore our cutting-edge regenerative medicine treatments designed to promote wellness and vitality
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{treatment.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{treatment.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/treatments/${treatment.id}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-500"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>

    </Layout>

  )
}

