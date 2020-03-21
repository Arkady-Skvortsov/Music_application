<template>
	<div class="side_screen7">
		<span>Red dead Redemption music</span>
		<div class="audio_collection_block7">
		    <div class="sound_block7" @mouseover="show_repeat7('.repl91', '.down91')">
			   <p class="name7">#1 Main Theme</p>

			   <div class="audio_pole_m7 audio_p91_m7" @click="Perek7($event, '.aud91', '.audio_p91_m7')" @mouseover="Show_time7('.Aud_t91')" @mousemove="Run_block7($event, '.audio_p91_m7', '.aud91', '.Aud_t91')" @mouseout="Time_out7('.Aud_t91')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl91', '.l_of_v91', '.repl91', '.down91')" @mouseover="Over7('.l_of_v91')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol7 l_of_v91" @mouseover="Over7('.l_of_v91')" @mouseout="Ov7('.l_of_v91')">
			   	  <div class="first_vol"  @click="C1_7('.l_of_v91', '.aud91', '.repl91', '.down91')"></div>
			   	  <div class="second_vol"  @click="C2_7('.l_of_v91', '.aud91', '.repl91', '.down91')"></div>
			   	  <div class="third_vol"  @click="C3_7('.l_of_v91', '.aud91', '.repl91', '.down91')"></div>
			   	  <div class="fourth_vol"  @click="C4_7('.l_of_v91', '.aud91', '.repl91', '.down91')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud91', '.aud105', '.repl91', '.r_icon_91', '.down91')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl91" @click="Play7('.pl91', '.repl91', '.down91')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud91" @timeupdate="Update7('.aud91', '.st91', '.audio_p91_m7')" src="../sound/RDR1/Main Theme.mp3"></audio></button> 
			   <button class="next7" @click="Next7('.aud91', '.aud92', '.repl91', '.r_icon_91', '.down91')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st91">00:00</p><p class="end_time7">/05:38</p>

			    <span id="speed_aud7" class="choice_speed_91" @click="Show_speed7('.sp_block_91')">x1</span>

			   <div class="Speed_block7 sp_block_91">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_91" @click="First_speed_7('.x_first_91', '.aud91', '.choice_speed_91', '.repl91', '.down91')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_91" @click="Second_speed_7('.x_second_91', '.aud91', '.choice_speed_91', '.repl91', '.down91')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_91" @click="Third_speed_7('.x_third_91', '.aud91', '.choice_speed_91', '.repl91', '.down91')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_91" @click="Fourth_speed_7('.x_fourth_91', '.aud91', '.choice_speed_91', '.repl91', '.down91')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_91" @click="Fifth_speed_7('.x_fifth_91', '.aud91', '.choice_speed_91', '.repl91', '.down91')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_91" @click="Six_speed_7('.x_six_91', '.aud91', '.choice_speed_91', '.repl91', '.down91')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button7 repl91" @click="Replay7('.aud91', '.r_icon_91')" @mouseover="S7('.repl91')" @mouseout="hide_repeat7('.repl91')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_91" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button7 down91" @click="Download7('.down91', 'Red Dead Redemption - Main Theme', '.d_icon_91')" @mouseout="down_hide7('.down91')">
			   	  <vue-fontawesome icon="download" class="d_icon_91" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t91">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block7" @mouseover="show_repeat7('.repl92', '.down92')">
			   <p class="name7">#2 The shootist</p>

			   <div class="audio_pole_m7 audio_p92_m7" @click="Perek7($event, '.aud92', '.audio_p92_m7')" @mouseover="Show_time7('.Aud_t92')" @mousemove="Run_block7($event, '.audio_p92_m7', '.aud92', '.Aud_t92')" @mouseout="Time_out7('.Aud_t92')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl92', '.l_of_v92', '.repl92', '.down92')" @mouseover="Over7('.l_of_v92')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v92" @mouseover="Over7('.l_of_v92')" @mouseout="Ov7('.l_of_v92')"> 
			   	  <div class="first_vol" @click="C1_7('.l_of_v92', '.aud92', '.repl92', '.down92')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v92', '.aud92', '.repl92', '.down92')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v92', '.aud92', '.repl92', '.down92')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v92', '.aud92', '.repl92', '.down92')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud92', '.aud91', '.repl92', '.r_icon_92', '.down92')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl92" @click="Play7('.pl92', '.repl92', '.down92')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud92" @timeupdate="Update7('.aud92', '.st92', '.audio_p92_m7')" src="../sound/RDR1/The Shootist.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud92', '.aud93', '.repl92', '.r_icon_92', '.down92')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st92">00:00</p><p class="end_time7">/04:17</p>

			   <span id="speed_aud7" class="choice_speed_92" @click="Show_speed7('.sp_block_92')">x1</span>

			   <div class="Speed_block7 sp_block_92">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_92" @click="First_speed_7('.x_first_92', '.aud92', '.choice_speed_92', '.repl92', '.down92')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_92" @click="Second_speed_7('.x_second_92', '.aud92', '.choice_speed_92', '.repl92', '.down92')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_92" @click="Third_speed_7('.x_third_92', '.aud92', '.choice_speed_92', '.repl92', '.down92')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_92" @click="Fourth_speed_7('.x_fourth_92', '.aud92', '.choice_speed_92', '.repl92', '.down92')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_92" @click="Fifth_speed_7('.x_fifth_92', '.aud92', '.choice_speed_92', '.repl92', '.down92')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_92" @click="Six_speed_7('.x_six_92', '.aud92', '.choice_speed_92', '.repl92', '.down92')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl92" @click="Replay7('.aud92', '.r_icon_92')" @mouseover="S7('.repl92')" @mouseout="hide_repeat7('.repl92')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_92" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down92" @click="Download7('.down92', 'Red Dead Redemption - The shootist', '.d_icon_92')" @mouseout="down_hide7('.down92')">
			   	  <vue-fontawesome icon="download" class="d_icon_92" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio7">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block7" @mouseover="show_repeat7('.repl93', '.down93')">
			   <p class="name7">#3 Horseplay</p>

			   <div class="audio_pole_m7 audio_p93_m7" @click="Perek7($event, '.aud93', '.audio_p93_m7')" @mouseover="Show_time7('.Aud_t93')" @mousemove="Run_block7($event, '.audio_p93_m7', '.aud93', '.Aud_t93')" @mouseout="Time_out7('.Aud_t93')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl93', '.l_of_v93', '.repl93', '.down93')" @mouseover="Over7('.l_of_v93')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v93" @mouseover="Over7('.l_of_v93')" @mouseout="Ov7('.l_of_v93')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v93', '.aud93', '.repl93', '.down93')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v93', '.aud93', '.repl93', '.down93')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v93', '.aud93', '.repl93', '.down93')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v93', '.aud93', '.repl93', '.down93')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud93', '.aud92', '.repl93', '.r_icon_93', '.down93')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl93" @click="Play7('.pl93', '.repl93', '.down93')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud93" @timeupdate="Update7('.aud93', '.st93', '.audio_p93_m7')" src="../sound/RDR1/Horseplay.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud93', '.aud94', '.repl93', '.r_icon_93', '.down93')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time7 st93">00:00</p><p class="end_time7">/03:49</p>

			   <span id="speed_aud7" class="choice_speed_93" @click="Show_speed7('.sp_block_93')">x1</span>

			   <div class="Speed_block7 sp_block_93">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_93" @click="First_speed_7('.x_first_93', '.aud93', '.choice_speed_93', '.repl93', '.down93')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_93" @click="Second_speed_7('.x_second_93', '.aud93', '.choice_speed_93', '.repl93', '.down93')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_93" @click="Third_speed_7('.x_third_93', '.aud93', '.choice_speed_93', '.repl93', '.down93')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_93" @click="Fourth_speed_7('.x_fourth_93', '.aud93', '.choice_speed_93', '.repl93', '.down93')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_93" @click="Fifth_speed_7('.x_fifth_93', '.aud93', '.choice_speed_93', '.repl93', '.down93')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_93" @click="Six_speed_7('.x_six_93', '.aud93', '.choice_speed_93', '.repl93', '.down93')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl93" @click="Replay7('.aud93', '.r_icon_93')" @mouseover="S7('.repl93')" @mouseout="hide_repeat7('.repl93')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_93" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down93" @click="Download7('.down93', 'Red Dead Redemption - HorsePlay', '.d_icon_93')" @mouseout="down_hide7('.down93')">
			   	  <vue-fontawesome icon="download" class="d_icon_93" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t93">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl94', '.down94')">
			   <p class="name7">#4 Luz y Sombra</p>

			   <div class="audio_pole_m7 audio_p94_m7" @click="Perek7($event, '.aud94', '.audio_p94_m7')" @mouseover="Show_time7('.Aud_t94')" @mousemove="Run_block7($event, '.audio_p94_m7', '.aud94', '.Aud_t94')" @mouseout="Time_out7('.Aud_t94')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl94', '.l_of_v94', '.repl94', '.down94')" @mouseover="Over7('.l_of_v94')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v94" @mouseover="Over7('.l_of_v94')" @mouseout="Ov7('.l_of_v94')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v94', '.aud94', '.repl94', '.down94')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v94', '.aud94', '.repl94', '.down94')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v94', '.aud94', '.repl94', '.down94')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v94', '.aud94', '.repl94', '.down94')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud94', '.aud93', '.repl94', '.r_icon_94', '.down94')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl94" @click="Play7('.pl94', '.repl94', '.down94')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud94" @timeupdate="Update7('.aud94', '.st94', '.audio_p94_m7')" src="../sound/RDR1/Luz y Sombra.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud94', '.aud95', '.repl94', '.r_icon_94', '.down94')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

                <p class="start_time7 st94">00:00</p><p class="end_time7">/05:19</p>

			   <span id="speed_aud7" class="choice_speed_94" @click="Show_speed7('.sp_block_94')">x1</span>

			   <div class="Speed_block7 sp_block_94">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_94" @click="First_speed_7('.x_first_94', '.aud94', '.choice_speed_94', '.repl94', '.down94')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_94" @click="Second_speed_7('.x_second_94', '.aud94', '.choice_speed_94', '.repl94', '.down94')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_94" @click="Third_speed_7('.x_third_94', '.aud94', '.choice_speed_94', '.repl94', '.down94')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_94" @click="Fourth_speed_7('.x_fourth_94', '.aud94', '.choice_speed_94', '.repl94', '.down94')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_94" @click="Fifth_speed_7('.x_fifth_94', '.aud94', '.choice_speed_94', '.repl94', '.down94')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_94" @click="Six_speed_7('.x_six_94', '.aud94', '.choice_speed_94', '.repl94', '.down94')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl94" @click="Replay7('.aud94', '.r_icon_94')" @mouseover="S7('.repl94')" @mouseout="hide_repeat7('.repl94')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_94" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down94" @click="Download7('.down94', 'Red Dead Redemption - Luz y Sombra', '.d_icon_94')" @mouseout="down_hide7('.down94')">
			   	  <vue-fontawesome icon="download" class="d_icon_94" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t94">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl95', '.down95')">
			   <p class="name7 RD1 text6_mobile_5">#5 The Outlaw's Return</p>

			   <div class="audio_pole_m7 audio_p95_m7" @click="Perek7($event, '.aud95', '.audio_p95_m7')" @mouseover="Show_time7('.Aud_t95')" @mousemove="Run_block7($event, '.audio_p95_m7', '.aud95', '.Aud_t95')" @mouseout="Time_out7('.Aud_t95')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl95', '.l_of_v95', '.repl95', '.down95')" @mouseover="Over7('.l_of_v95')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v95" @mouseover="Over7('.l_of_v95')" @mouseout="Ov7('.l_of_v95')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v95', '.aud95', '.repl95', '.down95')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v95', '.aud95', '.repl95', '.down95')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v95', '.aud95', '.repl95', '.down95')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v95', '.aud95', '.repl95', '.down95')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud95', '.aud94', '.repl95', '.r_icon_95', '.down95')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl95" @click="Play7('.pl95', '.repl95', '.down95')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud95" @timeupdate="Update7('.aud95', '.st95', '.audio_p95_m7')" src="../sound/RDR1/The Outlaw's Return.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud95', '.aud96', '.repl95', '.r_icon_95', '.down95')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time7 st95">00:00</p><p class="end_time7">/06:54</p>

			   <span id="speed_aud7" class="choice_speed_95" @click="Show_speed7('.sp_block_95')">x1</span>

			   <div class="Speed_block7 sp_block_95">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_95" @click="First_speed_7('.x_first_95', '.aud95', '.choice_speed_95', '.repl95', '.down95')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_95" @click="Second_speed_7('.x_second_95', '.aud95', '.choice_speed_95', '.repl95', '.down95')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_95" @click="Third_speed_7('.x_third_95', '.aud95', '.choice_speed_95', '.repl95', '.down95')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_95" @click="Fourth_speed_7('.x_fourth_95', '.aud95', '.choice_speed_95', '.repl95', '.down95')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_95" @click="Fifth_speed_7('.x_fifth_95', '.aud95', '.choice_speed_95', '.repl95', '.down95')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_95" @click="Six_speed_7('.x_six_95', '.aud95', '.choice_speed_95', '.repl95', '.down95')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl95" @click="Replay7('.aud95', '.r_icon_95')" @mouseover="S7('.repl95')" @mouseout="hide_repeat7('.repl95')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_95" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down95" @click="Download7('.down95', 'Red Dead Redemption - The Outlaw`s Return', '.d_icon_95')" @mouseout="down_hide7('.down95')">
			   	  <vue-fontawesome icon="download" class="d_icon_95" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio7 Aud_t95">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl96', '.down96')">
			   <p class="name7 text6_mobile_6">#6 Far Away</p>

			   <div class="audio_pole_m7 audio_p96_m7" @click="Perek7($event, '.aud96', '.audio_p96_m7')" @mouseover="Show_time7('.Aud_t96')" @mousemove="Run_block7($event, '.audio_p96_m7', '.aud96', '.Aud_t96')" @mouseout="Time_out7('.Aud_t96')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl96', '.l_of_v96', '.repl96', '.down96')" @mouseover="Over7('.l_of_v96')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v96" @mouseover="Over7('.l_of_v96')" @mouseout="Ov7('.l_of_v96')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v96', '.aud96', '.repl96', '.down96')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v96', '.aud96', '.repl96', '.down96')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v96', '.aud96', '.repl96', '.down96')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v96', '.aud96', '.repl96', '.down96')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud96', '.aud95', '.repl96', '.r_icon_96', '.down96')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl96" @click="Play7('.pl96', '.repl96', '.down96')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud96" @timeupdate="Update7('.aud96', '.st96', '.audio_p96_m7')" src="../sound/RDR1/Far Away.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud96', '.aud97', '.repl96', '.r_icon_96', '.down96')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time7 st96">00:00</p><p class="end_time7">/04:40</p>

			   <span id="speed_aud7" class="choice_speed_96" @click="Show_speed7('.sp_block_96')">x1</span>

			   <div class="Speed_block7 sp_block_96">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_96" @click="First_speed_7('.x_first_96', '.aud96', '.choice_speed_96', '.repl96', '.down96')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_96" @click="Second_speed_7('.x_second_96', '.aud96', '.choice_speed_96', '.repl96', '.down96')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_96" @click="Third_speed_7('.x_third_96', '.aud96', '.choice_speed_96', '.repl96', '.down96')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_96" @click="Fourth_speed_7('.x_fourth_96', '.aud96', '.choice_speed_96', '.repl96', '.down96')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_96" @click="Fifth_speed_7('.x_fifth_96', '.aud96', '.choice_speed_96', '.repl96', '.down96')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_96" @click="Six_speed_7('.x_six_96', '.aud96', '.choice_speed_96', '.repl96', '.down96')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl96" @click="Replay7('.aud96', '.r_icon_96')" @mouseover="S7('.repl96')" @mouseout="hide_repeat7('.repl96')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_96" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down96" @click="Download7('.down96', 'Red Dead Redemption - Far Away', '.d_icon_96')" @mouseout="down_hide7('.down96')">
			   	  <vue-fontawesome icon="download" class="d_icon_96" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio7 Aud_t96">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl97', '.down97')">
			   <p class="name7 text6_mobile_7">#7 Triggernometry</p>

			   <div class="audio_pole_m7 audio_p97_m7" @click="Perek7($event, '.aud97', '.audio_p97_m7')" @mouseover="Show_time7('.Aud_t97')" @mousemove="Run_block7($event, '.audio_p97_m7', '.aud97', '.Aud_t97')" @mouseout="Time_out7('.Aud_t97')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl97', '.l_of_v97', '.repl97', '.down97')" @mouseover="Over7('.l_of_v97')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v97" @mouseover="Over7('.l_of_v97')" @mouseout="Ov7('.l_of_v97')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v97', '.aud97', '.repl97', '.down97')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v97', '.aud97', '.repl97', '.down97')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v97', '.aud97', '.repl97', '.down97')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v97', '.aud97', '.repl97', '.down97')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud97', '.aud96', '.repl97', '.r_icon_97', '.down97')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl97" @click="Play7('.pl97', '.repl97', '.down97')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud97" @timeupdate="Update7('.aud97', '.st97', '.audio_p97_m7')" src="../sound/RDR1/Triggernometry.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud97', '.aud98', '.repl97', '.r_icon_97', '.down97')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st97">00:00</p><p class="end_time7">/05:24</p>

			   <span id="speed_aud7" class="choice_speed_97" @click="Show_speed7('.sp_block_97')">x1</span>

			   <div class="Speed_block7 sp_block_97">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_97" @click="First_speed_7('.x_first_97', '.aud97', '.choice_speed_97', '.repl97', '.down97')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_97" @click="Second_speed_7('.x_second_97', '.aud97', '.choice_speed_97', '.repl97', '.down97')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_97" @click="Third_speed_7('.x_third_97', '.aud97', '.choice_speed_97', '.repl97', '.down97')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_97" @click="Fourth_speed_7('.x_fourth_97', '.aud97', '.choice_speed_97', '.repl97', '.down97')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_97" @click="Fifth_speed_7('.x_fifth_97', '.aud97', '.choice_speed_97', '.repl97', '.down97')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_97" @click="Six_speed_7('.x_six_97', '.aud97', '.choice_speed_97', '.repl97', '.down97')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl97" @click="Replay7('.aud97', '.r_icon_97')" @mouseover="S7('.repl97')" @mouseout="hide_repeat7('.repl97')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_97" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down97" @click="Download7('.down97', 'Red Dead Redemption - Triggernometry', '.d_icon_97')" @mouseout="down_hide7('.down97')">
			   	  <vue-fontawesome icon="download" class="d_icon_97" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio7 Aud_t97">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl98', '.down98')">
			   <p class="name7">#8 Estansia</p>

			   <div class="audio_pole_m7 audio_p98_m7" @click="Perek7($event, '.aud98', '.audio_p98_m7')" @mouseover="Show_time7('.Aud_t98')" @mousemove="Run_block7($event, '.audio_p98_m7', '.aud98', '.Aud_t98')" @mouseout="Time_out7('.Aud_t98')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl98', '.l_of_v98', '.repl98', '.down98')" @mouseover="Over7('.l_of_v98')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v98" @mouseover="Over7('.l_of_v98')" @mouseout="Ov7('.l_of_v98')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v98', '.aud98', '.repl98', '.down98')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v98', '.aud98', '.repl98', '.down98')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v98', '.aud98', '.repl98', '.down98')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v98', '.aud98', '.repl98', '.down98')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud98', '.aud97', '.repl98', '.r_icon_98', '.down98')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl98" @click="Play7('.pl98', '.repl98', '.down98')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud98" @timeupdate="Update7('.aud98', '.st98', '.audio_p98_m7')" src="../sound/RDR1/Estancia.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud98', '.aud99', '.repl98', '.r_icon_98', '.down98')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st98">00:00</p><p class="end_time7">/02:02</p>

			   <span id="speed_aud7" class="choice_speed_98" @click="Show_speed7('.sp_block_98')">x1</span>

			   <div class="Speed_block7 sp_block_98">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_98" @click="First_speed_7('.x_first_98', '.aud98', '.choice_speed_98', '.repl98', '.down98')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_98" @click="Second_speed_7('.x_second_98', '.aud98', '.choice_speed_98', '.repl98', '.down98')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_98" @click="Third_speed_7('.x_third_98', '.aud98', '.choice_speed_98', '.repl98', '.down98')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_98" @click="Fourth_speed_7('.x_fourth_98', '.aud98', '.choice_speed_98', '.repl98', '.down98')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_98" @click="Fifth_speed_7('.x_fifth_98', '.aud98', '.choice_speed_98', '.repl98', '.down98')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_98" @click="Six_speed_7('.x_six_98', '.aud98', '.choice_speed_98', '.repl98', '.down98')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl98" @click="Replay7('.aud98', '.r_icon_98')" @mouseover="S7('.repl98')" @mouseout="hide_repeat7('.repl98')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_98" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down98" @click="Download7('.down98', 'Red Dead Redemption - Estansia', '.d_icon_98')" @mouseout="down_hide7('.down98')">
			   	  <vue-fontawesome icon="download" class="d_icon_98" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t98">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl99', '.down99')">
			   <p class="name7 text6_mobile_9">#9 Gun play</p>

			   <div class="audio_pole_m7 audio_p99_m7" @click="Perek7($event, '.aud99', '.audio_p99_m7')" @mouseover="Show_time7('.Aud_t99')" @mousemove="Run_block7($event, '.audio_p99_m7', '.aud99', '.Aud_t99')" @mouseout="Time_out7('.Aud_t99')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl99', '.l_of_v99', '.repl99', '.down99')" @mouseover="Over7('.l_of_v99')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v99" @mouseover="Over7('.l_of_v99')" @mouseout="Ov7('.l_of_v99')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v99', '.aud99', '.repl99', '.down99')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v99', '.aud99', '.repl99', '.down99')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v99', '.aud99', '.repl99', '.down99')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v99', '.aud99', '.repl99', '.down99')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud99', '.aud98', '.repl99', '.r_icon_99', '.down99')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl99" @click="Play7('.pl99', '.repl99', '.down99')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud99" @timeupdate="Update7('.aud99', '.st99', '.audio_p99_m7')" src="../sound/RDR1/Gunplay.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud99', '.aud100', '.repl99', '.r_icon_99', '.down99')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st99">00:00</p><p class="end_time7">/01:28</p>

			   <span id="speed_aud7" class="choice_speed_99" @click="Show_speed7('.sp_block_99')">x1</span>

			   <div class="Speed_block7 sp_block_99">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_99" @click="First_speed_7('.x_first_99', '.aud99', '.choice_speed_99', '.repl99', '.down99')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_99" @click="Second_speed_7('.x_second_99', '.aud99', '.choice_speed_99', '.repl99', '.down99')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_99" @click="Third_speed_7('.x_third_99', '.aud99', '.choice_speed_99', '.repl99', '.down99')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_99" @click="Fourth_speed_7('.x_fourth_99', '.aud99', '.choice_speed_99', '.repl99', '.down99')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_99" @click="Fifth_speed_7('.x_fifth_99', '.aud99', '.choice_speed_99', '.repl99', '.down99')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_99" @click="Six_speed_7('.x_six_99', '.aud99', '.choice_speed_99', '.repl99', '.down99')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl99" @click="Replay7('.aud99', '.r_icon_99')" @mouseover="S7('.repl99')" @mouseout="hide_repeat7('.repl99')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_99" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down99" @click="Download7('.down99', 'Red Dead Redemption - Gun Play', '.d_icon_99')" @mouseout="down_hide7('.down99')">
			   	  <vue-fontawesome icon="download" class="d_icon_99" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t99">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl100', '.down100')">
			   <p class="name7 RD2 text6_mobile_10">#10 El Club de los Cuerpos</p>

			   <div class="audio_pole_m7 audio_p100_m7" @click="Perek7($event, '.aud100', '.audio_p100_m7')" @mouseover="Show_time7('.Aud_t100')" @mousemove="Run_block7($event, '.audio_p100_m7', '.aud100', '.Aud_t100')" @mouseout="Time_out7('.Aud_t100')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl100', '.l_of_v100', '.repl100', '.down100')" @mouseover="Over7('.l_of_v100')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v100" @mouseover="Over7('.l_of_v100')" @mouseout="Ov7('.l_of_v100')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v100', '.aud100', '.repl100', '.down100')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v100', '.aud100', '.repl100', '.down100')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v100', '.aud100', '.repl100', '.down100')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v100', '.aud100', '.repl100', '.down100')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud100', '.aud99', '.repl100', '.r_icon_100', '.down100')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl100" @click="Play7('.pl100', '.repl100', '.down100')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud100" @timeupdate="Update7('.aud100', '.st100', '.audio_p100_m7')" src="../sound/RDR1/El Club de los Cuerpos.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud100', '.aud101', '.repl100', '.r_icon_100', '.down100')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time7 st100">00:00</p><p class="end_time7">/06:24</p>

			   <span id="speed_aud7" class="choice_speed_100" @click="Show_speed7('.sp_block_100')">x1</span>

			   <div class="Speed_block7 sp_block_100">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_100" @click="First_speed_7('.x_first_100', '.aud100', '.choice_speed_100', '.repl100', '.down100')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_100" @click="Second_speed_7('.x_second_100', '.aud100', '.choice_speed_100', '.repl100', '.down100')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_100" @click="Third_speed_7('.x_third_100', '.aud100', '.choice_speed_100', '.repl100', '.down100')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_100" @click="Fourth_speed_7('.x_fourth_100', '.aud100', '.choice_speed_100', '.repl100', '.down100')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_100" @click="Fifth_speed_7('.x_fifth_100', '.aud100', '.choice_speed_100', '.repl100', '.down100')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_100" @click="Six_speed_7('.x_six_100', '.aud100', '.choice_speed_100', '.repl100', '.down100')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl100" @click="Replay7('.aud100', '.r_icon_100')" @mouseover="S7('.repl100')" @mouseout="hide_repeat7('.repl100')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_100" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down100" @click="Download7('.down100', 'Red Dead Redemption - El Club de los Cuerpos', '.d_icon_100')" @mouseout="down_hide7('.down100')">
			   	  <vue-fontawesome icon="download" class="d_icon_100" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t100">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl101', '.down101')">
			   <p class="name7 RD3 text6_mobile_11">#11 Born Unto Trouble</p>

			   <div class="audio_pole_m7 audio_p101_m7" @click="Perek7($event, '.aud101', '.audio_p101_m7')" @mouseover="Show_time7('.Aud_t101')" @mousemove="Run_block7($event, '.audio_p101_m7', '.aud101', '.Aud_t101')" @mouseout="Time_out7('.Aud_t101')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl101', '.l_of_v101', '.repl101', '.down101')" @mouseover="Over7('.l_of_v101')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v101" @mouseover="Over7('.l_of_v101')" @mouseout="Ov7('.l_of_v101')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v101', '.aud101', '.repl101', '.down101')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v101', '.aud101', '.repl101', '.down101')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v101', '.aud101', '.repl101', '.down101')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v101', '.aud101', '.repl101', '.down101')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud101', '.aud100', '.repl101', '.r_icon_101', '.down101')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl101" @click="Play7('.pl101', '.repl101', '.down101')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud101" @timeupdate="Update7('.aud101', '.st101', '.audio_p101_m7')" src="../sound/RDR1/Born Unto Trouble.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud101', '.aud102', '.repl101', '.r_icon_101', '.down101')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st101">00:00</p><p class="end_time7">/03:12</p>

			   <span id="speed_aud7" class="choice_speed_101" @click="Show_speed7('.sp_block_101')">x1</span>

			   <div class="Speed_block7">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_101" @click="First_speed_7('.x_first_101', '.aud101', '.choice_speed_101', '.repl101', '.down101')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_101" @click="Second_speed_7('.x_second_101', '.aud101', '.choice_speed_101', '.repl101', '.down101')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_101" @click="Third_speed_7('.x_third_101', '.aud101', '.choice_speed_101', '.repl101', '.down101')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_101" @click="Fourth_speed_7('.x_fourth_101', '.aud101', '.choice_speed_101', '.repl101', '.down101')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_101" @click="Fifth_speed_7('.x_fifth_101', '.aud101', '.choice_speed_101', '.repl101', '.down101')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_101" @click="Six_speed_7('.x_six_101', '.aud101', '.choice_speed_101', '.repl101', '.down101')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl101" @click="Replay7('.aud101', '.r_icon_101')" @mouseover="S7('.repl101')" @mouseout="hide_repeat7('.repl101')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_101" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down101" @click="Download7('.down101', 'Red Dead Redemption - El Club de los Cuerpos', '.d_icon_101')" @mouseout="down_hide7('.down101')">
			   	  <vue-fontawesome icon="download" class="d_icon_101" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t101">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl102', '.down102')">
			   <p class="name7 text6_mobile_12">#12 Dead and Alley</p>

			   <div class="audio_pole_m7 audio_p102_m7" @click="Perek7($event, '.aud102', '.audio_p102_m7')" @mouseover="Show_time7('.Aud_t102')" @mousemove="Run_block7($event, '.audio_p102_m7', '.aud102', '.Aud_t102')" @mouseout="Time_out7('.Aud_t102')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl102', '.l_of_v102', '.repl102', '.down102')" @mouseover="Over7('.l_of_v102')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v102" @mouseover="Over7('.l_of_v102')" @mouseout="Ov7('.l_of_v102')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v102', '.aud102', '.repl102', '.down102')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v102', '.aud102', '.repl102', '.down102')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v102', '.aud102', '.repl102', '.down102')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v102', '.aud102', '.repl102', '.down102')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud102', '.aud101', '.repl102', '.r_icon_102', '.down102')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl102" @click="Play7('.pl102', '.repl102', '.down102')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud102" @timeupdate="Update7('.aud102', '.st102', '.audio_p102_m7')" src="../sound/RDR1/Dead End Alley.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud102', '.aud103', '.repl102', '.r_icon_102', '.down102')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st102">00:00</p><p class="end_time7">/02:06</p>

			   <span id="speed_aud7" class="choice_speed_102" @click="Show_speed7('.sp_block_102')">x1</span>

			   <div class="Speed_block7 sp_block_102">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_102" @click="First_speed_7('.x_first_102', '.aud102', '.choice_speed_102', '.repl102', '.down102')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_102" @click="Second_speed_7('.x_second_102', '.aud102', '.choice_speed_102', '.repl102', '.down102')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_102" @click="Third_speed_7('.x_third_102', '.aud102', '.choice_speed_102', '.repl102', '.down102')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_102" @click="Fourth_speed_7('.x_fourth_102', '.aud102', '.choice_speed_102', '.repl102', '.down102')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_102" @click="Fifth_speed_7('.x_fifth_102', '.aud102', '.choice_speed_102', '.repl102', '.down102')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_102" @click="Six_speed_7('.x_six_102', '.aud102', '.choice_speed_102', '.repl102', '.down102')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl102" @click="Replay7('.aud102', '.r_icon_102')" @mouseover="S7('.repl102')" @mouseout="hide_repeat7('.repl102')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_102" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down102" @click="Download7('.down102', 'Red Dead Redemption - Dead and Alley', '.d_icon_102')" @mouseout="down_hide7('.down102')">
			   	  <vue-fontawesome icon="download" class="d_icon_101" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t102">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl103', '.down103')">
			   <p class="name7 RD4 text6_mobile_13">#13 Bury Me Not On The Lone Prairi</p>

			   <div class="audio_pole_m7 audio_p103_m7" @click="Perek7($event, '.aud103', '.audio_p103_m7')" @mouseover="Show_time7('.Aud_t103')" @mousemove="Run_block7($event, '.audio_p103_m7', '.aud103', '.Aud_t103')" @mouseout="Time_out7('.Aud_t103')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl103', '.l_of_v103', '.repl103', '.down103')" @mouseover="Over7('.l_of_v103')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v103" @mouseover="Over7('.l_of_v103')" @mouseout="Ov7('.l_of_v103')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v103', '.aud103', '.repl103', '.down103')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v103', '.aud103', '.repl103', '.down103')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v103', '.aud103', '.repl103', '.down103')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v103', '.aud103', '.repl103', '.down103')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud103', '.aud102', '.repl103', '.r_icon_103', '.down103')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl103" @click="Play7('.pl103', '.repl103', '.down103')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud103" @timeupdate="Update7('.aud103', '.st103', '.audio_p103_m7')" src="../sound/RDR1/Bury Me Not On The Lone Prairie.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud103', '.aud104', '.repl103', '.r_icon_103', '.down103')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st103">00:00</p><p class="end_time7">/02:24</p>

			   <span id="speed_aud7" class="choice_speed_103" @click="Show_speed7('.sp_block_103')">x1</span>

			   <div class="Speed_block7 sp_block_103">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_103" @click="First_speed_7('.x_first_103', '.aud103', '.choice_speed_103', '.repl103', '.down103')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_103" @click="Second_speed_7('.x_second_103', '.aud103', '.choice_speed_103', '.repl103', '.down103')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_103" @click="Third_speed_7('.x_third_103', '.aud103', '.choice_speed_103', '.repl103', '.down103')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_103" @click="Fourth_speed_7('.x_fourth_103', '.aud103', '.choice_speed_103', '.repl103', '.down103')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_103" @click="Fifth_speed_7('.x_fifth_103', '.aud103', '.choice_speed_103', '.repl103', '.down103')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_103" @click="Six_speed_7('.x_six_103', '.aud103', '.choice_speed_103', '.repl103', '.down103')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl103" @click="Replay7('.aud103', '.r_icon_103')" @mouseover="S7('.repl103')" @mouseout="hide_repeat7('.repl103')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_103" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down103" @click="Download7('.down103', 'Red Dead Redemption - Bury Me Not On The Lone Prairi', '.d_icon_103')" @mouseout="down_hide7('.down103')">
			   	  <vue-fontawesome icon="download" class="d_icon_103" size="3" color="white"></vue-fontawesome>
			   </div>

			     <div class="Time_of_audio7 Aud_t103">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl104', '.down104')">
			   <p class="name7 RD5 text6_mobile_14">#14 Deadman's Gun</p>

			   <div class="audio_pole_m7 audio_p104_m7" @click="Perek7($event, '.aud104', '.audio_p104_m7')" @mouseover="Show_time7('.Aud_t104')" @mousemove="Run_block7($event, '.audio_p104_m7', '.aud104', '.Aud_t104')" @mouseout="Time_out7('.Aud_t104')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl104', '.l_of_v104', '.repl104', '.down104')" @mouseover="Over7('.l_of_v104')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v104" @mouseover="Over7('.l_of_v104')" @mouseout="Ov7('.l_of_v104')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v104', '.aud104', '.repl104', '.down104')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v104', '.aud104', '.repl104', '.down104')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v104', '.aud104', '.repl104', '.down104')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v104', '.aud104', '.repl104', '.down104')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud104', '.aud103', '.repl104', '.r_icon_104', '.down104')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl104" @click="Play7('.pl104', '.repl104', '.down104')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud104" @timeupdate="Update7('.aud104', '.st104', '.audio_p104_m7')" src="../sound/RDR1/Deadman's Gun.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud104', '.aud105', '.repl104', '.r_icon_104', '.down104')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st104">00:00</p><p class="end_time7">/04:15</p>

			   <span id="speed_aud7" class="choice_speed_104" @click="Show_speed7('.sp_block_104')">x1</span>

			   <div class="Speed_block7 sp_block_104">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_104" @click="First_speed_7('.x_first_104', '.aud104', '.choice_speed_104', '.repl104', '.down104')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_104" @click="Second_speed_7('.x_second_104', '.aud104', '.choice_speed_104', '.repl104', '.down104')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_104" @click="Third_speed_7('.x_third_104', '.aud104', '.choice_speed_104', '.repl104', '.down104')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_104" @click="Fourth_speed_7('.x_fourth_104', '.aud104', '.choice_speed_104', '.repl104', '.down104')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_104" @click="Fifth_speed_7('.x_fifth_104', '.aud104', '.choice_speed_104', '.repl104', '.down104')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_104" @click="Six_speed_7('.x_six_104', '.aud104', '.choice_speed_104', '.repl104', '.down104')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl104" @click="Replay7('.aud104', '.r_icon_104')" @mouseover="S7('.repl104')" @mouseout="hide_repeat7('.repl104')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_104" size="3" color="white"></vue-fontawesome>
			   </div>

               <div class="Download_button7 down104" @click="Download7('.down104', 'Red Dead Redemption - Deadman`s Gun', '.d_icon_104')" @mouseout="down_hide7('.down104')">
			   	  <vue-fontawesome icon="download" class="d_icon_104" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio7 Aud_t104">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block7" @mouseover="show_repeat7('.repl105', '.down105')">
			   <p class="name7 RD6 text6_mobile_15">#15 Exodus in America</p>

			   <div class="audio_pole_m7 audio_p105_m7" @click="Perek7($event, '.aud105', '.audio_p105_m7')" @mouseover="Show_time7('.Aud_t105')" @mousemove="Run_block7($event, '.audio_p105_m7', '.aud105', '.Aud_t105')" @mouseout="Time_out7('.Aud_t105')">
				   <div class="aud_p7"></div>
			   </div>

			   <button id="vol7" @click="Vol7('.pl105', '.l_of_v105', '.repl105', '.down105')" @mouseover="Over7('.l_of_v105')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol7 l_of_v105" @mouseover="Over7('.l_of_v105')" @mouseout="Ov7('.l_of_v105')">
			   	  <div class="first_vol" @click="C1_7('.l_of_v105', '.aud105', '.repl105', '.down105')"></div>
			   	  <div class="second_vol" @click="C2_7('.l_of_v105', '.aud105', '.repl105', '.down105')"></div>
			   	  <div class="third_vol" @click="C3_7('.l_of_v105', '.aud105', '.repl105', '.down105')"></div>
			   	  <div class="fourth_vol" @click="C4_7('.l_of_v105', '.aud105', '.repl105', '.down105')"></div>
			   </div>

			   <button class="prev7" @click="Prev7('.aud105', '.aud104', '.repl105', '.r_icon_105', '.down105')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play7 pl105" @click="Play7('.pl105', '.repl105', '.down105')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud105" @timeupdate="Update7('.aud105', '.st105', '.audio_p105_m7')" src="../sound/RDR1/Exodus in America.mp3"></audio></button>
			   <button class="next7" @click="Next7('.aud105', '.aud91', '.repl105', '.r_icon_105', '.down105')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time7 st105">00:00</p><p class="end_time7">/04:59</p>

			   <span id="speed_aud7" class="choice_speed_105" @click="Show_speed7('.sp_block_105')">x1</span>

			   <div class="Speed_block7 sp_block_105">
			   	   <div class="contain7">
			   	   	  <div class="sp_25 b7 x_first_105" @click="First_speed_7('.x_first_105', '.aud105', '.choice_speed_105', '.repl105', '.down105')"><p>x.25</p></div>
			   	      <div class="sp_5 b7 x_second_105" @click="Second_speed_7('.x_second_105', '.aud105', '.choice_speed_105', '.repl105', '.down105')"><p>x.5</p></div>
			   	      <div class="sp_1 b7 x_third_105" @click="Third_speed_7('.x_third_105', '.aud105', '.choice_speed_105', '.repl105', '.down105')"><p>x1</p></div>
			   	      <div class="sp_1_25 b7 x_fourth_105" @click="Fourth_speed_7('.x_fourth_105', '.aud105', '.choice_speed_105', '.repl105', '.down105')"><p>x1.25</p></div>
			   	      <div class="sp_15 b7 x_fifth_105" @click="Fifth_speed_7('.x_fifth_105', '.aud105', '.choice_speed_105', '.repl105', '.down105')"><p>x1.5</p></div>
			   	      <div class="sp_2 b7 x_six_105" @click="Six_speed_7('.x_six_105', '.aud105', '.choice_speed_105', '.repl105', '.down105')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button7 repl105" @click="Replay7('.aud105', '.r_icon_105')" @mouseover="S7('.repl105')" @mouseout="hide_repeat7('.repl105')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_105" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button7 down105" @click="Download7('.down105', 'Red Dead Redemption - Exodus in America', '.d_icon_105')" @mouseout="down_hide7('.down105')">
			   	  <vue-fontawesome icon="download" class="d_icon_105" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio7 Aud_t105">
			   	   <span id="t7">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
		name: "Red_dead_redemption",
		methods: {
        Play7(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_10');
            DOWN_ELEM_4.classList.add('d_first_anim7');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_9');
               DOWN_ELEM_4.classList.remove('d_first_move7');
               REPL_ELEM_4.classList.remove('Rep_10');
               DOWN_ELEM_4.classList.remove('d_first_anim7');
      	    }, 1100);

            opov_4_block.classList.add('show_n_block_anim');

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910)
      	 } else {
      	    vl.children[1].pause();

      	    opov_4_block.classList.add("show_n_block_anim");
            
      	    opov_4_block.children[0].children[0].textContent = `${opov_4_name} - стоит на паузе`;

      	     REPL_ELEM_4.classList.add('Rep_10');
      	     DOWN_ELEM_4.classList.add('d_first_anim7');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_9');
               DOWN_ELEM_4.classList.remove('d_first_move7');
               REPL_ELEM_4.classList.remove('Rep_10');
               DOWN_ELEM_4.classList.remove('d_first_anim7');
      	    }, 1100);

      	    setTimeout(() => {
               opov_4_block.classList.add('show_n_block'); 
      	    }, 710);

      	    setTimeout(() => {
               opov_4_block.classList.add('fokus');
      	    }, 3710);

      	    setTimeout(() => {
               opov_4_block.classList.add("hide_block");
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block');
               opov_4_block.classList.remove('hide_block');
      	    }, 4910); 
      	 }
      },

      Vol7(el2, lvl1, Repl_elem_2, Down_elem_2) {
      	let vl2 = document.querySelector(el2);
      	let Lvl1 = document.querySelector(lvl1);
      	let opov_4_block = document.querySelector('.opoveshenie_block');
      	let opov_4_name = vl2.parentElement.children[0].textContent;
      	let REPL_ELEM_2 = document.querySelector(Repl_elem_2);
      	let DOWN_ELEM_2 = document.querySelector(Down_elem_2);

      	if(vl2.children[1].volume === 1) {
      		vl2.children[1].volume = 0;

      		Lvl1.children[3].style.background = "white";
      	    Lvl1.children[2].style.background = "white";
      	    Lvl1.children[1].style.background = "white";
      	    Lvl1.children[0].style.background = "white";
            
            opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 0%`;

            REPL_ELEM_2.classList.add('Rep_10');
            DOWN_ELEM_2.classList.add('d_first_anim7');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_9');
               DOWN_ELEM_2.classList.remove('d_first_move7');
               REPL_ELEM_2.classList.remove('Rep_10');
               DOWN_ELEM_2.classList.remove('d_first_anim7');
      	    }, 1100);

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910);
      	} else {
      		vl2.children[1].volume = 1;

      		Lvl1.children[3].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[2].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[1].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[0].style.background = "rgba(51, 204, 0, .8)";

            opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 100%`;

            REPL_ELEM_2.classList.add('Rep_10');
            DOWN_ELEM_2.classList.add('d_first_anim7');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_9');
               DOWN_ELEM_2.classList.remove('d_first_move7');
               REPL_ELEM_2.classList.remove('Rep_10');
               DOWN_ELEM_2.classList.remove('d_fist_anim7');
      	    }, 1100);

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910);
      	}
      },
              /* Download file function() :) */
      Download7(d_button, d_name, d_icon) {
      	if(confirm('Вы точно хотите скачать этот файл?')) {
      	 let down_button = document.querySelector(d_button);
      	 let down_button_audio_address = down_button.parentElement.children[5].children[1].getAttribute('src');
      	 let ICON_D = document.querySelector(d_icon);
         let link = document.createElement('a');
         let opov_4_block = document.querySelector('.opoveshenie_block');
         let opov_4_name = down_button.parentElement.children[0].textContent;

         link.setAttribute('href', `${down_button_audio_address}`);
         link.setAttribute('download', `${d_name}.mp3`);
         link.click();
         return true;

         ICON_D.style.color = 'gold';
         down_button.classList.add('.d_first_anim7');

         setTimeout(() => {
         	down_button.classList.add('.d_first_move7');
            //ICON_D.style.color = 'white';
            down_button.classList.remove('.d_first_anim7');
         }, 1100);

         opov_4_block.classList.add('show_n_block_anim');
            
         opov_4_block.children[0].children[0].textContent = `${opov_4_name} поставлен на скачивание`;

         setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
         }, 710); 

         setTimeout(() => {
            opov_4_block.classList.add('fokus');
         }, 3710);

         setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
         }, 4910);
        }
      }, 

      Over7(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show7');
      },

      Ov7(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show7');
      },

      C1_7(el5, volm1, Repl_elem_3, Down_elem_3) {
      	  let vl5 = document.querySelector(el5);
          let vol1 = document.querySelector(volm1);
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl5.parentElement.children[0].textContent;
      	  let REPL_ELEM_3 = document.querySelector(Repl_elem_3);
      	  let DOWN_ELEM_3 = document.querySelector(Down_elem_3);

      	  vl5.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl5.children[1].style.background = "white";
      	  vl5.children[2].style.background = "white";
      	  vl5.children[3].style.background = "white";

      	  vol1.volume = 0.25;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 25%`;

          REPL_ELEM_3.classList.add('Rep_10');
          DOWN_ELEM_3.classList.add('d_first_anim7');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_9');
            DOWN_ELEM_3.classList.remove('d_first_move7');
            REPL_ELEM_3.classList.remove('Rep_10');
            DOWN_ELEM_3.classList.remove('d_first_anim7');
      	  }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      C2_7(el6, volm2, Repl_elem_4, Down_elem_4) {
          let vl6 = document.querySelector(el6);
          let vol2 = document.querySelector(volm2);
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl6.parentElement.children[0].textContent;
      	  let REPL_ELEM_4 = document.querySelector(Repl_elem_4);
      	  let DOWN_ELEM_4 = document.querySelector(Down_elem_4);

      	  vl6.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[2].style.background = "white";
      	  vl6.children[3].style.background = "white";

          vol2.volume = 0.55;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 55%`;

          REPL_ELEM_4.classList.add('Rep_10');
          DOWN_ELEM_4.classList.add('d_fist_anim7');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_9');
            DOWN_ELEM_4.classList.remove('d_first_move7');
            REPL_ELEM_4.classList.remove('Rep_10');
            DOWN_ELEM_4.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      C3_7(el7, volm3, Repl_elem_5, Down_elem_5) {
          let vl7 = document.querySelector(el7);
          let vol3 = document.querySelector(volm3);
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl7.parentElement.children[0].textContent;
      	  let REPL_ELEM_5 = document.querySelector(Repl_elem_5);
      	  let DOWN_ELEM_5 = document.querySelector(Down_elem_5);
          
      	  vl7.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[3].style.background = "white";

      	  vol3.volume = 0.85;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 85%`;

           REPL_ELEM_5.classList.add('Rep_10');
           DOWN_ELEM_5.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_9');
            DOWN_ELEM_5.classList.remove('d_first_move7');
            REPL_ELEM_5.classList.remove('Rep_10');
            DOWN_ELEM_5.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },


      C4_7(el8, volm4, Repl_elem_6, Down_elem_6) {
          let vl8 = document.querySelector(el8);
          let vol4 = document.querySelector(volm4);
           let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl8.parentElement.children[0].textContent;
      	  let REPL_ELEM_6 = document.querySelector(Repl_elem_6);
      	  let DOWN_ELEM_6 = document.querySelector(Down_elem_6);

      	  vl8.children[3].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[0].style.background = "rgba(51, 204, 0, .8)";

      	  vol4.volume = 1;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 100%`;

          REPL_ELEM_6.classList.add('Rep_10');
          DOWN_ELEM_6.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_9');
            DOWN_ELEM_6.classList.remove('d_first_move7');
            REPL_ELEM_6.classList.remove('Rep_10');
            DOWN_ELEM_6.classList.remoev('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Update7(volm5, time_b1, prog) {
          let vol5 = document.querySelector(volm5);
          let time_block_1 = document.querySelector(time_b1);
          let progrs1 = document.querySelector(prog);

      	  let current = vol5.currentTime;
      	  let durat = vol5.duration;
      	  let progress = current / durat * 100;

      	  let min = Math.floor(vol5.currentTime / 60); //Конечно можно создавать такие переменные, ктобы сомневался
      	  let sec = Math.floor(vol5.currentTime - min * 60); 

      	  if(sec > 9) time_block_1.innerHTML = `0${min}:${sec}`;

      	  else {
      	  	time_block_1.innerHTML = `0${min}:0${sec}`;
      	  }

      	  progrs1.children[0].style.width = `${progress}%`;
      },

      Prev7(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
      	 let aud_1 = document.querySelector(AUDIO_1);
      	 let aud_2 = document.querySelector(AUDIO_2);
      	 let REPL_1 = document.querySelector(REPLAY_1);
      	 let REPL_icon_1 = document.querySelector(Rep_icon_1);
      	 let DOWN_1 = document.querySelector(DOWNLOAD_1);
         //let w_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_4_block = document.querySelector('.opoveshenie_block');
         let opov_4_name = aud_1.parentElement.parentElement.children[0].textContent;
         let opov_4_4_name = aud_2.parentElement.parentElement.children[0].textContent;

         if(aud_1.played) {
            aud_1.pause();
            aud_1.currentTime = 0;
         } else {
         	aud_1.currentTime = 0;
         }

         setTimeout(() => {
            if(aud_2.paused) aud_2.play();

            if(aud_1.loop === true) {
                aud_1.loop = false;

                REPL_icon_1.style.color = 'white';
            } //После того, как нажмем кнопку у первого саундтрека все режимы должны быть в false(И повторного проигрывания, и последовательного тоже)..  НУ да, если просто поставить false, но цвет не измениться 
         }, 250);

         REPL_1.classList.add('Rep_10');
         DOWN_1.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_9');
            DOWN_1.classList.remove('d_first_move7');
            REPL_1.classList.remove('Rep_10');
            DOWN_1.classList.remove('d_first_anim7');
      	 }, 1100);

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `${opov_4_4_name} - играет, ${opov_4_name} - на паузе`;

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Next7(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
      	 let aud_3 = document.querySelector(AUDIO_3);
      	 let aud_4 = document.querySelector(AUDIO_4);
      	 let REPL_2 = document.querySelector(REPLAY_2);
      	 let REPL_icon_2 = document.querySelector(Rep_icon_2);
      	 let DOWN_2 = document.querySelector(DOWNLOAD_2);
         //let w2_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_4_block = document.querySelector('.opoveshenie_block');
         let opov_4_name = aud_3.parentElement.parentElement.children[0].textContent;  //Fuck..... Asshole code! !!!!!
         let opov_4_4_name = aud_4.parentElement.parentElement.children[0].textContent;

         if(aud_3.played) {
         	aud_3.pause();
         	aud_3.currentTime = 0;
         } else {
         	aud_3.currentTime = 0;
         }

         setTimeout(() => {
            if(aud_4.paused) aud_4.play();

            if(aud_3.loop === true) {
            	aud_3.loop = false;
            	REPL_icon_2.style.color = 'white';
            }
         }, 250);

         REPL_2.classList.add('Rep_10');
         DOWN_2.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_9');
            DOWN_2.classList.remove('d_first_move7');
            REPL_2.classList.remove('Rep_10');
            DOWN_2.classList.remove('d_first_anim7');
      	 }, 1100);

         opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `${opov_4_4_name} - играет, ${opov_4_name} - на паузе`;

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Perek7(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time7(t_block5) {
          let time_block = document.querySelector(t_block5);
      	  time_block.classList.add('T_aud_7');
      },

      Time_out7(t_block5) {
      	  let time_block = document.querySelector(t_block5);
      	  time_block.classList.remove('T_aud_7');
      },

      Run_block7(event, M_Pole, Aud2, t_block4) {
      	  let M_pole = document.querySelector(M_Pole);
      	  let auD2 = document.querySelector(Aud2);
      	  let T_b = document.querySelector(t_block4);

      	  let move = event.offsetX / M_pole.offsetWidth * auD2.duration * 1.55;
      	  let T_objee = event.offsetX / M_pole.offsetWidth * auD2.duration;
      	  let MINS = Math.floor(T_objee / 60);
      	  let SEC = Math.floor(T_objee - MINS * 60);

          T_b.style.transform = `translateX(${move}px)`; //Передвижение этой штуки

          T_b.children[0].innerHTML = `0${MINS} : 0${SEC}`;

          if(SEC > 9) T_b.children[0].innerHTML = `0${MINS} : ${SEC}`; 

          //Когда передается event, то в функции лучше в 90% случаев указывать $event... Мда... Vue.js блин
      },
          
      show_repeat7(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_9');
          drep.classList.add('d_first_move7');
      },

      hide_repeat7(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_10');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_9');
             replay2.classList.remove('Rep_10');
      	  }, 1100);
      },

      down_hide7(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim7');

         setTimeout(() => {
            d2.classList.remove('d_first_move7');
            d2.classList.remove('d_first_anim7');
         }, 1100);
      },

      Replay7(AUD, Icon1) {
      	  let aud = document.querySelector(AUD);
      	  let icon1 = document.querySelector(Icon1);
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = aud.parentElement.parentElement.children[0].textContent;
          
          if(aud.loop === false) {
      	    aud.loop = true;
      	    icon1.style.color = '#FFE70B';

      	    opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} поставлен на повторное проигрывание`;

            setTimeout(() => {
              opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
              opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
              opov_4_block.classList.add('hide_block');  
              opov_4_block.classList.remove('show_n_block_anim');
              opov_4_block.classList.remove('show_n_block'); 
              opov_4_block.classList.remove('fokus');
              opov_4_block.classList.remove('hide_block');
            }, 4910);
      	  } 

      	  else {
      	  	aud.loop = false;
            icon1.style.color = 'white';

            opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} снят с повторного проигрывание`;

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910);
      	  }
      }, //Решил не делать с @dblclick, так как пока верстал под телефон/планшет, понял, что это вообще на них не срабатывает

      //Auto-pl function right here

      S7(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_9');
      },

      Show_speed7(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_7');
      },

      First_speed_7(first, a, ch_one, Repl_elem_7, Down_elem_7) {
      	  let first_speed = document.querySelector(first); //x_25
      	  let first_a = document.querySelector(a);
      	  let choice_one = document.querySelector(ch_one); //Идея с переменными из data не сработала, в итоге дикий костыль :(
          choice_one.textContent = first_speed.children[0].textContent;
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = first_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_7 = document.querySelector(Repl_elem_7);
      	  let DOWN_ELEM_7 = document.querySelector(Down_elem_7);

          first_a.playbackRate = .25;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X.25`;

           REPL_ELEM_7.classList.add('Rep_10');
           DOWN_ELEM_7.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_9');
            DOWN_ELEM_7.classList.remove('d_first_move7');
            REPL_ELEM_7.classList.remove('Rep_10');
            DOWN_ELEM_7.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Second_speed_7(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
      	  let second_speed = document.querySelector(second); //x_5
      	  let second_a = document.querySelector(a2);
      	  let choice_two = document.querySelector(ch_two);
          choice_two.textContent = second_speed.children[0].textContent;
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = second_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_8 = document.querySelector(Repl_elem_8);
      	  let DOWN_ELEM_8 = document.querySelector(Down_elem_8);

          second_a.playbackRate = .5;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X.5`;

           REPL_ELEM_8.classList.add('Rep_10');
           DOWN_ELEM_8.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_9');
            DOWN_ELEM_8.classList.remove('d_first_move7');
            REPL_ELEM_8.classList.remove('Rep_10');
            DOWN_ELEM_8.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Third_speed_7(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
          let third_speed = document.querySelector(third); //x_1
          let third_a = document.querySelector(a3);
          let choice_three = document.querySelector(ch_three);
          choice_three.textContent = third_speed.children[0].textContent;
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = third_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_9 = document.querySelector(Repl_elem_9);
      	  let DOWN_ELEM_9 = document.querySelector(Down_elem_9);

          third_a.playbackRate = 1;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X1`;

           REPL_ELEM_9.classList.add('Rep_10');
           DOWN_ELEM_9.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_9');
            DOWN_ELEM_9.classList.remove('d_first_move7');
            REPL_ELEM_9.classList.remove('Rep_10');
            DOWN_ELEM_9.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Fourth_speed_7(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
      	  let fourth_speed = document.querySelector(fourth); //x_1_25
      	  let fourth_a = document.querySelector(a4);
      	  let choice_four = document.querySelector(ch_four);
      	  choice_four.textContent = fourth_speed.children[0].textContent;
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = fourth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_10 = document.querySelector(Repl_elem_10);
      	  let DOWN_ELEM_10 = document.querySelector(Down_elem_10);

      	  fourth_a.playbackRate = 1.25;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X1.25`;

           REPL_ELEM_10.classList.add('Rep_10');
           DOWN_ELEM_10.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_9');
            DOWN_ELEM_10.classList.remove('d_first_move7');
            REPL_ELEM_10.classList.remove('Rep_10');
            DOWN_ELEM_10.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Fifth_speed_7(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
      	  let fifth_speed = document.querySelector(fifth); //x_15
      	  let fifth_a = document.querySelector(a5);
      	  let choice_five = document.querySelector(ch_five);
      	  choice_five.textContent = fifth_speed.children[0].textContent;
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = fifth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_11 = document.querySelector(Repl_elem_11);
      	  let DOWN_ELEM_11 = document.querySelector(Down_elem_11);

      	  fifth_a.playbackRate = 1.5;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X1.5`;

           REPL_ELEM_11.classList.add('Rep_10');
           DOWN_ELEM_11.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_9');
            DOWN_ELEM_11.classList.remove('d_first_move7');
            REPL_ELEM_11.classList.remove('Rep_10');
            DOWN_ELEM_11.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Six_speed_7(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
      	  let six_speed = document.querySelector(six); //x_2
      	  let six_a = document.querySelector(a6);
      	  let choice_six = document.querySelector(ch_six);
      	  choice_six.textContent = six_speed.children[0].textContent;
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = six_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_12 = document.querySelector(Repl_elem_12);
      	  let DOWN_ELEM_12 = document.querySelector(Down_elem_12);

      	  six_a.playbackRate = 2;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X2`;

           REPL_ELEM_12.classList.add('Rep_10');
           DOWN_ELEM_12.classList.add('d_first_anim7');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_9');
            DOWN_ELEM_12.classList.remove('d_first_move7');
            REPL_ELEM_12.classList.remove('Rep_10');
            DOWN_ELEM_12.classList.remove('d_first_anim7');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
        } 
      }
	};
</script>
<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.side_screen7 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/RDR1_background.jpg");
		background-size: cover;
		background-position: center;
		overflow-y: scroll;
	}

	::webkit-scroollbar-track {
		background: white;
	}

	::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    .side_screen7 span {
    	position: absolute;
    	left: 245px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block7 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block7 > .sound_block7 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block7 .sound_block7 .name7 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block7 .sound_block7 .RD1 {
    	left: 130px;
    }

    .audio_collection_block7 .sound_block7 .RD2 {
    	left: 85px;
    }

    .audio_collection_block7 .sound_block7 .RD3 {
    	left: 135px;
    }

    .audio_collection_block7 .sound_block7 .RD4 {
    	left: 5px;
    }

    .audio_collection_block7 .sound_block7 .RD5 {
    	left: 165px;
    }

    .audio_collection_block7 .sound_block7 .RD6 {
    	left: 140px;
    }

    .audio_collection_block7 .sound_block7 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block7 .sound_block7 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block7 .sound_block7 .audio_pole_m7 {
        height: 5px;
        width: 648px;
        position: absolute;
        left: 38px;
        top: 78px;
        cursor: pointer;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
        background: white;
    }

    .audio_collection_block7 .sound_block7 .audio_pole_m7:hover {
    	opacity: .7;
    }

    .audio_collection_block7 .sound_block7 .audio_pole_m7 .aud_p7 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	margin-left: 0;
    	margin-top: 0;
    	background: yellow;
    }

    .audio_collection_block7 .sound_block7 #vol7 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7.L_show7 {
    	display: block;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 .first_vol {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 .second_vol {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 .third_vol {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block7 .sound_block7 .l_of_vol7 .fourth_vol {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block7 .sound_block7 .prev7 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block7 .sound_block7 .prev7:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block7 .sound_block7 .play7 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block7 .sound_block7 .next7 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block7 .sound_block7 .next7:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block7 .sound_block7 .start_time7 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block7 .sound_block7 .end_time7 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block7 .sound_block7 .Replay_button7 {
    	position: absolute;
    	height: 50px;
    	width: 50px;
    	background: black;
    	cursor: pointer;
    	float: right;
    	margin-left: 675px;
    	margin-top: 50px;
    	z-index: -1;
    }

    .audio_collection_block7 .sound_block7 .Replay_button7.Rep_9 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block7 .sound_block7 .Replay_button7.Rep_10 {
    	animation: spek7 1s linear;
    	transform: scale(0);
    }

    @keyframes spek7 {
    	0% {
           transform: scale(.8);
    	}

    	25% {
    		transform: scale(.6);
    	}

    	50% {
            transform: scale(.4);
    	}

    	75% {
            transform: scale(.2);
    	}

    	100% {
            transform: scale(0);
    	}
    }

    .audio_collection_block7 .sound_block7 .Download_button7 {
    	position: absolute;
    	height: 50px;
    	width: 50px;
    	cursor: pointer;
    	background: black;
    	float: left;
    	margin-top: 50px;
    	margin-left: 0px;
    	z-index: -1;
    }

    .audio_collection_block7 .sound_block7 .Download_button7:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block7 .sound_block7 .Download_button7.d_first_move7 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block7 .sound_block7 .Download_button7.d_first_anim7 {
    	animation: down7 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down7 {
    	0% {
           transform: scale(.8);
    	}

    	25% {
    		transform: scale(.6);
    	}

    	50% {
            transform: scale(.4);
    	}

    	75% {
            transform: scale(.2);
    	}

    	100% {
            transform: scale(0);
    	}
    }

    .audio_collection_block7 .sound_block7 .Time_of_audio7 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block7 .sound_block7 .Time_of_audio7 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block7 .sound_block7 .Time_of_audio7.T_aud_7 {
    	display: block;
    }

    .audio_collection_block7 .sound_block7 #speed_aud7 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block7 .sound_block7 .Speed_block7 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block7 .sound_block7 .Speed_block7.tgl_7 {
    	display: block;
    }
    
    .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 .b7 {
    	height: 16.66px;
    	position: relative;
    	background: black;
    	left: 0;
    	top: -2.5px;
    	display: block;
    	width: 60px;
    	border-bottom: 1px solid white;
        cursor: pointer;
        transition: .9s;
        -o-transition: .9s;
        -mozila-transition: .9s;
        -webkit-transition: .9s;
    }

    .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 .b7:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 .b7 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 .b7 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	.side_screen7 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen7 span {
    		font-size: 55px;
    		left: 170px;
    	}

    	.audio_collection_block7 > .sound_block7 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block7 .sound_block7 .audio_pole_m7 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block7 .sound_block7 .audio_pole_m7 .aud_p7 {
    		height: 9.5px;
    	}

    	.audio_collection_block7 .sound_block7 #vol7 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block7 .sound_block7 .play7 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block7 .sound_block7 .prev7 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block7 .sound_block7 .next7 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block7 .sound_block7 .name7 {
    	   left: 255px;
        }

        .audio_collection_block7 .sound_block7 .Time_of_audio7 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block7 .sound_block7 .Time_of_audio7 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block7 .sound_block7 .start_time7 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block7 .sound_block7 .end_time7 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block7 .sound_block7 #speed_aud7 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block7 .sound_block7 .Speed_block7 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 .b7 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block7 .sound_block7 .Speed_block7 .contain7 .b7 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block7 .sound_block7 .Replay_button7 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block7 .sound_block7 .Replay_button7.sh12 {
    	    margin-left: 850px;
        }

        .audio_collection_block7 .sound_block7 .Download_button7 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block7 .sound_block7 .l_of_vol7 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_5 {
        	left: 175px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_7 {
        	left: 215px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_10 {
        	left: 140px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_11 {
        	left: 185px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_12 {
        	left: 215px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_13 {
        	left: 60px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_14 {
        	left: 210px;
        }

        .audio_collection_block7 .sound_block7 .text6_mobile_15 {
            left: 190px;
        }
    }
</style>










