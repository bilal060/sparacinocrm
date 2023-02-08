import React from 'react'
import Heading from '../../components/heading'
import HomePageSelect from '../../components/selects/homePageSelect'
import MyTasks from '../../components/home/myTasks'
import MeetingPlan from '../../components/home/meetingPlan'
import Sales from '../../components/home/sales'
import Activity from '../../components/home/activity'

const HomePage = () => {
    return (
        <div className="custom-main-content mt-5 main-padding">
            <div className="custom-activity container-fluid p-0 ">
                <div className="row">
                    <div className="col-3">
                        <Heading className="custom-heading">Activity</Heading>
                    </div>
                    <div className="col-9 text-right">
                        <form action="#" className="m-0">
                            <HomePageSelect myname="week" myid="custom-week" myclassName="custom-select-form mb-3">
                                <option value="This Week">This Week</option>
                                <option value="Week">Week</option>
                            </HomePageSelect>
                        </form>
                    </div>
                </div>
                <div className="row pt-2">
                    <Activity />
                </div>
            </div>

            <div className="custom-sales container-fluid p-0">
                <div className="d-flex pt-lg-5 pt-0 justify-content-between align-items-center">
                    <Heading >Sales Pipeline</Heading>
                    <div className=" text-right">
                        <form action="#" className="m-0">
                            <HomePageSelect myname="week" myid="custom-week" myclassName="custom-select-form mb-3">
                                <option value="This Week">This Week</option>
                                <option value="Week">Week</option>
                            </HomePageSelect>
                        </form>
                    </div>
                </div>
                <div className="row pt-2">
                    <Sales />
                </div>
            </div>

            <div className="custom-today-agenda container-fluid p-0 ">
                <div className="row pt-lg-3">
                    <div className="col-lg-4 pr-lg-4">
                        <Heading> Today's Agenda</Heading>
                        <MeetingPlan />
                    </div>
                    <div className="col-lg-8 pt-lg-0 pt-5 mt-lg-0 mt-4 pl-4">
                        <MyTasks />
                    </div>
                </div>
            </div>
            <div className="bg-white d-flex justify-content-center align-items-center mt-5 h-400px" >
                Placeholder for internal messaging (Slack?)
            </div>
        </div>
    )
}

export default HomePage