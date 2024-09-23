import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import viedo1 from "../../assets/viedo1.mp4";
import like from "../../assets/thumbs-up.svg";
import dislike from "../../assets/thumbs-down.svg";
import share from "../../assets/share.svg";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user.svg";
import { API_KEY , value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";


const PlayVideo = () => {

  const {videoId} = useParams()

  const [apiData,setApiData] = useState(null);

  const [channelData,setChannelData] = useState(null)

  const [commentdata,setCommentdata] = useState(null)

 





  const fetchVideoData = async() => {
    // Feching Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then((res)=>res.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData = async () => {
    // Fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then((res)=>res.json()).then((data)=>setChannelData(data.item[0]))
 
    // Fetching Comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then((res)=>res.json()).then(data => setCommentdata(data.items))
  }

  useEffect(()=>{
        fetchVideoData();
  },[videoId]) 

  useEffect(()=>{
  fetchOtherData();
  },[apiData])

  return (
    <div className="play-video">
      {/* <video src={viedo1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder={"0"} allowFullScreen  ></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData?value_converter(apiData.statistics.likeCount):155}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:user_profile} alt="" />
        <div>
          <p>{apiData?apiData.snippet.title:"xyz"}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Suscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
         {
          apiData ? apiData.snippet.description.slice(0,250) : "Description Here"
         }
        </p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount) : 102} comments</h4>
        {
          commentdata?.map((item,index)=>{
            return (
              <>
              

              <div key={index} className="comment">
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div>
            <h3>
             {item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span>
            </h3>
            <p>
                 {
                  item.snippet.topLevelComment.snippet.textDisplay
                 }
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>




              </>
            )
          })
        }


<div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
             Amet officia excepteur tempor minim minim sit<span>1 day ago</span>
            </h3>
            <p>
                
                  Quiccaecat ex excepteur velit aliquip. Lorem commodo esse eu et duis adipisicing. Nulla enim esse cillum dolor sunt voluptate adipisicing voluptate. Adipisicing aute voluptate proident magna ex laborum enim. Reprehenderit fugiat sit sunt velit sint mollit incididunt labore do ea ipsum sit fugiat. Laboris eu labore duis id. Amet irure laboris ea et pariatur velit cupidatat elit duis commodo proident cupidatat adipisicing adipisicing.
                
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>67k</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

      
      
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
             Amet officia excepteur tempor minim minim sit<span>1 day ago</span>
            </h3>
            <p>
                
                  Quiccaecat ex excepteur velit aliquip. Lorem commodo esse eu et duis adipisicing. Nulla enim esse cillum dolor sunt voluptate adipisicing voluptate. Adipisicing aute voluptate proident magna ex laborum enim. Reprehenderit fugiat sit sunt velit sint mollit incididunt labore do ea ipsum sit fugiat. Laboris eu labore duis id. Amet irure laboris ea et pariatur velit cupidatat elit duis commodo proident cupidatat adipisicing adipisicing.
                
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>67k</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>


        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
             Amet officia excepteur tempor minim minim sit<span>1 day ago</span>
            </h3>
            <p>
                
                  Quiccaecat ex excepteur velit aliquip. Lorem commodo esse eu et duis adipisicing. Nulla enim esse cillum dolor sunt voluptate adipisicing voluptate. Adipisicing aute voluptate proident magna ex laborum enim. Reprehenderit fugiat sit sunt velit sint mollit incididunt labore do ea ipsum sit fugiat. Laboris eu labore duis id. Amet irure laboris ea et pariatur velit cupidatat elit duis commodo proident cupidatat adipisicing adipisicing.
                
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>67k</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default PlayVideo;
