import React from "react";
import Img1 from '../../app/img/clock_.jpg';
import Img2 from '../../app/img/clock.jpg';

export default class Main extends React.Component {
    render() {
        return <div className="jumbotron main_page">
            <h1>Приветствуем тебя, будущий коллега!</h1>
            <div>
                <p>У тебя ещё есть время, чтобы стать хорошим разработчиком.</p>
            <p><img src={Img1}/></p>
            <p>Но береги его! Оно так быстротечно...</p>
            <p><img src={Img2}/></p>
            <p>Присоединяйся к нашей команде!</p></div>
        </div>;
    }
}