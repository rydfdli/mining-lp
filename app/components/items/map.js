import Link from "next/link"

const MapComponent = () => {
    return (
        <div className="w-full lg:h-96 h-72 rounded-md">
            <iframe className="rounded-md w-full h-full" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jalan%20Pupuk%20Raya%20No.17-19,%20Balikpapan,%20Kalimantan%20Timur,%2076113,%20Indonesia+(PT%20Sedaunergi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><Link href="https://www.maps.ie/distance-area-calculator.html">measure area map</Link></iframe>
        </div>
    )
}

export default MapComponent