import React from "react";
import Notification from "./Notification";

const reservedNotifications  = [
    {
        id: 1,
        message : "hi. what your name"
    },
    {
        id:2,
        message : "I'm alice lee"
    },
    {
        id:3,
        message : "oh, you don't want to know me? "
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

//생성자는  앞으로 사용할 데이터를 state에 넣어서 초기화함
        this.state = {
            notifications : [],
        }
    }

    //lifeCycle
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                //state update하는 구문 
                this.setState({
                    notifications: notifications,
                });
            }else {
               this.setState({
                notifications : []
               });
               clearInterval(timer)
            }
        },1000);
    }
    
    render(){
        return (
            <div>
                {this.state.notifications.map((notification) =>{
                    return <Notification
                    key={notification.id}
                    id={notification.id}
                    message = {notification.message}
                    />
                })}
            </div>
        )
    }
}

export default NotificationList;