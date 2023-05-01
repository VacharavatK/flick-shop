import React from 'react';
import styled from 'styled-components';

const AnnouncementContainer = styled.div`
    height: 30px;
    background-color: #663046;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <AnnouncementContainer>
        Daflick new collection is now on shop!
    </AnnouncementContainer>
  )
}

export default Announcement