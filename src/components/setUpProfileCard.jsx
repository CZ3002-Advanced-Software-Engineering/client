import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap/'
import { IoAlertCircle } from 'react-icons/io5'
import { FaUserCheck } from 'react-icons/fa'
import CommonButton from './commonButton'
import '../styles/setUpProfileCard.css'

/* eslint-disable no-constant-condition */

const SetUpProfileCard = ({ hasSetUp }) => (
    <Card.Body>
        <Card.Text as="h5">
            <div className="row">
                <div className="icon-col">
                    {hasSetUp ? (
                        <FaUserCheck
                            className="icon"
                            size="100"
                            color="green"
                        />
                    ) : (
                        <IoAlertCircle
                            className="icon"
                            size="100"
                            color="#1d61a1"
                        />
                    )}
                </div>
                <div className="col text">
                    {hasSetUp
                        ? 'Your facial recognition profile has been set up. You are ready to take attendance using facial recognition.'
                        : 'You have not set up your facial recognition profile yet. Please set up in order to take attendance using facial recognition.'}
                </div>
            </div>
        </Card.Text>
        <CommonButton
            variant="primary"
            size="lg"
            handleClick={() => {
                console.log({ hasSetUp })
            }}
            text={hasSetUp ? 'Update Profile' : 'Set Up Now'}
        />
    </Card.Body>
)

export default SetUpProfileCard
