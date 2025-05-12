import './CardContainer.css'

function Status({currentStatus}) {
    switch (currentStatus) {
        case "Ongoing": {
            return (
            <>
                <svg width="24px" height="24px" viewBox="4 5 15 15" fill="lime" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
                </svg>
            </>
            )
        }

        case "Completed": {
            return (
            <>
                <svg width="24px" height="24px" viewBox="4 5 15 15" fill="#00c9f5" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
                </svg>
            </>
            )
        }

        case "Hiatus": {
            return (
            <>
                <svg width="24px" height="24px" viewBox="4 5 15 15" fill="#da7500" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
                </svg>
            </>
            )
        }

        case "Cancelled": {
            return (
            <>
                <svg width="24px" height="24px" viewBox="4 5 15 15" fill="#7f7f7f" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
                </svg>
            </>
            )
        }
    }
}

export default function CardContainer({title, rating, tags, status, description, image}) {
    return (
        <>
            <div className="contentDisplayCard">
                <img src={image} alt="cat.png" />
                <span className="contentName">{title}</span>
                <div className="contentStats">
                    <svg fill="#eab308" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z" />
                    </svg>
                    <p id="rating">{rating}</p>
                </div>
                
                <div className="contentStatus">
                    <Status currentStatus={status} />
                    <p>{status}</p>
                </div>

                {/* TODO: Implement tags. */}
                <div className="contentTags">
                    <div className="contentTag"><span>Comedy</span></div>
                    <div className="contentTag"><span>Horror</span></div>
                    <div className="contentTag"><span>Drama</span></div>
                    <div className="contentTag"><span>Mystery</span></div>
                    <div className="contentTag"><span>Novel</span></div>
                    <div className="contentTag"><span>English</span></div>
                </div>

                <p className="contentDescription">{description}</p>
            </div>
        </>
    )
}