import React from 'react'
import { Link } from 'react-router-dom';
function ContactCard(props) {
    const { id, name, email } = props.contact;
    return (
        <>
            <div className="item conatctcard">
                <div className="content">
                    <Link to={`/contact/${id}`}
                       state={{contact:props.contact
                    }}
                        className='src-contact underline-from-center'
                    >
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>

                </div>
                <i
                    className="trash alternate outline icon"
                    style={{ color: "red", marginTop: "7px", paddingLeft: "1000px" }}
                    onClick={() => { props.findid(id) }}
                ></i>
            </div>
        </>
    )
}

export default ContactCard