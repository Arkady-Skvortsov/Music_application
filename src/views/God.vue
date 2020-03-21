<template>
	<div class="side_screen5">
		<span>God Of War music</span>
		<div class="audio_collection_block5">
		    <div class="sound_block5" @mouseover="show_repeat5('.repl61', '.down61')">
			   <p class="name5">#1 God of War</p>

			   <div class="audio_pole_m5 audio_p61_m5" @click="Perek5($event, '.aud61', '.audio_p61_m5')" @mouseover="Show_time5('.Aud_t61')" @mousemove="Run_block5($event, '.audio_p61_m5', '.aud61', '.Aud_t61')" @mouseout="Time_out5('.Aud_t61')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl61', '.l_of_v61', '.repl61', '.down61')" @mouseover="Over5('.l_of_v61')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol5 l_of_v61" @mouseover="Over5('.l_of_v61')" @mouseout="Ov5('.l_of_v61')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v61', '.aud61', '.repl61', '.down61')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v61', '.aud61', '.repl61', '.down61')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v61', '.aud61', '.repl61', '.down61')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v61', '.aud61', '.repl61', '.down61')"></div>
			   </div>

			   <button class="prev5"  @click="Prev5('.aud61', '.aud75', '.repl61', '.r_icon_61', '.down61')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl61" @click="Play5('.pl61', '.repl61', '.down61')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud61" @timeupdate="Update5('.aud61', '.st61', '.audio_p61_m5')" src="../sound/God_of_war/God of War.mp3"></audio></button> 
			   <button class="next5" @click="Next5('.aud61', '.aud62', '.repl61', '.r_icon_61', '.down61')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st61">00:00</p><p class="end_time5">/04:06</p>

			   <span id="speed_aud5" class='choice_speed_61' @click="Show_speed5('.sp_block_61')">x1</span>

			   <div class="Speed_block5 sp_block_61">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_61" @click="First_speed_5('.x_first_61', '.aud61', '.choice_speed_61', '.repl61', '.down61')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_61" @click="Second_speed_5('.x_second_61', '.aud61', '.choice_speed_61', '.repl61', '.down61')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_61" @click="Third_speed_5('.x_third_61', '.aud61', '.choice_speed_61', '.repl61', '.down61')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_61" @click="Fourth_speed_5('.x_fourth_61', '.aud61', '.choice_speed_61', '.repl61', '.down61')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_61" @click="Fifth_speed_5('.x_fifth_61', '.aud61', '.choice_speed_61', '.repl61', '.down61')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_61" @click="Six_speed_5('.x_six_61', '.aud61', '.choice_speed_61', '.repl61', '.down61')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button5 repl61" @click="Replay5('.aud61', '.r_icon_61')" @mouseover="S5('.repl61')" @mouseout="hide_repeat5('.repl61')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_61" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down61" @click="Download5('.down61', 'God of War - God of War', '.d_icon_61')" @mouseout="down_hide5('.down61')">
			   	  <vue-fontawesome icon="download" class="d_icon_61" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t61">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block5" @mouseover="show_repeat5('.repl62', '.down62')">
			   <p class="name5 text4_mobile_2">#2 Ashes</p>

			   <div class="audio_pole_m5 audio_p62_m5" @click="Perek5($event, '.aud62', '.audio_p62_m5')" @mouseover="Show_time5('.Aud_t62')" @mousemove="Run_block5($event, '.audio_p62_m5', '.aud62', '.Aud_t62')" @mouseout="Time_out5('.Aud_t62')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl62', '.l_of_v62', '.repl62', '.down62')" @mouseover="Over5('.l_of_v62')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v62" @mouseover="Over5('.l_of_v62')" @mouseout="Ov5('.l_of_v62')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v62', '.aud62', '.repl62', '.down62')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v62', '.aud62', '.repl62', '.down62')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v62', '.aud62', '.repl62', '.down62')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v62', '.aud62', '.repl62', '.down62')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud62', '.aud61', '.repl62', '.r_icon_62', '.down62')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl62" @click="Play5('.pl62', '.repl62', '.down62')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud62" @timeupdate="Update5('.aud62', '.st62', '.audio_p62_m5')" src="../sound/God_of_war/Ashes.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud62', '.aud63', '.repl62', '.r_icon_62', '.down62')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st62">00:00</p><p class="end_time5">/06:09</p>

			   <span id="speed_aud5" class="choice_speed_62" @click="Show_speed5('.sp_block_62')">x1</span>

			   <div class="Speed_block5 sp_block_62"> 
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_62" @click="First_speed_5('.x_first_62', '.aud62', '.choice_speed_62', '.repl62', '.down62')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_62" @click="Second_speed_5('.x_second_62', '.aud62', '.choice_speed_62', '.repl62', '.down62')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_62" @click="Third_speed_5('.x_third_62', '.aud62', '.choice_speed_62', '.repl62', '.down62')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_62" @click="Fourth_speed_5('.x_fourth_62', '.aud62', '.choice_speed_62', '.repl62', '.down62')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_62" @click="Fifth_speed_5('.x_fifth_62', '.aud62', '.choice_speed_62', '.repl62', '.down62')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_62" @click="Six_speed_5('.x_six_62', '.aud62', '.choice_speed_62', '.repl62', '.down62')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button5 repl62" @click="Replay5('.aud62', '.r_icon_62')" @mouseover="S5('.repl62')" @mouseout="hide_repeat5('.repl62')"> 
			   	  <vue-fontawesome icon="retweet" class="r_icon_62" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down62" @click="Download5('.down62', 'God of War - Ashes', '.d_icon_62')" @mouseout="down_hide5('.down62')">
			   	  <vue-fontawesome icon="download" class="d_icon_62" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t62">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block5" @mouseover="show_repeat5('.repl63', '.down63')">
			   <p class="name5 text4_mobile_3">#3 Salvasion</p>

			   <div class="audio_pole_m5 audio_p63_m5" @click="Perek5($event, '.aud63', '.audio_p63_m5')" @mouseover="Show_time5('.Aud_t63')" @mousemove="Run_block5($event, '.audio_p63_m5', '.aud63', '.Aud_t63')" @mouseout="Time_out5('.Aud_t63')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl63', '.l_of_v63', '.repl63', '.down63')" @mouseover="Over5('.l_of_v63')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v63" @mouseover="Over5('.l_of_v63')" @mouseout="Ov5('.l_of_v63')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v63', '.aud63', '.repl63', '.down63')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v63', '.aud63', '.repl63', '.down63')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v63', '.aud63', '.repl63', '.down63')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v63', '.aud63', '.repl63', '.down63')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud63', '.aud62', '.repl63', '.r_icon_63', '.down63')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl63" @click="Play5('.pl63', '.repl63', '.down63')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud63" @timeupdate="Update5('.aud63', '.st63', '.audio_p63_m5')" src="../sound/God_of_war/Salvation.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud63', '.aud64', '.repl63', '.r_icon_63', '.down63')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st63">00:00</p><p class="end_time5">/06:48</p>

			   <span id="speed_aud5" class="choice_speed_63" @click="Show_speed5('.sp_block63')">x1</span>

			   <div class="Speed_block5 sp_block_63">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_63" @click="First_speed_5('.x_first_63', '.aud63', '.choice_speed_63', '.repl63', '.down63')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_63" @click="Second_speed_5('.x_second_63', '.aud63', '.choice_speed_63', '.repl63', '.down63')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_63" @click="Third_speed_5('.x_third_63', '.aud63', '.choice_speed_63', '.repl63', '.down63')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_63" @click="Fourth_speed_5('.x_fourth_63', '.aud63', '.choice_speed_63', '.repl63', '.down63')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_63" @click="Fifth_speed_5('.x_fifth_63', '.aud63', '.choice_speed_63', '.repl63', '.down63')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_first_63" @click="Six_speed_5('.x_first_63', '.aud63', '.choice_speed_63', '.repl63', '.down63')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl63" @click="Replay5('.aud63', '.r_icon_63')" @mouseover="S5('.repl63')" @mouseout="hide_repeat5('.repl63')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_63" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down63" @click="Download5('.down63', 'God of War - Salvation', '.d_icon_63')" @mouseout="down_hide5('.down63')">
			   	  <vue-fontawesome icon="download" class="d_icon_63" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t63">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl64', '.down64')">
			   <p class="name5 text4_mobile_4">#4 Memories of Mother</p>

			   <div class="audio_pole_m5 audio_p64_m5"  @click="Perek5($event, '.aud64', '.audio_p64_m5')" @mouseover="Show_time5('.Aud_t64')" @mousemove="Run_block5($event, '.audio_p64_m5', '.aud64', '.Aud_t64')" @mouseout="Time_out5('.Aud_t64')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl64', '.l_of_v64', '.repl64', '.down64')" @mouseover="Over5('.l_of_v64')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v64" @mouseover="Over5('.l_of_v63')" @mouseout="Ov5('.l_of_v63')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v64', '.aud64', '.repl64', '.down64')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v64', '.aud64', '.repl64', '.down64')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v64', '.aud64', '.repl64', '.down64')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v64', '.aud64', '.repl64', '.down64')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud64', '.aud63', '.repl64', '.r_icon_64', '.down64')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl64" @click="Play5('.pl64', '.repl64', '.down64')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud64" @timeupdate="Update5('.aud64', '.st64', '.audio_p64_m5')" src="../sound/God_of_war/Memories of Mother.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud64', '.aud65', '.repl64', '.r_icon_64', '.down64')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st64">00:00</p><p class="end_time5">/03:38</p>

			   <span id="speed_aud5" class="choice_speed_64" @click="Show_speed5('.sp_block_64')">x1</span>

			   <div class="Speed_block5 sp_block_64">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_64" @click="First_speed_5('.x_first_64', '.aud64', '.choice_speed_64', '.repl64', '.down64')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_64" @click="Second_speed_5('.x_second_64', '.aud64', '.choice_speed_64', '.repl64', '.down64')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_64" @click="Third_speed_5('.x_third_64', '.aud64', '.choice_speed_64', '.repl64', '.down64')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_first_64" @click="Fourth_speed_5('.x_fourth_64', '.aud64', '.choice_speed_64', '.repl64', '.down64')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_first_64" @click="Fifth_speed_5('.x_fifth_64', '.aud64', '.choice_speed_64', '.repl64', '.down64')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_first_64" @click="Six_speed_5('.x_six_64', '.aud64', '.choice_speed_64', '.repl64', '.down64')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl64" @click="Replay5('.aud64', '.r_icon_64')" @mouseover="S5('.repl64')" @mouseout="hide_repeat5('.repl64')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_64" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down64" @click="Download5('.down64', 'God of War - Memories of Mother', '.d_icon_64')" @mouseout="down_hide5('.down64')">
			   	  <vue-fontawesome icon="download" class="d_icon_64" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t64">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl65', '.down65')">
			   <p class="name5 text4_mobile_5">#5 Valkyries</p>

			   <div class="audio_pole_m5 audio_p65_m5" @click="Perek5($event, '.aud65', '.audio_p65_m5')" @mouseover="Show_time5('.Aud_t65')" @mousemove="Run_block5($event, '.audio_p65_m5', '.aud65', '.Aud_t65')" @mouseout="Time_out5('.Aud_t65')">
				   <div class="aud_p5"></div>
			   </div>
           
			   <button id="vol5" @click="Vol5('.pl65', '.l_of_v65', '.repl65', '.down65')" @mouseover="Over5('.l_of_v65')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v65" @mouseover="Over5('.l_of_v65')" @mouseout="Ov5('.l_of_v65')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v65', '.aud65', '.repl65', '.down65')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v65', '.aud65', '.repl65', '.down65')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v65', '.aud65', '.repl65', '.down65')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v65', '.aud65', '.repl65', '.down65')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud65', '.aud64', '.repl65', '.r_icon_65', '.down65')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl65" @click="Play5('.pl65', '.repl65', '.down65')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud65" @timeupdate="Update5('.aud65', '.st65', '.audio_p65_m5')" src="../sound/God_of_war/Valkyries.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud65', '.aud66', '.repl65', '.r_icon_65', '.down65')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st65">00:00</p><p class="end_time5">/05:07</p>

			   <span id="speed_aud5" class="choice_speed_65" @click="Show_speed5('.sp_block_65')">x1</span>

			   <div class="Speed_block5 sp_block_65">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_65" @click="First_speed_5('.x_first_65', '.aud65', '.choice_speed_65', '.repl65', '.down65')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_65" @click="Second_speed_5('.x_second_65', '.aud65', '.choice_speed_65', '.repl65', '.down65')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_65" @click="Third_speed_5('.x_third_65', '.aud65', '.choice_speed_65', '.repl65', '.down65')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_65" @click="Fourth_speed_5('.x_fourth_65', '.aud65', '.choice_speed_65', '.repl65', '.down65')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_65" @click="Fifth_speed_5('.x_fifth_65', '.aud65', '.choice_speed_65', '.repl65', '.down65')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_65" @click="Six_speed_5('.x_six_65', '.aud65', '.choice_speed_65', '.repl65', '.down65')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl65" @click="Replay5('.aud65', '.r_icon_65')" @mouseover="S5('.repl65')" @mouseout="hide_repeat5('.repl65')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_65" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down65" @click="Download5('.down65', 'God of War - Valkyries', '.d_icon_65')" @mouseout="down_hide5('.down65')">
			   	  <vue-fontawesome icon="download" class="d_icon_65" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t65">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl66', '.down66')">
			   <p class="name5 text4_mobile_6">#6 Witch of the Woods</p>

			   <div class="audio_pole_m5 audio_p66_m5" @click="Perek5($event, '.aud66', '.audio_p66_m5')" @mouseover="Show_time5('.Aud_t66')" @mousemove="Run_block5($event, '.audio_p66_m5', '.aud66', '.Aud_t66')" @mouseout="Time_out5('.Aud_t66')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl66', '.l_of_v66', '.repl66', '.down66')" @mouseover="Over5('.l_of_v66')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v66" @mouseover="Over5('.l_of_v66')" @mouseout="Ov5('.l_of_v66')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v66', '.aud66', '.repl66', '.down66')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v66', '.aud66', '.repl66', '.down66')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v66', '.aud66', '.repl66', '.down66')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v66', '.aud66', '.repl66', '.down66')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud66', '.aud65', '.repl66', '.r_icon_66', '.down66')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl66" @click="Play5('.pl66', '.repl66', '.down66')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud66" @timeupdate="Update5('.aud66', '.st66', '.audio_p66_m5')" src="../sound/God_of_war/Witch of the Woods.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud66', '.aud67', '.repl66', '.r_icon_66', '.down66')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st66">00:00</p><p class="end_time5">/03:02</p>

			   <span id="speed_aud5" class="choice_speed_66" @click="Show_speed5('.sp_block_66')">x1</span>

			   <div class="Speed_block5 sp_block_66">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_66" @click="First_speed_5('.x_first_66', '.aud66', '.choice_speed_66', '.repl66', '.down66')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_66" @click="Second_speed_5('.x_second_66', '.aud66', '.choice_speed_66', '.repl66', '.down66')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_66" @click="Third_speed_5('.x_third_66', '.aud66', '.choice_speed_66', '.repl66', '.down66')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_66" @click="Fourth_speed_5('.x_fourth_66', '.aud66', '.choice_speed_66', '.repl66', '.down66')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_66" @click="Fifth_speed_5('.x_fifth_66', '.aud66', '.choice_speed_66', '.repl66', '.down66')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_66" @click="Six_speed_5('.x_six_66', '.aud66', '.choice_speed_66', '.repl66', '.down66')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button5 repl66" @click="Replay5('.aud66', '.r_icon_66')" @mouseover="S5('.repl66')" @mouseout="hide_repeat5('.repl66')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_66" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down66" @click="Download5('.down66', 'God of War - Witch of the Woods', '.d_icon_66')" @mouseout="down_hide5('.down66')">
			   	  <vue-fontawesome icon="download" class="d_icon_66" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t66">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl67', '.down67')">
			   <p class="name5">#7 The Dragon</p>

			   <div class="audio_pole_m5 audio_p67_m5" @click="Perek5($event, '.aud67', '.audio_p67_m5')" @mouseover="Show_time5('.Aud_t67')" @mousemove="Run_block5($event, '.audio_p67_m5', '.aud67', '.Aud_t67')" @mouseout="Time_out5('.Aud_t67')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl67', '.l_of_v67', '.repl67', '.down67')" @mouseover="Over5('.l_of_v67')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v67" @mouseover="Over5('.l_of_v67')" @mouseout="Ov5('.l_of_v67')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v67', '.aud67', '.repl67', '.down67')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v67', '.aud67', '.repl67', '.down67')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v67', '.aud67', '.repl67', '.down67')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v67', '.aud67', '.repl67', '.down67')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud67', '.aud66', '.repl67', '.r_icon_67', '.down67')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl67" @click="Play5('.pl67', '.repl67', '.down67')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud67" @timeupdate="Update5('.aud67', '.st67', '.audio_p67_m5')" src="../sound/God_of_war/The Dragon.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud67', '.aud68', '.repl67', '.r_icon_67', '.down67')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st67">00:00</p><p class="end_time5">/03:42</p>

			   <span id="speed_aud5" class="choice_speed_67" @click="Show_speed5('.sp_block_67')">x1</span>

			   <div class="Speed_block5 sp_block_67">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_67" @click="First_speed_5('.x_first_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_67" @click="Second_speed_5('.x_second_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_67" @click="Third_speed_5('.x_third_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_67" @click="Fourth_speed_5('.x_fourth_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_67" @click="Fifth_speed_5('.x_fifth_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_67" @click="Six_speed_5('.x_six_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button5 repl67" @click="Replay5('.aud67', '.r_icon_67')" @mouseover="S5('.repl67')" @mouseout="hide_repeat5('.repl67')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_67" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down67" @click="Download5('.down67', 'God of War - The Dragon', '.d_icon_67')" @mouseout="down_hide5('.down67')">
			   	  <vue-fontawesome icon="download" class="d_icon_67" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t67">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl68', '.down68')">
			   <p class="name5">#8 Deliverance</p>

			   <div class="audio_pole_m5 audio_p68_m5" @click="Perek5($event, '.aud68', '.audio_p68_m5')" @mouseover="Show_time5('.Aud_t68')" @mousemove="Run_block5($event, '.audio_p68_m5', '.aud68', '.Aud_t68')" @mouseout="Time_out5('.Aud_t68')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl68', '.l_of_v68', '.repl68', '.down68')" @mouseover="Over5('.l_of_v68')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v68" @mouseover="Over5('.l_of_v68')" @mouseout="Ov5('.l_of_v68')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v68', '.aud68', '.repl68', '.down68')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v68', '.aud68', '.repl68', '.down68')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v68', '.aud68', '.repl68', '.down68')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v68', '.aud68', '.repl68', '.down68')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud68', '.aud67', '.repl68', '.r_icon_68', '.down68')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl68" @click="Play5('.pl67', '.repl67', '.down67')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud68" @timeupdate="Update5('.aud68', '.st68', '.audio_p68_m5')" src="../sound/God_of_war/Deliverance.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud68', '.aud69', '.repl68', '.r_icon_68', '.down68')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time5 st68">00:00</p><p class="end_time5">/06:18</p>

			   <span id="speed_aud5" class="choice_speed_68" @click="Show_speed5('.sp_block_68')">x1</span>

			   <div class="Speed_block5 sp_block_68">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_68" @click="First_speed_5('.x_first_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_68" @click="Second_speed_5('.x_second_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_68" @click="Third_speed_5('.x_third_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_68" @click="Fourth_speed_5('.x_fourth_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_68" @click="Fifth_speed_5('.x_fifth_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_68" @click="Six_speed_5('.x_six_67', '.aud67', '.choice_speed_67', '.repl67', '.down67')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl68" @click="Replay5('.aud68', '.r_icon_68')" @mouseover="S5('.repl68')" @mouseout="hide_repeat5('.repl68')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_68" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down68" @click="Download5('.down68', 'God of War - Deliverance', '.d_icon_68')" @mouseout="down_hide5('.down68')">
			   	  <vue-fontawesome icon="download" class="d_icon_68" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio5 Aud_t68">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl69', '.down69')">
			   <p class="name5">#9 The Summit</p>

			   <div class="audio_pole_m5 audio_p69_m5" @click="Perek5($event, '.aud69', '.audio_p69_m5')" @mouseover="Show_time5('.Aud_t69')" @mousemove="Run_block5($event, '.audio_p69_m5', '.aud69', '.Aud_t69')" @mouseout="Time_out5('.Aud_t69')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl69', '.l_of_v69', '.repl69', '.down69')" @mouseover="Over5('.l_of_v69')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v69" @mouseover="Over5('.l_of_v69')" @mouseout="Ov5('.l_of_v69')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v69', '.aud69', '.repl69', '.down69')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v69', '.aud69', '.repl69', '.down69')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v69', '.aud69', '.repl69', '.down69')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v69', '.aud69', '.repl69', '.down69')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud69', '.aud68', '.repl69', '.r_icon_69', '.down69')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl69" @click="Play5('.pl69', '.repl69', '.down69')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud69" @timeupdate="Update5('.aud69', '.st69', '.audio_p69_m5')" src="../sound/God_of_war/The Summit.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud69', '.aud70', '.repl69', '.r_icon_69', '.down69')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time5 st69">00:00</p><p class="end_time5">/03:18</p>

			   <span id="speed_aud5" class="choice_speed_69" @click="Show_speed5('.sp_block_69')">x1</span>

			   <div class="Speed_block5 sp_block_69">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_69" @click="First_speed_5('.x_first_69', '.aud69', '.choice_speed_69', '.repl69', '.down69')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_69" @click="Second_speed_5('.x_second_69', '.aud69', '.choice_speed_69', '.repl69', '.down69')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_69" @click="Third_speed_5('.x_third_69', '.aud69', '.choice_speed_69', '.repl69', '.down69')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_69" @click="Fourth_speed_5('.x_fourth_69', '.aud69', '.choice_speed_69', '.repl69', '.down69')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_69" @click="Fifth_speed_5('.x_fifth_69', '.aud69', '.choice_speed_69', '.repl69', '.down69')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_69" @click="Six_speed_5('.x_six_69', '.aud69', '.choice_speed_69', '.repl69', '.down69')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl69" @click="Replay5('.aud69', '.r_icon_69')" @mouseover="S5('.repl69')" @mouseout="hide_repeat5('.repl69')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_69" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down69" @click="Download5('.down69', 'God of War - The Summit', '.d_icon_69')" @mouseout="down_hide5('.down69')">
			   	  <vue-fontawesome icon="download" class="d_icon_69" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio5 Aud_t69">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl70', '.down70')">
			   <p class="name5">#10 Stone Mason</p>

			   <div class="audio_pole_m5 audio_p70_m5" @click="Perek5($event, '.aud70', '.audio_p70_m5')" @mouseover="Show_time5('.Aud_t70')" @mousemove="Run_block5($event, '.audio_p70_m5', '.aud70', '.Aud_t70')" @mouseout="Time_out5('.Aud_t70')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl70', '.l_of_v70', '.repl70', '.down70')" @mouseover="Over5('.l_of_v70')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v70" @mouseover="Over5('.l_of_v70')" @mouseout="Ov5('.l_of_v70')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v70', '.aud70', '.repl70', '.down70')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v70', '.aud70', '.repl70', '.down70')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v70', '.aud70', '.repl70', '.down70')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v70', '.aud70', '.repl70', '.down70')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud70', '.aud69', '.repl70', '.r_icon_70', '.down70')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl70" @click="Play5('.pl70', '.repl70', '.down70')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud70" @timeupdate="Update5('.aud70', '.st70', '.audio_p70_m5')" src="../sound/God_of_war/Stone Mason.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud70', '.aud71', '.repl70', '.r_icon_70', '.down70')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time5 st70">00:00</p><p class="end_time5">/03:48</p>

			   <span id="speed_aud5" class="choice_speed_70" @click="Show_speed5('.sp_block_70')">x1</span>

			   <div class="Speed_block5 sp_block_70">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_70" @click="First_speed_5('.x_first_70', '.aud70', '.choice_speed_70', '.repl70', '.down70')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_70" @click="Second_speed_5('.x_second_70', '.aud70', '.choice_speed_70', '.repl70', '.down70')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_70" @click="Third_speed_5('.x_third_70', '.aud70', '.choice_speed_70', '.repl70', '.down70')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_70" @click="Fourth_speed_5('.x_fourth_70', '.aud70', '.choice_speed_70', '.repl70', '.down70')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_70" @click="Fifth_speed_5('.x_fifth_70', '.aud70', '.choice_speed_70', '.repl70', '.down70')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_70" @click="Six_speed_5('.x_six_70', '.aud70', '.choice_speed_70', '.repl70', '.down70')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl70" @click="Replay5('.aud70', '.r_icon_70')" @mouseover="S5('.repl70')" @mouseout="hide_repeat5('.repl70')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_70" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down70" @click="Download5('.down70', 'God of War - Stone Mason', '.d_icon_70')" @mouseout="down_hide5('.down70')">
			   	  <vue-fontawesome icon="download" class="d_icon_70" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio5 Aud_t70">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl71', '.down71')">
			   <p class="name5 Te1 text4_mobile_11">#11 Echoes of an Old Life</p>

			   <div class="audio_pole_m5 audio_p71_m5" @click="Perek5($event, '.aud71', '.audio_p71_m5')" @mouseover="Show_time5('.Aud_t71')" @mousemove="Run_block5($event, '.audio_p71_m5', '.aud71', '.Aud_t71')" @mouseout="Time_out5('.Aud_t71')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl71', '.l_of_v71', '.repl71', '.down71')" @mouseover="Over5('.l_of_v71')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v71" @mouseover="Over5('.l_of_v71')" @mouseout="Ov5('.l_of_v71')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v71', '.aud71', '.repl71', '.down71')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v71', '.aud71', '.repl71', '.down71')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v71', '.aud71', '.repl71', '.down71')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v71', '.aud71', '.repl71', '.down71')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud71', '.aud70', '.repl71', '.r_icon_71', '.down71')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl71" @click="Play5('.pl71', '.repl71', '.down71')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud71" @timeupdate="Update5('.aud71', '.st71', '.audio_p71_m5')" src="../sound/God_of_war/Echoes of an Old Life.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud71', '.aud72', '.repl71', '.r_icon_71', '.down71')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st71">00:00</p><p class="end_time5">/03:44</p>

			   <span id="speed_aud5" class="choice_speed_71" @click="Show_speed5('.sp_block_71')">x1</span>

			   <div class="Speed_block5 sp_block_71">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_71" @click="First_speed_5('.x_first_71', '.aud71', '.choice_speed_71', '.repl71', '.down71')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_71" @click="Second_speed_5('.x_second_71', '.aud71', '.choice_speed_71', '.repl71', '.down71')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_71" @click="Third_speed_5('.x_third_71', '.aud71', '.choice_speed_71', '.repl71', '.down71')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_71" @click="Fourth_speed_5('.x_fourth_71', '.aud71', '.choice_speed_71', '.repl71', '.down71')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_71" @click="Fifth_speed_5('.x_fifth_71', '.aud71', '.choice_speed_71', '.repl71', '.down71')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_71" @click="Six_speed_5('.x_six_71', '.aud71', '.choice_speed_71', '.repl71', '.down71')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl71" @click="Replay5('.aud71', '.r_icon_71')" @mouseover="S5('.repl71')" @mouseout="hide_repeat5('.repl71')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_71" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down71" @click="Download5('.down71', 'God of War - Echoes of an Old Life', '.d_icon_71')" @mouseout="down_hide5('.down71')">
			   	  <vue-fontawesome icon="download" class="d_icon_71" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio5 Aud_t71">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl72', '.down72')">
			   <p class="name5 text4_mobile_12">#12 Epilogue</p>

			   <div class="audio_pole_m5 audio_p72_m5" @click="Perek5($event, '.aud72', '.audio_p72_m5')" @mouseover="Show_time5('.Aud_t72')" @mousemove="Run_block5($event, '.audio_p72_m5', '.aud72', '.Aud_t72')" @mouseout="Time_out5('.Aud_t72')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl72', '.l_of_v72', '.repl72', '.down72')" @mouseover="Over5('.l_of_v72')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v72" @mouseover="Over5('.l_of_v72')" @mouseout="Ov5('.l_of_v72')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v72', '.aud72', '.repl72', '.down72')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v72', '.aud72', '.repl72', '.down72')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v72', '.aud72', '.repl72', '.down72')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v72', '.aud72', '.repl72', '.down72')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud72', '.aud71', '.repl72', '.r_icon_72', '.down72')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl72" @click="Play5('.pl72', '.repl72', '.down72')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud72" @timeupdate="Update5('.aud72', '.st72', '.audio_p72_m5')" src="../sound/God_of_war/Epilogue.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud72', '.aud73', '.repl72', '.r_icon_72', '.down72')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st72">00:00</p><p class="end_time5">/00:46</p>

			   <span id="speed_aud5" class="choice_speed_72" @click="Show_speed5('.sp_block_72')">x1</span>

			   <div class="Speed_block5 sp_block_72">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_72" @click="First_speed_5('.x_first_72', '.aud72', '.choice_speed_72', '.repl72', '.down72')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_72" @click="Second_speed_5('.x_second_72', '.aud72', '.choice_speed_72', '.repl72', '.down72')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_72" @click="Third_speed_5('.x_third_72', '.aud72', '.choice_speed_72', '.repl72', '.down72')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_72" @click="Fourth_speed_5('.x_fourth_72', '.aud72', '.choice_speed_72', '.repl72', '.down72')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_72" @click="Fifth_speed_5('.x_fifth_72', '.aud72', '.choice_speed_72', '.repl72', '.down72')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_72" @click="Six_speed_5('.x_six_72', '.aud72', '.choice_speed_72', '.repl72', '.down72')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl72" @click="Replay5('.aud72', '.r_icon_72')" @mouseover="S5('.repl72')" @mouseout="hide_repeat5('.repl72')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_72" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down72" @click="Download5('.down72', 'God of War - Epilogue', '.d_icon_72')" @mouseout="down_hide5('.down72')">
			   	  <vue-fontawesome icon="download" class="d_icon_72" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t72">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl73', '.down73')">
			   <p class="name5 Te2 text4_mobile_13">#13 Lullaby of the Giants</p>

			   <div class="audio_pole_m5 audio_p73_m5" @click="Perek5($event, '.aud73', '.audio_p73_m5')" @mouseover="Show_time5('.Aud_t73')" @mousemove="Run_block5($event, '.audio_p73_m5', '.aud73', '.Aud_t73')" @mouseout="Time_out5('.Aud_t73')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl73', '.l_of_v73', '.repl73', '.down73')" @mouseover="Over5('.l_of_v73')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v73" @mouseover="Over5('.l_of_v73')" @mouseout="Ov5('.l_of_v73')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v73', '.aud73', '.repl73', '.down73')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v73', '.aud73', '.repl73', '.down73')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v73', '.aud73', '.repl73', '.down73')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v73', '.aud73', '.repl73', '.down73')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud73', '.aud72', '.repl73', '.r_icon_73', '.down73')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl73" @click="Play5('.pl73', '.repl73', '.down73')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud73" @timeupdate="Update5('.aud73', '.st73', '.audio_p73_m5')" src="../sound/God_of_war/Lullaby of the Giants.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud73', '.aud74', '.repl73', '.r_icon_73', '.down73')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st73">00:00</p><p class="end_time5">/03:43</p>

			   <span id="speed_aud5" class="choice_speed_73" @click="Show_speed5('.sp_block_73')">x1</span>

			   <div class="Speed_block5 sp_block_73">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_73" @click="First_speed_5('.x_first_73', '.aud73', '.choice_speed_73', '.repl73', '.down73')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_73" @click="Second_speed_5('.x_second_73', '.aud73', '.choice_speed_73', '.repl73', '.down73')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_73" @click="Third_speed_5('.x_third_73', '.aud73', '.choice_speed_73', '.repl73', '.down73')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_73" @click="Fourth_speed_5('.x_fourth_73', '.aud73', '.choice_speed_73', '.repl73', '.down73')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_73" @click="Fifth_speed_5('.x_fifth_73', '.aud73', '.choice_speed_73', '.repl73', '.down73')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_73" @click="Six_speed_5('.x_six_73', '.aud73', '.choice_speed_73', '.repl73', '.down73')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl73" @click="Replay5('.aud73', '.r_icon_73')" @mouseover="S5('.repl73')" @mouseout="hide_repeat5('.repl73')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_73" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down73" @click="Download5('.down73', 'God of War - Lullaby of the Giants', '.d_icon_73')" @mouseout="down_hide5('.down73')">
			   	  <vue-fontawesome icon="download" class="d_icon_73" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t73">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl74', '.down74')">
			   <p class="name5 text4_mobile_14">#14 A Giant's Prayer</p>

			   <div class="audio_pole_m5 audio_p74_m5" @click="Perek5($event, '.aud74', '.audio_p74_m5')" @mouseover="Show_time5('.Aud_t74')" @mousemove="Run_block5($event, '.audio_p74_m5', '.aud74', '.Aud_t74')" @mouseout="Time_out5('.Aud_t74')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl74', '.l_of_v74', '.repl74', '.down74')" @mouseover="Over5('.l_of_v74')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v74" @mouseover="Over5('.l_of_v74')" @mouseout="Ov5('.l_of_v74')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v74', '.aud74', '.repl74', '.down74')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v74', '.aud74', '.repl74', '.down74')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v74', '.aud74', '.repl74', '.down74')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v74', '.aud74', '.repl74', '.down74')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud74', '.aud73', '.repl74', '.r_icon_74', '.down74')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl74" @click="Play5('.pl74', '.repl74', '.down74')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud74" @timeupdate="Update5('.aud74', '.st74', '.audio_p74_m5')" src="../sound/God_of_war/A Giant's Prayer.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud74', '.aud75', '.repl74', '.r_icon_74', '.down74')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st74">00:00</p><p class="end_time5">/01:59</p>

			   <span id="speed_aud5" class="choice_speed_74" @click="Show_speed5('.sp_block_74')">x1</span>

			   <div class="Speed_block5 sp_block_74">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_74" @click="First_speed_5('.x_first_74', '.aud74', '.choice_speed_74', '.repl74', '.down74')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_74" @click="Second_speed_5('.x_second_74', '.aud74', '.choice_speed_74', '.repl74', '.down74')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_74" @click="Third_speed_5('.x_third_74', '.aud74', '.choice_speed_74', '.repl74', '.down74')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_74" @click="Fourth_speed_5('.x_fourth_74', '.aud74', '.choice_speed_74', '.repl74', '.down74')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_74" @click="Fifth_speed_5('.x_fifth_74', '.aud74', '.choice_speed_74', '.repl74', '.down74')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_74" @click="Six_speed_5('.x_six_74', '.aud74', '.choice_speed_74', '.repl74', '.down74')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl74" @click="Replay5('.aud74', '.r_icon_74')" @mouseover="S5('.repl74')" @mouseout="hide_repeat5('.repl74')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_74" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down74" @click="Download5('.down74', 'God of War - A Giant`s Prayer', '.d_icon_74')" @mouseout="down_hide5('.down74')">
			   	  <vue-fontawesome icon="download" class="d_icon_74" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio5 Aud_t74">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block5" @mouseover="show_repeat5('.repl75', '.down75')">
			   <p class="name5 text4_mobile_15">#15 Magni and Modi</p>

			   <div class="audio_pole_m5 audio_p75_m5" @click="Perek5($event, '.aud75', '.audio_p75_m5')" @mouseover="Show_time5('.Aud_t75')" @mousemove="Run_block5($event, '.audio_p75_m5', '.aud75', '.Aud_t75')" @mouseout="Time_out5('.Aud_t75')">
				   <div class="aud_p5"></div>
			   </div>

			   <button id="vol5" @click="Vol5('.pl75', '.l_of_v75', '.repl75', '.down75')" @mouseover="Over5('.l_of_v75')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol5 l_of_v75" @mouseover="Over5('.l_of_v75')" @mouseout="Ov5('.l_of_v75')">
			   	  <div class="Vl_1" @click="C1_5('.l_of_v75', '.aud75', '.repl75', '.down75')"></div>
			   	  <div class="Vl_2" @click="C2_5('.l_of_v75', '.aud75', '.repl75', '.down75')"></div>
			   	  <div class="Vl_3" @click="C3_5('.l_of_v75', '.aud75', '.repl75', '.down75')"></div>
			   	  <div class="Vl_4" @click="C4_5('.l_of_v75', '.aud75', '.repl75', '.down75')"></div>
			   </div>

			   <button class="prev5" @click="Prev5('.aud75', '.aud74', '.repl75', '.r_icon_75', '.down75')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play5 pl75" @click="Play5('.pl75', '.repl75', '.down75')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud75" @timeupdate="Update5('.aud75', '.st75', '.audio_p75_m5')" src="../sound/God_of_war/Magni and Modi.mp3"></audio></button>
			   <button class="next5" @click="Next5('.aud75', '.aud61', '.repl75', '.r_icon_75', '.down75')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time5 st75">00:00</p><p class="end_time5">/02:49</p>

			   <span id="speed_aud5" class="choice_speed_75" @click="Show_speed5('.sp_block_75')">x1</span>

			   <div class="Speed_block5 sp_block_75">
			   	   <div class="contain5">
			   	   	  <div class="X5_25 b5 x_first_75" @click="First_speed_5('.x_first_75', '.aud75', '.choice_speed_75', '.repl75', '.down75')"><p>x.25</p></div>
			   	      <div class="X5_5 b5 x_second_75" @click="Second_speed_5('.x_second_75', '.aud75', '.choice_speed_75', '.repl75', '.down75')"><p>x.5</p></div>
			   	      <div class="X5_1 b5 x_third_75" @click="Third_speed_5('.x_third_75', '.aud75', '.choice_speed_75', '.repl75', '.down75')"><p>x1</p></div>
			   	      <div class="X5_1_25 b5 x_fourth_75" @click="Fourth_speed_5('.x_fourth_75', '.aud75', '.choice_speed_75', '.repl75', '.down75')"><p>x1.25</p></div>
			   	      <div class="X5_15 b5 x_fifth_75" @click="Fifth_speed_5('.x_fifth_75', '.aud75', '.choice_speed_75', '.repl75', '.down75')"><p>x1.5</p></div>
			   	      <div class="X5_2 b5 x_six_75" @click="Six_speed_5('.x_six_75', '.aud75', '.choice_speed_75', '.repl75', '.down75')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button5 repl75" @click="Replay5('.aud75', '.r_icon_75')" @mouseover="S5('.repl75')" @mouseout="hide_repeat5('.repl75')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_75" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button5 down75" @click="Download5('.down75', 'God of War - Magni and Modi', '.d_icon_75')" @mouseout="down_hide5('.down75')">
			   	  <vue-fontawesome icon="download" class="d_icon_75" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio5 Aud_t75">
			   	   <span id="t5">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
		name: "God_of_War",
		methods: {
        Play5(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_6');
            DOWN_ELEM_4.classList.add('d_first_anim5');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_5');
               DOWN_ELEM_4.classList.remove('d_first_move5');
               REPL_ELEM_4.classList.remove('Rep_6');
               DOWN_ELEM_4.classList.remove('d_first_anim5');
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

      	     REPL_ELEM_4.classList.add('Rep_6');
      	     DOWN_ELEM_4.classList.add('d_first_anim5');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_5');
               DOWN_ELEM_4.classList.remove('d_first_move5');
               REPL_ELEM_4.classList.remove('Rep_6');
               DOWN_ELEM_4.classList.remove('d_first_anim5');
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

      Vol5(el2, lvl1, Repl_elem_2, Down_elem_2) {
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

            REPL_ELEM_2.classList.add('Rep_6');
            DOWN_ELEM_2.classList.add('d_first_anim5');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_5');
               DOWN_ELEM_2.classList.remove('d_first_move5');
               REPL_ELEM_2.classList.remove('Rep_6');
               DOWN_ELEM_2.classList.remove('d_first_anim5');
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

            REPL_ELEM_2.classList.add('Rep_6');
            DOWN_ELEM_2.classList.add('d_first_anim5');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_5');
               DOWN_ELEM_2.classList.remove('d_first_move5');
               REPL_ELEM_2.classList.remove('Rep_6');
               DOWN_ELEM_2.classList.remove('d_fist_anim5');
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
      Download5(d_button, d_name, d_icon) {
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
         down_button.classList.add('.d_first_anim5');

         setTimeout(() => {
         	down_button.classList.add('.d_first_move5');
            //ICON_D.style.color = 'white';
            down_button.classList.remove('.d_first_anim5');
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

      Over5(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show5');
      },

      Ov5(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show5');
      },

      C1_5(el5, volm1, Repl_elem_3, Down_elem_3) {
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

          REPL_ELEM_3.classList.add('Rep_6');
          DOWN_ELEM_3.classList.add('d_first_anim5');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_5');
            DOWN_ELEM_3.classList.remove('d_first_move5');
            REPL_ELEM_3.classList.remove('Rep_6');
            DOWN_ELEM_3.classList.remove('d_first_anim5');
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

      C2_5(el6, volm2, Repl_elem_4, Down_elem_4) {
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

          REPL_ELEM_4.classList.add('Rep_6');
          DOWN_ELEM_4.classList.add('d_fist_anim5');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_5');
            DOWN_ELEM_4.classList.remove('d_first_move5');
            REPL_ELEM_4.classList.remove('Rep_6');
            DOWN_ELEM_4.classList.remove('d_first_anim5');
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

      C3_5(el7, volm3, Repl_elem_5, Down_elem_5) {
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

           REPL_ELEM_5.classList.add('Rep_6');
           DOWN_ELEM_5.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_5');
            DOWN_ELEM_5.classList.remove('d_first_move5');
            REPL_ELEM_5.classList.remove('Rep_6');
            DOWN_ELEM_5.classList.remove('d_first_anim5');
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


      C4_5(el8, volm4, Repl_elem_6, Down_elem_6) {
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
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 100%`;

          REPL_ELEM_6.classList.add('Rep_6');
          DOWN_ELEM_6.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_5');
            DOWN_ELEM_6.classList.remove('d_first_move5');
            REPL_ELEM_6.classList.remove('Rep_6');
            DOWN_ELEM_6.classList.remoev('d_first_anim5');
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

      Update5(volm5, time_b1, prog) {
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

      Prev5(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
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

         REPL_1.classList.add('Rep_6');
         DOWN_1.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_5');
            DOWN_1.classList.remove('d_first_move5');
            REPL_1.classList.remove('Rep_6');
            DOWN_1.classList.remove('d_first_anim5');
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

      Next5(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
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

         REPL_2.classList.add('Rep_6');
         DOWN_2.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_5');
            DOWN_2.classList.remove('d_first_move5');
            REPL_2.classList.remove('Rep_6');
            DOWN_2.classList.remove('d_first_anim5');
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

      Perek5(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time5(t_block5) {
          let time_block = document.querySelector(t_block5);
      	  time_block.classList.add('T_aud_5');
      },

      Time_out5(t_block5) {
      	  let time_block = document.querySelector(t_block5);
      	  time_block.classList.remove('T_aud_5');
      },

      Run_block5(event, M_Pole, Aud2, t_block4) {
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
          
      show_repeat5(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_5');
          drep.classList.add('d_first_move5');
      },

      hide_repeat5(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_6');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_5');
             replay2.classList.remove('Rep_6');
      	  }, 1100);
      },

      down_hide5(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim5');

         setTimeout(() => {
            d2.classList.remove('d_first_move5');
            d2.classList.remove('d_first_anim5');
         }, 1100);
      },

      Replay5(AUD, Icon1) {
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

      S5(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_5');
      },

      Show_speed5(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_5');
      },

      First_speed_5(first, a, ch_one, Repl_elem_7, Down_elem_7) {
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

           REPL_ELEM_7.classList.add('Rep_6');
           DOWN_ELEM_7.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_5');
            DOWN_ELEM_7.classList.remove('d_first_move5');
            REPL_ELEM_7.classList.remove('Rep_6');
            DOWN_ELEM_7.classList.remove('d_first_anim5');
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

      Second_speed_5(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
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

           REPL_ELEM_8.classList.add('Rep_6');
           DOWN_ELEM_8.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_5');
            DOWN_ELEM_8.classList.remove('d_first_move5');
            REPL_ELEM_8.classList.remove('Rep_6');
            DOWN_ELEM_8.classList.remove('d_first_anim5');
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

      Third_speed_5(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
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

           REPL_ELEM_9.classList.add('Rep_6');
           DOWN_ELEM_9.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_5');
            DOWN_ELEM_9.classList.remove('d_first_move5');
            REPL_ELEM_9.classList.remove('Rep_6');
            DOWN_ELEM_9.classList.remove('d_first_anim5');
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

      Fourth_speed_5(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
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

           REPL_ELEM_10.classList.add('Rep_6');
           DOWN_ELEM_10.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_5');
            DOWN_ELEM_10.classList.remove('d_first_move5');
            REPL_ELEM_10.classList.remove('Rep_6');
            DOWN_ELEM_10.classList.remove('d_first_anim5');
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

      Fifth_speed_5(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
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

           REPL_ELEM_11.classList.add('Rep_6');
           DOWN_ELEM_11.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_5');
            DOWN_ELEM_11.classList.remove('d_first_move5');
            REPL_ELEM_11.classList.remove('Rep_6');
            DOWN_ELEM_11.classList.remove('d_first_anim5');
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

      Six_speed_5(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
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

           REPL_ELEM_12.classList.add('Rep_6');
           DOWN_ELEM_12.classList.add('d_first_anim5');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_5');
            DOWN_ELEM_12.classList.remove('d_first_move5');
            REPL_ELEM_12.classList.remove('Rep_6');
            DOWN_ELEM_12.classList.remove('d_first_anim5');
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
	}
</script>
<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.side_screen5 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/God_background.jpg");
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

    .side_screen5 span {
    	position: absolute;
    	left: 345px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block5 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block5 > .sound_block5 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block5 .sound_block5 .name5 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block5 .sound_block5 .Te1 {
    	left: 115px;
    }

    .audio_collection_block5 .sound_block5 .Te2 {
    	left: 125px;
    }

    .audio_collection_block5 .sound_block5 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block5 .sound_block5 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block5 .sound_block5 .audio_pole_m5 {
        height: 5px;
        width: 648px;
        position: absolute;
        background: white;
        left: 38px;
        top: 78px;
        cursor: pointer;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
    }

    .audio_collection_block5 .sound_block5 .audio_pole_m5:hover {
    	opacity: .7;
    }

    .audio_collection_block5 .sound_block5 .audio_pole_m5 .aud_p5 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	background: yellow;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block5 .sound_block5 #vol5 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block5 .sound_block5 .l_of_vol5 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block5 .sound_block5 .l_of_vol5.L_show5 {
    	display: block;
    } 

    .audio_collection_block5 .sound_block5 .l_of_vol5 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block5 .sound_block5 .l_of_vol5 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.1);

    }

    .audio_collection_block5 .sound_block5 .l_of_vol5 .Vl_1 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block5 .sound_block5 .l_of_vol5 .Vl_2 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block5 .sound_block5 .l_of_vol5 .Vl_3 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block5 .sound_block5 .l_of_vol5 .Vl_4 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block5 .sound_block5 .prev5 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block5 .sound_block5 .prev5:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block5 .sound_block5 .play5 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block5 .sound_block5 .next5 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block5 .sound_block5 .next5:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block5 .sound_block5 .start_time5 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block5 .sound_block5 .end_time5 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block5 .sound_block5 .Replay_button5 {
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

    .audio_collection_block5 .sound_block5 .Replay_button5.Rep_5 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block5 .sound_block5 .Replay_button5.Rep_6 {
    	animation: spek5 1s linear;
    	transform: scale(0);
    }

    @keyframes spek5 {
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

    .audio_collection_block5 .sound_block5 .Time_of_audio5 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block5 .sound_block5 .Time_of_audio5 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block5 .sound_block5 .Time_of_audio5.T_aud_5 {
    	display: block;
    }

    .audio_collection_block5 .sound_block5 #speed_aud5 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block5 .sound_block5 .Download_button5 {
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

    .audio_collection_block5 .sound_block5 .Download_button5:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block5 .sound_block5 .Download_button5.d_first_move5 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block5 .sound_block5 .Download_button5.d_first_anim5 {
    	animation: down5 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down5 {
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

    .audio_collection_block5 .sound_block5 .Speed_block5 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block5 .sound_block5 .Speed_block5.tgl_5 {
    	display: block;
    }

     .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 .b5 {
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

    .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 .b5:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 .b5 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 .b5 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
        .side_screen5 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen5 span {
    		font-size: 55px;
    		left: 310px;
    	}

    	.audio_collection_block5 > .sound_block5 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block5 .sound_block5 .audio_pole_m5 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block5 .sound_block5 .audio_pole_m5 .aud_p5 {
    		height: 9.5px;
    	}

    	.audio_collection_block5 .sound_block5 #vol5 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block5 .sound_block5 .play5 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block5 .sound_block5 .prev5 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block5 .sound_block5 .next5 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block5 .sound_block5 .name5 {
    	   left: 255px;
        }

        .audio_collection_block5 .sound_block5 .Time_of_audio5 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block5 .sound_block5 .Time_of_audio5 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block5 .sound_block5 .start_time5 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block5 .sound_block5 .end_time5 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }5
        .audio_collection_block5 .sound_block5 #speed_aud5 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block5 .sound_block5 .Speed_block5 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 .b5 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block5 .sound_block5 .Speed_block5 .contain5 .b5 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block5 .sound_block5 .Replay_button5 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block5 .sound_block5 .Replay_button5.sh8 {
    	    margin-left: 850px;
        }

        .audio_collection_block5 .sound_block5 .Download_button5 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block5 .sound_block5 .l_of_vol5 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_2 {
           left: 330px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_3 {
        	left: 290px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_4 {
        	left: 180px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_6 {
            left: 180px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_11 {
        	left: 160px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_12 {
        	left: 270px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_13 {
        	left: 160px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_14 {
        	left: 210px;
        }

        .audio_collection_block5 .sound_block5 .text4_mobile_15 {
        	left: 210px;
        }
    }
</style>