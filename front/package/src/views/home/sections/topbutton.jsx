import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
export default function TopButton() {
    const [showButton, setShowButton] = useState(false)

    const handleScroll = () => {
        if (!window.scrollY) return

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 0) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener('scroll', handleShowButton)
        return () => {
            window.removeEventListener('scroll', handleShowButton)
        }
    }, [])
    const topBtn_wrap = {
        position: "sticky",
        marginRight: "50px",
        bottom: "70px",
        float: "right",

    }
    const topBtn = {
        border: "none",
        fontSize: "3.8rem",
        color: "#ffc949!important",
        backgroundColor: "white"
    }
    return (
        <div style={topBtn_wrap}>
            {showButton && (
                <button style={topBtn} onClick={handleScroll}>
                    <BsFillArrowUpCircleFill />
                </button>
            )}
        </div>
    )
}