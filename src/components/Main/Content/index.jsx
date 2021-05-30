import React from 'react'
import { useSelector } from 'react-redux'
import Profile from './Profile';

import "./contentStyles.css"
import TopTracks from './TopTracks';
import RecentlyPlayed from './RecentlyPlayed';

export default function Content() {

    const selected = useSelector(state=> state.navigation);

    let componentToRender = <></>;

    switch(selected){
        case "profile":
            componentToRender = <Profile/>
            break;
        case 'tracks':
            componentToRender = <TopTracks />
            break;
        case 'recent':
            componentToRender = <RecentlyPlayed />
        default:
    }

    return (
        <div className="content">
            {componentToRender}
        </div>
    )
}
