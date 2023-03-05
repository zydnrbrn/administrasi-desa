import { InertiaLink } from "@inertiajs/inertia-react"
import { Button } from "@chakra-ui/react"
import { TbArrowLeft, TbArrowRight } from "react-icons/tb"

const Paginator = ({ meta}) => {
    const prev = meta.prev_page_url
    const next = meta.next_page_url
    const current = meta.current_page
    return(
        <>
         <div>
            <InertiaLink href={prev}>
            <Button className="bg-mainblue" colorScheme='alpha' leftIcon={<TbArrowLeft />}>
    Sebelumnya
  </Button>
        </InertiaLink>
         <Button className="bg-mainblue mx-5" colorScheme='alpha' size='md'>
            {current}
        </Button>
        <InertiaLink href={next}>
        <Button className="bg-mainblue" colorScheme='alpha' rightIcon={<TbArrowRight />}>
    Selanjutnya
  </Button>
        </InertiaLink>
        <span className='mx-[20px]'>Data berdasarkan yang di input oleh admin.</span>
         </div>
         </>
    )
}


export default Paginator
