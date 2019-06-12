import React , { Component } from 'react';

const CreditCard = () =>{
    return(
        <div className='main'>

            <div className='description'>
                <h1 >CREDIT CARD</h1>
            </div>
            <img className='puce' src={ require('./puce.png') } alt="puce logo"></img>
            <div className='card-info'>
                <div className='left'>
                    <p ><span className='card-number'>7253 3256 7895 1245</span></p>
                    <div className='date-info'>
                        <p ><span className='number'>5422</span></p>
                        <div className='date'>
                            <p className="valid">VALID<br />THRU</p>
                            <i class="fas fa-caret-right"></i>
                            <p className="date-expiration">MONTH/YEAR<br /><span>11 50</span></p>
                        </div>
                    </div>
                    <p ><span className='user'>khedher asma</span></p>
                </div>
                <div  className='rigth'>
                    <img className='visa-card' src={require('./visaCard.png')} alt='visa card logo'></img>
                </div>
            </div>
        
        </div>
    )
}
export default CreditCard