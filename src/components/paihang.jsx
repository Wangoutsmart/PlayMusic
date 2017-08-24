import React from 'react';
import { SearchBar,Icon, WingBlank} from 'antd-mobile';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import $ from 'jquery';
import PhList from './ph_list.jsx';

class Paihang extends React.Component{
    state={
			res:'',
			arrAll:[],
			arrSing:[],
			num:0,
			urlImg:''
	}
	componentWillMount(){
		var _this=this;
		var allSong=[];
		var singleSong=[];
		$.ajax({
		  type: "get",
		  async: false,
		  url: "http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",
		  dataType: "jsonp",
		  jsonp: "callback",
		  jsonpCallback: "JsonCallback",
		  scriptCharset: 'GBK',//设置编码，否则会乱码
		  success: function(data) {
		    data.songlist.map((item,i)=>{
		    	if(i!=0&&i%10==0){
		    		allSong.push(singleSong);
		    		singleSong=[];
		    	}
		    	singleSong.push(item);
		    	if(i==data.songlist.length-1){
		    		allSong.push(singleSong);
		    	}
		    })
		    _this.setState({arrAll:allSong});
		  },
		  error: function() {

		  }
		});
	
	}
 render(){
 		var sty={
			bigBox:{
				'width':'95vw',
				'height':'8vh',
				'marginTop':'-.1rem',
			    'paddingLeft':'5vw',
				 'lineHeight':'8vh',
				 'color':'#e1dac8',
				  'fontSize':'.35rem'
			},
			itemBox:{
				"width":'100vw',
				'height':'26vh',
			},
			item:{
				"width":'90vw',
				'height':'26vh',
				'paddingTop':'3vh',
				'marginLeft':'5vw',
				'marginRight':'5vw',
				'borderTop':'1px solid #9a7d39',
			},
			imgBox:{
				'width':'30vw',
				'height':'20vh',
				'float':'left',
				'background':'red',
				
			},
			songInfos:{
				'width':'60vw',
				'height':'20vh',
				'float':'right'
			},
			infoLeft:{
				"width":'50vw',
				'height':'20vh',
				'float':'left',
				'marginLeft':'5vw',
			},
			icon:{
				'width':'5vw',
				'height':'20vh',
				'float':'right',
				'color':'#e1dac8',
			    'fontSize':'.4rem',
				 'lineHeight':'20vh'
			},
			songName:{
				'color':'white',
				'fontSize':'0.28rem',
				'float':'left',
				
				'lineHight':'8vh',
				'height':'100%',
				'width':'67%',
				'whiteSpace':'nowrap',
				'overflow':'hidden',
				'textOverflow':'ellipsis'
				
			},
			singerName:{
				'display':' inlineBlock',
				'color':'#b9ac8e',
				'float':'left',
				'fontSize':'.3rem',
				'lineHeight':'6vh',
				'paddingLeft':'1vw',
			},
			songInfo:{
				'width':'50vw',
				'height':'6vh',
				'lineHeight':'6vh',
				'marginTop':'.6vh',
				'overflow':'hidden'
			}
		}
 	return(
 		<div className="Paihang">
   		 <div style={sty.bigBox}>
   		 <p style={{fontSize:'0.32rem'}}>巅峰榜</p>
   		 </div>
   		 {		
	 		this.state.arrAll.map((item,i)=>{
	 			return <div style={sty.itemBox}>
	   		 	<Link to={"/phlist/"+i}>
	   		    <div style={sty.item}>
	   		            <div style={sty.imgBox}>
	   		            <img src= {`http://imgcache.qq.com/music/photo/album_300/${item[0].albumId%100}/300_albumpic_${item[0].albumId}_0.jpg`} style={{'width':'100%','height':'100%'}}/>
	   	               	 </div>
	   	               	 <div style={sty.songInfos}>
	   	               	    <div style={sty.infoLeft}>
	   	               	       <ul>
	   	               	          <li style={sty.songInfo}>
	   	               	             <p style={sty.songName}>1.{item[0].songName}</p>
	   	               	             <span style={sty.singerName}>{item[0].singerName}</span>
	   	               	          </li>
	   	               	          <li style={sty.songInfo}>
	   	               	             <p style={sty.songName}>2.{item[1].songName}</p>
	   	               	             <span style={sty.singerName}>{item[1].singerName}</span>
	   	               	          </li>
	   	               	           <li style={sty.songInfo}>
	   	               	             <p style={sty.songName}>3.{item[2].songName}</p>
	   	               	             <span style={sty.singerName}>{item[2].singerName}</span>
	   	               	          </li>
	   	               	       </ul>
	   	               	    </div>
	   	               	    <Icon style={sty.icon} type="right" />
	   	               	</div>
	   		    </div>
	   		    </Link>
	    		</div>
   		 		})
   		 }
 		</div>
 	)
 }
}
export default Paihang;