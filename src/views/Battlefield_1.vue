<template>
	<div class="side_screen9">
		<span>Battlefield 1 music</span>
		<div class="audio_collection_block9">
		    <div class="sound_block9" @mouseover="show_repeat9('.repl121', '.down121')">
			   <p class="name9 text8_mobile_1">#1 Battlefield One</p>

			   <div class="audio_pole_m9 audio_p121_m9" @click="Perek9($event, '.aud121', '.audio_p121_m9')" @mouseover="Show_time9('.Aud_t121')" @mousemove="Run_block9($event, '.audio_p121_m9', '.aud121', '.Aud_t121')" @mouseout="Time_out9('.Aud_t121')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl121', '.l_of_v121', '.repl121', '.down121')" @mouseover="Over9('.l_of_v121')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol9 l_of_v121" @mouseover="Over9('.l_of_v121')" @mouseout="Ov9('.l_of_v121')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v121', '.aud121', '.repl121', '.down121')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v121', '.aud121', '.repl121', '.down121')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v121', '.aud121', '.repl121', '.down121')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v121', '.aud121', '.repl121', '.down121')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud121', '.aud135', '.repl121', '.r_icon_121', '.down121')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl121" @click="Play9('.pl121', '.repl121', '.down121')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud121" @timeupdate="Update9('.aud121', '.st121', '.audio_p121_m9')" src="../sound/Battlefield_1/01. Battlefield One.mp3"></audio></button> 
			   <button class="next9" @click="Next9('.aud121', '.aud122', '.repl121', '.r_icon_121', '.down121')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st121">00:00</p><p class="end_time9">/03:20</p>

			    <span id="speed_aud9" class="choice_speed_121" @click="Show_speed9('.sp_block_121')">x1</span>

			   <div class="Speed_block9 sp_block_121">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_121" @click="First_speed_9('.x_first_121', '.aud121', '.choice_speed_121', '.repl121', '.down121')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_121" @click="Second_speed_9('.x_second_121', '.aud121', '.choice_speed_121', '.repl121', '.down121')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_121" @click="Third_speed_9('.x_third_121', '.aud121', '.choice_speed_121', '.repl121', '.down121')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_121" @click="Fourth_speed_9('.x_fourth_121', '.aud121', '.choice_speed_121', '.repl121', '.down121')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_121" @click="Fifth_speed_9('.x_fifth_121', '.aud121', '.choice_speed_121', '.repl121', '.down121')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_121" @click="Six_speed_9('.x_six_121', '.aud121', '.choice_speed_121', '.repl121', '.down121')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button9 repl121" @click="Replay9('.aud121', '.r_icon_121')" @mouseover="S9('.repl121')" @mouseout="hide_repeat9('.repl121')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_121" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down121" @click="Download9('.down121', 'Battlefield 1 - Battlefield One')" @mouseout="down_hide9('.down121')">
			   	  <vue-fontawesome icon="download" class="d_icon_120" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t121">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block9" @mouseover="show_repeat9('.repl122', '.down122')">
			   <p class="name9 BF1 text8_mobile_2">#2 The War to End All Wars</p>

			   <div class="audio_pole_m9 audio_p122_m9" @click="Perek9($event, '.aud122', '.audio_p122_m9')" @mouseover="Show_time9('.Aud_t122')" @mousemove="Run_block9($event, '.audio_p122_m9', '.aud122', '.Aud_t122')" @mouseout="Time_out9('.Aud_t122')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl122', '.l_of_v122', '.repl122', '.down122')" @mouseover="Over9('.l_of_v122')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v122" @mouseover="Over9('.l_of_v122')" @mouseout="Ov9('.l_of_v122')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v122', '.aud122', '.repl122', '.down122')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v122', '.aud122', '.repl122', '.down122')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v122', '.aud122', '.repl122', '.down122')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v122', '.aud122', '.repl122', '.down122')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud122', '.aud121', '.repl122', '.r_icon_122', '.down122')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl122" @click="Play9('.pl122', '.repl122', '.down122')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud122" @timeupdate="Update9('.aud122', '.st122', '.audio_p122_m9')" src="../sound/Battlefield_1/02. The War to End All Wars.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud122', '.aud123', '.repl122', '.r_icon_122', '.down122')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st122">00:00</p><p class="end_time9">/03:23</p>

			   <span id="speed_aud9" class="choice_speed_122" @click="Show_speed9('.sp_block_122')">x1</span>

			   <div class="Speed_block9 sp_block_122">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_122" @click="First_speed_9('.x_first_122', '.aud122', '.choice_speed_122', '.repl122', '.down122')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_122" @click="Second_speed_9('.x_second_122', '.aud122', '.choice_speed_122', '.repl122', '.down122')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_122" @click="Third_speed_9('.x_third_122', '.aud122', '.choice_speed_122', '.repl122', '.down122')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_122" @click="Fourth_speed_9('.x_fourth_122', '.aud122', '.choice_speed_122', '.repl122', '.down122')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_122" @click="Fifth_speed_9('.x_fifth_122', '.aud122', '.choice_speed_122', '.repl122', '.down122')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_122" @click="Six_speed_9('.x_six_122', '.aud122', '.choice_speed_122', '.repl122', '.down122')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl122" @click="Replay9('.aud122', '.r_icon_122')" @mouseover="S9('.repl122')" @mouseout="hide_repeat9('.repl122')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_122" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down122" @click="Download9('.down122', 'Battlefield 1 - The War to End All Wars')" @mouseout="down_hide9('.down122')">
			   	  <vue-fontawesome icon="download" class="d_icon_122" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio9 Aud_t122">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block9" @mouseover="show_repeat9('.repl123', '.down123')">
			   <p class="name9 text8_mobile_3">#3 Mud and Blood</p>

			   <div class="audio_pole_m9 audio_p123_m9" @click="Perek9($event, '.aud123', '.audio_p123_m9')" @mouseover="Show_time9('.Aud_t123')" @mousemove="Run_block9($event, '.audio_p123_m9', '.aud123', '.Aud_t123')" @mouseout="Time_out9('.Aud_t123')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl123', '.l_of_v123', '.repl123', '.down123')" @mouseover="Over9('.l_of_v123')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v123" @mouseover="Over9('.l_of_v123')" @mouseout="Ov9('.l_of_v123')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v123', '.aud123', '.repl123', '.down123')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v123', '.aud123', '.repl123', '.down123')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v123', '.aud123', '.repl123', '.down123')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v123', '.aud123', '.repl123', '.down123')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud123', '.aud122', '.repl123', '.r_icon_123', '.down123')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl123" @click="Play9('.pl123', '.repl123', '.down123')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud123" @timeupdate="Update9('.aud123', '.st123', '.audio_p123_m9')" src="../sound/Battlefield_1/03. Mud and Blood.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud123', '.aud124', '.repl123', '.r_icon_123', '.down123')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time9 st123">00:00</p><p class="end_time9">/03:04</p>

			   <span id="speed_aud9" class="choice_speed_123" @click="Show_speed9('.sp_block_123')">x1</span>

			   <div class="Speed_block9 sp_block_123">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_123" @click="First_speed_9('.x_first_123', '.aud123', '.choice_speed_123', '.repl123', '.down123')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_123" @click="Second_speed_9('.x_second_123', '.aud123', '.choice_speed_123', '.repl123', '.down123')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_123" @click="Third_speed_9('.x_third_123', '.aud123', '.choice_speed_123', '.repl123', '.down123')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_123" @click="Fourth_speed_9('.x_fourth_123', '.aud123', '.choice_speed_123', '.repl123', '.down123')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_123" @click="Fifth_speed_9('.x_fifth_123', '.aud123', '.choice_speed_123', '.repl123', '.down123')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_123" @click="Six_speed_9('.x_six_123', '.aud123', '.choice_speed_123', '.repl123', '.down123')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl123" @click="Replay9('.aud123', '.r_icon_123')" @mouseover="S9('.repl123')" @mouseout="hide_repeat9('.repl123')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_123" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down123" @click="Download9('.down123', 'Battlefield 1 - Mud And Blood')" @mouseout="down_hide9('.down123')">
			   	  <vue-fontawesome icon="download" class="d_icon_123" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t123">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl124', '.down124')">
			   <p class="name9 text8_mobile_4">#4 Nothing is Written</p>

			   <div class="audio_pole_m9 audio_p124_m9" @click="Perek9($event, '.aud124', '.audio_p124_m9')" @mouseover="Show_time9('.Aud_t124')" @mousemove="Run_block9($event, '.audio_p124_m9', '.aud124', '.Aud_t124')" @mouseout="Time_out9('.Aud_t124')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl124', '.l_of_v124', '.repl124', '.down124')" @mouseover="Over9('.l_of_v124')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v124" @mouseover="Over9('.l_of_v124')" @mouseout="Ov9('.l_of_v124')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v124', '.aud124', '.repl124', '.down124')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v124', '.aud124', '.repl124', '.down124')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v124', '.aud124', '.repl124', '.down124')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v124', '.aud124', '.repl124', '.down124')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud124', '.aud123', '.repl124', '.r_icon_124', '.down124')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl124" @click="Play9('.pl124', '.repl124', '.down124')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud124" @timeupdate="Update9('.aud124', '.st124', '.audio_p124_m9')" src="../sound/Battlefield_1/06. Nothing Is Written.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud124', '.aud125', '.repl124', '.r_icon_124', '.down124')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

                <p class="start_time9 st124">00:00</p><p class="end_time9">/03:40</p>

			   <span id="speed_aud9" class="choice_speed_124" @click="Show_speed9('.sp_block_124')">x1</span>

			   <div class="Speed_block9 sp_block_124">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_124" @click="First_speed_9('.x_first_124', '.aud124', '.choice_speed_124', '.repl124', '.down124')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_124" @click="Second_speed_9('.x_second_124', '.aud124', '.choice_speed_124', '.repl124', '.down124')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_124" @click="Third_speed_9('.x_third_124', '.aud124', '.choice_speed_124', '.repl124', '.down124')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_124" @click="Fourth_speed_9('.x_fourth_124', '.aud124', '.choice_speed_124', '.repl124', '.down124')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_124" @click="Fiftb_speed_9('.x_fifth_124', '.aud124', '.choice_speed_124', '.repl124', '.down124')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_124" @click="Six_speed_9('.x_six_124', '.aud124', '.choice_speed_124', '.repl124', '.down124')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl124" @click="Replay9('.aud124', '.r_icon_124')" @mouseover="S9('.repl124')" @mouseout="hide_repeat9('.repl124')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_124" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down124" @click="Download9('.down124', 'Battlefield 1 - Nothing is Written')" @mouseout="down_hide9('.down124')">
			   	  <vue-fontawesome icon="download" class="d_icon_124" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t124">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl125', '.down125')">
			   <p class="name9">#5 Avanti Savoia</p>

			   <div class="audio_pole_m9 audio_p125_m9" @click="Perek9($event, '.aud125', '.audio_p125_m9')" @mouseover="Show_time9('.Aud_t125')" @mousemove="Run_block9($event, '.audio_p125_m9', '.aud125', '.Aud_t125')" @mouseout="Time_out9('.Aud_t125')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl125', '.l_of_v125', '.repl125', '.down125')" @mouseover="Over9('.l_of_v125')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v125" @mouseover="Over9('.l_of_v125')" @mouseout="Ov9('.l_of_v125')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v125', '.aud125', '.repl125', '.down125')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v125', '.aud125', '.repl125', '.down125')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v125', '.aud125', '.repl125', '.down125')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v125', '.aud125', '.repl125', '.down125')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud125', '.aud124', '.repl125', '.r_icon_125', '.down125')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl125" @click="Play9('.pl125', '.repl125', '.down125')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud125" @timeupdate="Update9('.aud125', '.st125', '.audio_p125_m9')" src="../sound/Battlefield_1/07. Avanti Savoia.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud125', '.aud126', '.repl125', '.r_icon_125', '.down125')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time9 st125">00:00</p><p class="end_time9">/03:31</p>

			   <span id="speed_aud9" class="choice_speed_125" @click="Show_speed9('.sp_block_125')">x1</span>

			   <div class="Speed_block9 sp_block_125">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_125" @click="First_speed_9('.x_first_125', '.aud125', '.choice_speed_125', '.repl125', '.down125')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_125" @click="Second_speed_9('.x_second_125', '.aud125', '.choice_speed_125', '.repl125', '.down125')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_125" @click="Third_speed_9('.x_third_125', '.aud125', '.choice_speed_125', '.repl125', '.down125')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_125" @click="Fourth_speed_9('.x_fourth_125', '.aud125', '.choice_speed_125', '.repl125', '.down125')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_125" @click="Fifth_speed_9('.x_fifth_125', '.aud125', '.choice_speed_125', '.repl125', '.down125')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_125" @click="Six_speed_9('.x_six_125', '.aud125', '.choice_speed_125', '.repl125', '.down125')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl125" @click="Replay9('.aud125', '.r_icon_125')" @mouseover="S9('.repl125')" @mouseout="hide_repeat9('.repl125')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_125" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down125" @click="Download9('.down125', 'Battlefield 1 - Avanti Savoia')" @mouseout="down_hide9('.down125')">
			   	  <vue-fontawesome icon="download" class="d_icon_125" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio9 Aud_t125">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl126', '.down126')">
			   <p class="name9">#6 Black Bess</p>

			   <div class="audio_pole_m9 audio_p126_m9" @click="Perek9($event, '.aud126', '.audio_p126_m9')" @mouseover="Show_time9('.Aud_t126')" @mousemove="Run_block9($event, '.audio_p126_m9', '.aud126', '.Aud_t126')" @mouseout="Time_out9('.Aud_t126')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl126', '.l_of_v126', '.repl126', '.down126')" @mouseover="Over9('.l_of_v126')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v126" @mouseover="Over9('.l_of_v126')" @mouseout="Ov9('.l_of_v126')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v126', '.aud126', '.repl126', '.down126')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v126', '.aud126', '.repl126', '.down126')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v126', '.aud126', '.repl126', '.down126')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v126', '.aud126', '.repl126', '.down126')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud126', '.aud125', '.repl126', '.r_icon_126', '.down126')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl126" @click="Play9('.pl126', '.repl126', '.down126')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud126" @timeupdate="Update9('.aud126', '.st126', '.audio_p126_m9')" src="../sound/Battlefield_1/09. Black Bess.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud126', '.aud127', '.repl126', '.r_icon_126', '.down126')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time9 st126">00:00</p><p class="end_time9">/02:35</p>

			   <span id="speed_aud9" class="choice_speed_126" @click="Show_speed9('.sp_block_126')">x1</span>

			   <div class="Speed_block9 sp_block_126">
			   	   <div class="contain9">
			   	   	  <div class="Sp_25 b9 x_first_126" @click="First_speed_9('.x_first_126', '.aud126', '.choice_speed_126', '.repl126', '.down126')"><p>x.25</p></div>
			   	      <div class="Sp_5 b9 x_second_126" @click="Second_speed_9('.x_second_126', '.aud126', '.choice_speed_126', '.repl126', '.down126')"><p>x.5</p></div>
			   	      <div class="Sp_1 b9 x_third_126" @click="Third_speed_9('.x_third_126', '.aud126', '.choice_speed_126', '.repl126', '.down126')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b9 x_fourth_126" @click="Fourth_speed_9('.x_fourth_126', '.aud126', '.choice_speed_126', '.repl126', '.down126')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b9 x_fifth_126" @click="Fifth_speed_9('.x_fifth_126', '.aud126', '.choice_speed_126', '.repl126', '.down126')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b9 x_six_126" @click="Six_speed_9('.x_six_126', '.aud126', '.choice_speed_126', '.repl126', '.down126')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl126" @click="Replay9('.aud126', '.r_icon_126')" @mouseover="S9('.repl126')" @mouseout="hide_repeat9('.repl126')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_126" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button9 down126" @click="Download9('.down126', 'Battlefield 1 - Avanti Savoia')" @mouseout="down_hide9('.down126')">
			   	  <vue-fontawesome icon="download" class="d_icon_126" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio9 Aud_t126">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl127', '.down127')">
			   <p class="name9">#7 Steel on Steel</p>

			   <div class="audio_pole_m9 audio_p127_m9" @click="Perek9($event, '.aud127', '.audio_p127_m9')" @mouseover="Show_time9('.Aud_t127')" @mousemove="Run_block9($event, '.audio_p127_m9', '.aud127', '.Aud_t127')" @mouseout="Time_out9('.Aud_t127')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl127', '.l_of_v127', '.repl127', '.down127')" @mouseover="Over9('.l_of_v127')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v127" @mouseover="Over9('.l_of_v127')" @mouseout="Ov9('.l_of_v127')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v127', '.aud127', '.repl127', '.down127')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v127', '.aud127', '.repl127', '.down127')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v127', '.aud127', '.repl127', '.down127')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v127', '.aud127', '.repl127', '.down127')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud127', '.aud126', '.repl127', '.r_icon_127', '.down127')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl127" @click="Play9('.pl127', '.repl127', '.down127')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud127" @timeupdate="Update9('.aud127', '.st127', '.audio_p127_m9')" src="../sound/Battlefield_1/10. Steel on Steel.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud127', '.aud128', '.repl127', '.r_icon_127', '.down127')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st127">00:00</p><p class="end_time9">/01:56</p>

			   <span id="speed_aud9" class="choice_speed_127" @click="Show_speed9('.sp_block_127')">x1</span>

			   <div class="Speed_block9 sp_block_127">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_127" @click="First_speed_9('.x_first_127', '.aud127', '.choice_speed_127', '.repl127', '.down127')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_127" @click="Second_speed_9('.x_second_127', '.aud127', '.choice_speed_127', '.repl127', '.down127')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_127" @click="Third_speed_9('.x_third_127', '.aud127', '.choice_speed_127', '.repl127', '.down127')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_127" @click="Fourth_speed_9('.x_fourth_127', '.aud127', '.choice_speed_127', '.repl127', '.down127')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_127" @click="Fifth_speed_9('.x_fifth_127', '.aud127', '.choice_speed_127', '.repl127', '.down127')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_127" @click="Six_speed_9('.x_six_127', '.aud127', '.choice_speed_127', '.repl127', '.down127')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl127" @click="Replay9('.aud127', '.r_icon_127')" @mouseover="S9('.repl127')" @mouseout="hide_repeat9('.repl127')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_127" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down127" @click="Download9('.down127', 'Battlefield 1 - Steel on Steel')" @mouseout="down_hide9('.down127')">
			   	  <vue-fontawesome icon="download" class="d_icon_127" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio9 Aud_t127">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl128', '.down128')">
			   <p class="name9">#8 The Swindle</p>

			   <div class="audio_pole_m9 audio_p128_m9" @click="Perek9($event, '.aud128', '.audio_p128_m9')" @mouseover="Show_time9('.Aud_t128')" @mousemove="Run_block9($event, '.audio_p128_m9', '.aud128', '.Aud_t128')" @mouseout="Time_out9('.Aud_t128')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl128', '.l_of_v128', '.repl128', '.down128')" @mouseover="Over9('.l_of_v128')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v128" @mouseover="Over9('.l_of_v128')" @mouseout="Ov9('.l_of_v128')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v128', '.aud128', '.repl128', '.down128')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v128', '.aud128', '.repl128', '.down128')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v128', '.aud128', '.repl128', '.down128')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v128', '.aud128', '.repl128', '.down128')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud128', '.aud127', '.repl128', '.r_icon_128', '.down128')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl128" @click="Play9('.pl128', '.repl128', '.down128')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud128" @timeupdate="Update9('.aud128', '.st128', '.audio_p128_m9')" src="../sound/Battlefield_1/11. The Swindle.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud128', '.aud129', '.repl128', '.r_icon_128', '.down128')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st128">00:00</p><p class="end_time9">/03:23</p>

			   <span id="speed_aud9" class="choice_speed_128" @click="Show_speed9('.sp_block_128')">x1</span>

			   <div class="Speed_block9 sp_block_128">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_128" @click="First_speed_9('.x_first_128', '.aud128', '.choice_speed_128', '.repl128', '.down128')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_128" @click="Second_speed_9('.x_second_128', '.aud128', '.choice_speed_128', '.repl128', '.down128')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_128" @click="Third_speed_9('.x_third_128', '.aud128', '.choice_speed_128', '.repl128', '.down128')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_128" @click="Fourth_speed_9('.x_fourth_128', '.aud128', '.choice_speed_128', '.repl128', '.down128')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_128" @click="Fifth_speed_9('.x_fifth_128', '.aud128', '.choice_speed_128', '.repl128', '.down128')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_128" @click="Six_speed_9('.x_six_128', '.aud128', '.choice_speed_128', '.repl128', '.down128')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl128" @click="Replay9('.aud128', '.r_icon_128')" @mouseover="S9('.repl128')" @mouseout="hide_repeat9('.repl128')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_128" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down128" @click="Download9('.down128', 'Battlefield 1 - The Swindle')" @mouseout="down_hide9('.down128')">
			   	  <vue-fontawesome icon="download" class="d_icon_128" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t128">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl129', '.down129')">
			   <p class="name9">#9 Sinai Desert</p>

			   <div class="audio_pole_m9 audio_p129_m9" @click="Perek9($event, '.aud129', '.audio_p129_m9')" @mouseover="Show_time9('.Aud_t129')" @mousemove="Run_block9($event, '.audio_p129_m9', '.aud129', '.Aud_t129')" @mouseout="Time_out9('.Aud_t129')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl129', '.l_of_v129', '.repl129', '.down129')" @mouseover="Over9('.l_of_v129')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v129" @mouseover="Over9('.l_of_v129')" @mouseout="Ov9('.l_of_v129')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v129', '.aud129', '.repl129', '.down129')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v129', '.aud129', '.repl129', '.down129')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v129', '.aud129', '.repl129', '.down129')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v129', '.aud129', '.repl129', '.down129')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud129', '.aud128', '.repl129', '.r_icon_129', '.down129')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl129" @click="Play9('.pl129', '.repl129', '.down129')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud129" @timeupdate="Update9('.aud129', '.st129', '.audio_p129_m9')" src="../sound/Battlefield_1/12. Sinai Desert.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud129', '.aud130', '.repl129', '.r_icon_129', '.down129')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st129">00:00</p><p class="end_time9">/01:53</p>

			   <span id="speed_aud9" class="choice_speed_129" @click="Show_speed9('.sp_block_129')">x1</span>

			   <div class="Speed_block9 sp_block_129">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_129" @click="First_speed_9('.x_first_129', '.aud129', '.choice_speed_129', '.repl129', '.down129')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_129" @click="Second_speed_9('.x_second_129', '.aud129', '.choice_speed_129', '.repl129', '.down129')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_129" @click="Third_speed_9('.x_third_129', '.aud129', '.choice_speed_129', '.repl129', '.down129')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_129" @click="Fourth_speed_9('.x_fourth_129', '.aud129', '.choice_speed_129', '.repl129', '.down129')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_129" @click="Fifth_speed_9('.x_fifth_129', '.aud129', '.choice_speed_129', '.repl129', '.down129')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_129" @click="Six_speed_9('.x_six_129', '.aud129', '.choice_speed_129', '.repl129', '.down129')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl129" @click="Replay9('.aud129', '.r_icon_129')" @mouseover="S9('.repl129')" @mouseout="hide_repeat9('.repl129')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_129" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button9 down129" @click="Download9('.down129', 'Battlefield 1 - Sinai Desert')" @mouseout="down_hide9('.down129')">
			   	  <vue-fontawesome icon="download" class="d_icon_129" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t129">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl130', '.down130')">
			   <p class="name9 BF2 text8_mobile_10">#10 The Flight on the Pigeon</p>

			   <div class="audio_pole_m9 audio_p130_m9" @click="Perek9($event, '.aud130', '.audio_p130_m9')" @mouseover="Show_time9('.Aud_t130')" @mousemove="Run_block9($event, '.audio_p130_m9', '.aud130', '.Aud_t130')" @mouseout="Time_out9('.Aud_t130')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl130', '.l_of_v130', '.repl130', '.down130')" @mouseover="Over9('.l_of_v130')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v130" @mouseover="Over9('.l_of_v130')" @mouseout="Ov9('.l_of_v130')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v130', '.aud130', '.repl130', '.down130')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v130', '.aud130', '.repl130', '.down130')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v130', '.aud130', '.repl130', '.down130')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v130', '.aud130', '.repl130', '.down130')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud130', '.aud129', '.repl130', '.r_icon_130', '.down130')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl130" @click="Play9('.pl130', '.repl130', '.down130')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class='aud130' @timeupdate="Update9('.aud130', '.st130', '.audio_p130_m9')" src="../sound/Battlefield_1/16. The Flight of the Pigeon.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud130', '.aud131', '.repl130', '.r_icon_130', '.down130')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time9 st130">00:00</p><p class="end_time9">/01:41</p>

			   <span id="speed_aud9" class="choice_speed_130" @click="Show_speed9('.sp_block_130')">x1</span>

			   <div class="Speed_block9 sp_block_130">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_130" @click="First_speed_9('.x_first_130', '.aud130', '.choice_speed_130', '.repl130', '.down130')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_130" @click="Second_speed_9('.x_second_130', '.aud130', '.choice_speed_130', '.repl130', '.down130')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_130" @click="Third_speed_9('.x_third_130', '.aud130', '.choice_speed_130', '.repl130', '.down130')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_130" @click="Fourth_speed_9('.x_fourth_130', '.aud130', '.choice_speed_130', '.repl130', '.down130')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_130" @click="Fifth_speed_9('.x_fifth_130', '.aud130', '.choice_speed_130', '.repl130', '.down130')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_130" @click="Six_speed_9('.x_six_130', '.aud130', '.choice_speed_130', '.repl130', '.down130')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl130" @click="Replay9('.aud130', '.r_icon_130')" @mouseover="S9('.repl130')" @mouseout="hide_repeat9('.repl130')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_130" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button9 down130" @click="Download9('.down130', 'Battlefield 1 - The Flight on the Pigeon')" @mouseout="down_hide9('.down130')">
			   	  <vue-fontawesome icon="download" class="d_icon_130" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t130">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl131', '.down131')">
			   <p class="name9 BF3 text8_mobile_11">#11 Friends in High Places</p>

			   <div class="audio_pole_m9 audio_p131_m9" @click="Perek9($event, '.aud131', '.audio_p131_m9')" @mouseover="Show_time9('.Aud_t131')" @mousemove="Run_block9($event, '.audio_p131_m9', '.aud131', '.Aud_t131')" @mouseout="Time_out9('.Aud_t131')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl131', '.l_of_v131', '.repl131', '.down131')" @mouseover="Over9('.l_of_v131')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v131" @mouseover="Over9('.l_of_v131')" @mouseout="Ov9('.l_of_v131')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v131', '.aud131', '.repl131', '.down131')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v131', '.aud131', '.repl131', '.down131')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v131', '.aud131', '.repl131', '.down131')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v131', '.aud131', '.repl131', '.down131')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud131', '.aud130', '.repl131', '.r_icon_131', '.down131')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl131" @click="Play9('.pl131', '.repl131', '.down131')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud131" @timeupdate="Update9('.aud131', '.st131', '.audio_p131_m9')" src="../sound/Battlefield_1/19. Friends in High Places.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud131', '.aud132', '.repl131', '.r_icon_131', '.down131')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st131">00:00</p><p class="end_time9">/01:59</p>

			   <span id="speed_aud9" class="choice_speed_131" @click="Show_speed9('.sp_block_131')">x1</span>

			   <div class="Speed_block9 sp_block_131">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_131" @click="First_speed_9('.x_first_131', '.aud131', '.choice_speed_131', '.repl131', '.down131')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_131" @click="Second_speed_9('.x_second_131', '.aud131', '.choice_speed_131', '.repl131', '.down131')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_131" @click="Third_speed_9('.x_third_131', '.aud131', '.choice_speed_131', '.repl131', '.down131')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_131" @click="Fourth_speed_9('.x_fourth_131', '.aud131', '.choice_speed_131', '.repl131', '.down131')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_131" @click="Fifth_speed_9('.x_fifth_131', '.aud131', '.choice_speed_131', '.repl131', '.down131')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_131" @click="Six_speed_9('.x_six_131', '.aud131', '.choice_speed_131', '.repl131', '.down131')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl131" @click="Replay9('.aud131', '.r_icon_131')" @mouseover="S9('.repl131')" @mouseout="hide_repeat9('.repl131')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_131" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down131" @click="Download9('.down131', 'Battlefield 1 - Friends in High Places')" @mouseout="down_hide9('.down131')">
			   	  <vue-fontawesome icon="download" class="d_icon_131" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t131">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl132', '.down132')">
			   <p class="name9 BF4 text8_mobile_12">#12 Knights of the Sky</p>

			   <div class="audio_pole_m9 audio_p132_m9" @click="Perek9($event, '.aud132', '.audio_p132_m9')" @mouseover="Show_time9('.Aud_t132')" @mousemove="Run_block9($event, '.audio_p132_m9', '.aud132', '.Aud_t132')" @mouseout="Time_out9('.Aud_t132')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl132', '.l_of_v132', '.repl132', '.down132')" @mouseover="Over9('.l_of_v132')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v132" @mouseover="Over9('.l_of_v132')" @mouseout="Ov9('.l_of_v132')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v132', '.aud132', '.repl132', '.down132')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v132', '.aud132', '.repl132', '.down132')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v132', '.aud132', '.repl132', '.down132')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v132', '.aud132', '.repl132', '.down132')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud132', '.aud131', '.repl132', '.r_icon_132', '.down132')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl132" @click="Play9('.pl132', '.repl132', '.down132')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud132" @timeupdate="Update9('.aud132', '.st132', '.audio_p132_m9')" src="../sound/Battlefield_1/20. Knights of the Sky.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud132', '.aud133', '.repl132', '.r_icon_132', '.down132')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st132">00:00</p><p class="end_time9">/03:23</p>

			   <span id="speed_aud9" class="choice_speed_132" @click="Show_speed9('.sp_block_132')">x1</span>

			   <div class="Speed_block9 sp_block_132">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_132" @click="First_speed_9('.x_first_132', '.aud132', '.choice_speed_132', '.repl132', '.down132')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_132" @click="Second_speed_9('.x_second_132', '.aud132', '.choice_speed_132', '.repl132', '.down132')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_132" @click="Third_speed_9('.x_third_132', '.aud132', '.choice_speed_132', '.repl132', '.down132')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_132" @click="Fourth_speed_9('.x_fourth_132', '.aud132', '.choice_speed_132', '.repl132', '.down132')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_132" @click="Fifth_speed_9('.x_fifth_132', '.aud132', '.choice_speed_132', '.repl132', '.down132')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_132" @click="Six_speed_9('.x_six_132', '.aud132', '.choice_speed_132', '.repl132', '.down132')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl132" @click="Replay9('.aud132', '.r_icon_132')" @mouseover="S9('.repl132')" @mouseout="hide_repeat9('.repl132')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_132" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down132" @click="Download9('.down132', 'Battlefield 1 - Knights of the Sky')" @mouseout="down_hide9('.down132')">
			   	  <vue-fontawesome icon="download" class="d_icon_132" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t132">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl133', '.down133')">
			   <p class="name9">#13 Gallipoli</p>

			   <div class="audio_pole_m9 audio_p133_m9" @click="Perek9($event, '.aud133', '.audio_p133_m9')" @mouseover="Show_time9('.Aud_t133')" @mousemove="Run_block9($event, '.audio_p133_m9', '.aud133', '.Aud_t133')" @mouseout="Time_out9('.Aud_t133')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl133', '.l_of_v133', '.repl133', '.down133')" @mouseover="Over9('.l_of_v133')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v133" @mouseover="Over9('.l_of_v133')" @mouseout="Ov9('.l_of_v133')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v133', '.aud133', '.repl133', '.down133')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v133', '.aud133', '.repl133', '.down133')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v133', '.aud133', '.repl133', '.down133')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v133', '.aud133', '.repl133', '.down133')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud133', '.aud132', '.repl133', '.r_icon_133', '.down133')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl133" @click="Play9('.pl133', '.repl133', '.down133')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud133" @timeupdate="Update9('.aud133', '.st133', '.audio_p133_m9')" src="../sound/Battlefield_1/21. Gallipoli.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud133', '.aud134', '.repl133', '.r_icon_133', '.down133')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st133">00:00</p><p class="end_time9">/01:49</p>

			   <span id="speed_aud9" class="choice_speed_133" @click="Show_speed9('.sp_block_133')">x1</span>

			   <div class="Speed_block9 sp_block_133">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_133" @click="First_speed_9('.x_first_133', '.aud133', '.choice_speed_133', '.repl133', '.down133')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_133" @click="Second_speed_9('.x_second_133', '.aud133', '.choice_speed_133', '.repl133', '.down133')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_133" @click="Third_speed_9('.x_third_133', '.aud133', '.choice_speed_133', '.repl133', '.down133')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_133" @click="Fourth_speed_9('.x_fourth_133', '.aud133', '.choice_speed_133', '.repl133', '.down133')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_133" @click="Fifth_speed_9('.x_fifth_133', '.aud133', '.choice_speed_133', '.repl133', '.down133')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_133" @click="Six_speed_9('.x_six_133', '.aud133', '.choice_speed_133', '.repl133', '.down133')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl133" @click="Replay9('.aud133', '.r_icon_133')" @mouseover="S9('.repl133')" @mouseout="hide_repeat9('.repl133')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_133" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down133" @click="Download9('.down133', 'Battlefield 1 - Gallipoli')" @mouseout="down_hide9('.down133')">
			   	  <vue-fontawesome icon="download" class="d_icon_133" size="3" color="white"></vue-fontawesome>
			   </div>

			     <div class="Time_of_audio9 Aud_t133">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl134', '.down134')">
			   <p class="name9 BF5 text8_mobile_14">#14 Epilogue "We Will Fight"</p>

			   <div class="audio_pole_m9 audio_p134_m9" @click="Perek9($event, '.aud134', '.audio_p134_m9')" @mouseover="Show_time9('.Aud_t134')" @mousemove="Run_block9($event, '.audio_p134_m9', '.aud134', '.Aud_t134')" @mouseout="Time_out9('.Aud_t134')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl134', '.l_of_v134', '.repl134', '.down134')" @mouseover="Over9('.l_of_v134')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v134" @mouseover="Over9('.l_of_v134')" @mouseout="Ov9('.l_of_v134')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v134', '.aud134', '.repl134', '.down134')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v134', '.aud134', '.repl134', '.down134')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v134', '.aud134', '.repl134', '.down134')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v134', '.aud134', '.repl134', '.down134')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud134', '.aud133', '.repl134', '.r_icon_134', '.down134')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl134" @click="Play9('.pl134', '.repl134', '.down134')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class='aud134' @timeupdate="Update9('.aud134', '.st134', '.audio_p134_m9')" src="../sound/Battlefield_1/23. Epilogue 'We Will Fight..'.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud134', '.aud135', '.repl134', '.r_icon_134', '.down134')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st134">00:00</p><p class="end_time9">/02:13</p>

			   <span id="speed_aud9" class="choice_speed_134" @click="Show_speed9('.sp_block_134')">x1</span>

			   <div class="Speed_block9 sp_block_134">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_134" @click="First_speed_9('.x_first_134', '.aud134', '.choice_speed_134', '.repl134', '.down134')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_134" @click="Second_speed_9('.x_second_134', '.aud134', '.choice_speed_134', '.repl134', '.down134')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_134" @click="Third_speed_9('.x_third_134', '.aud134', '.choice_speed_134', '.repl134', '.down134')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_134" @click="Fourth_speed_9('.x_fourth_134', '.aud134', '.choice_speed_134', '.repl134', '.down134')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_134" @click="Fifth_speed_9('.x_fifth_134', '.aud134', '.choice_speed_134', '.repl134', '.down134')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_134" @click="Six_speed_9('.x_six_134', '.aud134', '.choice_speed_134', '.repl134', '.down134')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl134" @click="Replay9('.aud134', '.r_icon_134')" @mouseover="S9('.repl134')" @mouseout="hide_repeat9('.repl134')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_134" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down134" @click="Download9('.down134', 'Battlefield 1 - Epilogue `We will fight`')" @mouseout="down_hide9('.down134')">
			   	  <vue-fontawesome icon="download" class="d_icon_134" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio9 Aud_t134">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block9" @mouseover="show_repeat9('.repl135', '.down135')">
			   <p class="name9">#15 Libera Me</p>

			   <div class="audio_pole_m9 audio_p135_m9" @click="Perek9($event, '.aud135', '.audio_p135_m9')" @mouseover="Show_time9('.Aud_t135')" @mousemove="Run_block9($event, '.audio_p135_m9', '.aud135', '.Aud_t135')" @mouseout="Time_out9('.Aud_t135')">
				   <div class="aud_p9"></div>
			   </div>

			   <button id="vol9" @click="Vol9('.pl135', '.l_of_v135', '.repl135', '.down135')" @mouseover="Over9('.l_of_v135')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v135" @mouseover="Over9('.l_of_v135')" @mouseout="Ov9('.l_of_v135')">
			   	  <div class="FIRST_V" @click="C1_9('.l_of_v135', '.aud135', '.repl135', '.down135')"></div>
			   	  <div class="SECOND_V" @click="C2_9('.l_of_v135', '.aud135', '.repl135', '.down135')"></div>
			   	  <div class="THIRD_V" @click="C3_9('.l_of_v135', '.aud135', '.repl135', '.down135')"></div>
			   	  <div class="FOURTH_V" @click="C4_9('.l_of_v135', '.aud135', '.repl135', '.down135')"></div>
			   </div>

			   <button class="prev9" @click="Prev9('.aud135', '.aud134', '.repl135', '.r_icon_135', '.down135')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play9 pl135" @click="Play9('.pl135', '.repl135', '.down135')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud135" @timeupdate="Update9('.aud135', '.st135', '.audio_p135_m9')" src="../sound/Battlefield_1/25. Libera Me.mp3"></audio></button>
			   <button class="next9" @click="Next9('.aud135', '.aud121', '.repl135', '.r_icon_135', '.down135')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time9 st135">00:00</p><p class="end_time9">/02:32</p>

			   <span id="speed_aud9" class="choice_speed_135" @click="Show_speed9('.sp_block_135')">x1</span>

			   <div class="Speed_block9 sp_block_135">
			   	   <div class="contain9">
			   	   	  <div class="SP_25 b9 x_first_135" @click="First_speed_9('.x_first_135', '.aud135', '.choice_speed_135', '.repl135', '.down135')"><p>x.25</p></div>
			   	      <div class="SP_5 b9 x_second_135" @click="Second_speed_9('.x_second_135', '.aud135', '.choice_speed_135', '.repl135', '.down135')"><p>x.5</p></div>
			   	      <div class="SP_1 b9 x_third_135" @click="Third_speed_9('.x_third_135', '.aud135', '.choice_speed_135', '.repl135', '.down135')"><p>x1</p></div>
			   	      <div class="SP_1_25 b9 x_fourth_135" @click="Fourth_speed_9('.x_fourth_135', '.aud135', '.choice_speed_135', '.repl135', '.down135')"><p>x1.25</p></div>
			   	      <div class="SP_15 b9 x_fifth_135" @click="Fifth_speed_9('.x_fifth_135', '.aud135', '.choice_speed_135', '.repl135', '.down135')"><p>x1.5</p></div>
			   	      <div class="SP_2 b9 x_six_135" @click="Six_speed_9('.x_six_135', '.aud135', '.choice_speed_135', '.repl135', '.down135')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button9 repl135" @click="Replay9('.aud135', '.r_icon_135')" @mouseover="S9('.repl135')" @mouseout="hide_repeat9('.repl135')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_135" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button9 down135" @click="Download9('.down135', 'Battlefield 1 - Epilogue `We will fight`')" @mouseout="down_hide9('.down135')">
			   	  <vue-fontawesome icon="download" class="d_icon_135" size="3" color="white"></vue-fontawesome>
			   </div>

			     <div class="Time_of_audio9 Aud_t135">
			   	   <span id="t9">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>	
	export default {
       name: 'Battlefield_1',
       methods: {
		Play9(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_14');
            DOWN_ELEM_4.classList.add('d_first_anim9');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_13');
               DOWN_ELEM_4.classList.remove('d_first_move9');
               REPL_ELEM_4.classList.remove('Rep_14');
               DOWN_ELEM_4.classList.remove('d_first_anim9');
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

      	     REPL_ELEM_4.classList.add('Rep_14');
      	     DOWN_ELEM_4.classList.add('d_first_anim9');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_13');
               DOWN_ELEM_4.classList.remove('d_first_move9');
               REPL_ELEM_4.classList.remove('Rep_14');
               DOWN_ELEM_4.classList.remove('d_first_anim9');
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

      Vol9(el2, lvl1, Repl_elem_2, Down_elem_2) {
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

            REPL_ELEM_2.classList.add('Rep_14');
            DOWN_ELEM_2.classList.add('d_first_anim9');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_13');
               DOWN_ELEM_2.classList.remove('d_first_move9');
               REPL_ELEM_2.classList.remove('Rep_14');
               DOWN_ELEM_2.classList.remove('d_first_anim9');
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

            REPL_ELEM_2.classList.add('Rep_14');
            DOWN_ELEM_2.classList.add('d_first_anim9');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_13');
               DOWN_ELEM_2.classList.remove('d_first_move9');
               REPL_ELEM_2.classList.remove('Rep_14');
               DOWN_ELEM_2.classList.remove('d_fist_anim8');
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
      Download9(d_button, d_name) {
      	if(confirm('Вы точно хотите скачать этот файл?')) {
      	 let down_button = document.querySelector(d_button);
      	 let down_button_audio_address = down_button.parentElement.children[5].children[1].getAttribute('src');
         let link = document.createElement('a');

         link.setAttribute('href', `${down_button_audio_address}`);
         link.setAttribute('download', `${d_name}.mp3`);
         link.click();

         return true;
        }
      }, 

      Over9(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show9');
      },

      Ov9(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show9');
      },

      C1_9(el5, volm1, Repl_elem_3, Down_elem_3) {
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

          REPL_ELEM_3.classList.add('Rep_14');
          DOWN_ELEM_3.classList.add('d_first_anim9');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_13');
            DOWN_ELEM_3.classList.remove('d_first_move9');
            REPL_ELEM_3.classList.remove('Rep_14');
            DOWN_ELEM_3.classList.remove('d_first_anim9');
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

      C2_9(el6, volm2, Repl_elem_4, Down_elem_4) {
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

          REPL_ELEM_4.classList.add('Rep_14');
          DOWN_ELEM_4.classList.add('d_fist_anim9');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_13');
            DOWN_ELEM_4.classList.remove('d_first_move9');
            REPL_ELEM_4.classList.remove('Rep_14');
            DOWN_ELEM_4.classList.remove('d_first_anim9');
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

      C3_9(el7, volm3, Repl_elem_5, Down_elem_5) {
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

           REPL_ELEM_5.classList.add('Rep_14');
           DOWN_ELEM_5.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_13');
            DOWN_ELEM_5.classList.remove('d_first_move9');
            REPL_ELEM_5.classList.remove('Rep_14');
            DOWN_ELEM_5.classList.remove('d_first_anim9');
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


      C4_9(el8, volm4, Repl_elem_6, Down_elem_6) {
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

          REPL_ELEM_6.classList.add('Rep_14');
          DOWN_ELEM_6.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_13');
            DOWN_ELEM_6.classList.remove('d_first_move9');
            REPL_ELEM_6.classList.remove('Rep_14');
            DOWN_ELEM_6.classList.remove('d_first_anim9');
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

      Update9(volm5, time_b1, prog) {
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

      Prev9(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_2, DOWNLOAD_1) {
      	 let aud_1 = document.querySelector(AUDIO_1);
      	 let aud_2 = document.querySelector(AUDIO_2);
      	 let REPL_1 = document.querySelector(REPLAY_1);
      	 let REPL_icon_2 = document.querySelector(Rep_icon_2);
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

                REPL_icon_2.style.color = 'white';
            } //После того, как нажмем кнопку у первого саундтрека все режимы должны быть в false(И повторного проигрывания, и последовательного тоже)..  НУ да, если просто поставить false, но цвет не измениться 
         }, 250);

         REPL_1.classList.add('Rep_14');
         DOWN_1.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_13');
            DOWN_1.classList.remove('d_first_move9');
            REPL_1.classList.remove('Rep_14');
            DOWN_1.classList.remove('d_first_anim9');
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

      Next9(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
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

         REPL_2.classList.add('Rep_14');
         DOWN_2.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_13');
            DOWN_2.classList.remove('d_first_move9');
            REPL_2.classList.remove('Rep_14');
            DOWN_2.classList.remove('d_first_anim9');
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

      Perek9(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time9(t_block5) {
          let time_block = document.querySelector(t_block5);
      	  time_block.classList.add('T_aud_9');
      },

      Time_out9(t_block5) {
      	  let time_block = document.querySelector(t_block5);
      	  time_block.classList.remove('T_aud_9');
      },

      Run_block9(event, M_Pole, Aud2, t_block4) {
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
          
      show_repeat9(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_13');
          drep.classList.add('d_first_move9');
      },

      hide_repeat9(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_14');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_13');
             replay2.classList.remove('Rep_14');
      	  }, 1100);
      },

      down_hide9(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim9');

         setTimeout(() => {
            d2.classList.remove('d_first_move9');
            d2.classList.remove('d_first_anim9');
         }, 1100);
      },

      Replay9(AUD, Icon1) {
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

      S9(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_13');
      },

      Show_speed9(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_9');
      },

      First_speed_9(first, a, ch_one, Repl_elem_7, Down_elem_7) {
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

           REPL_ELEM_7.classList.add('Rep_14');
           DOWN_ELEM_7.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_13');
            DOWN_ELEM_7.classList.remove('d_first_move9');
            REPL_ELEM_7.classList.remove('Rep_14');
            DOWN_ELEM_7.classList.remove('d_first_anim9');
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

      Second_speed_9(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
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

           REPL_ELEM_8.classList.add('Rep_14');
           DOWN_ELEM_8.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_13');
            DOWN_ELEM_8.classList.remove('d_first_move9');
            REPL_ELEM_8.classList.remove('Rep_14');
            DOWN_ELEM_8.classList.remove('d_first_anim9');
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

      Third_speed_9(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
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

           REPL_ELEM_9.classList.add('Rep_14');
           DOWN_ELEM_9.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_13');
            DOWN_ELEM_9.classList.remove('d_first_move9');
            REPL_ELEM_9.classList.remove('Rep_14');
            DOWN_ELEM_9.classList.remove('d_first_anim9');
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

      Fourth_speed_9(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
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

           REPL_ELEM_10.classList.add('Rep_14');
           DOWN_ELEM_10.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_13');
            DOWN_ELEM_10.classList.remove('d_first_move9');
            REPL_ELEM_10.classList.remove('Rep_14');
            DOWN_ELEM_10.classList.remove('d_first_anim9');
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

      Fifth_speed_9(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
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

           REPL_ELEM_11.classList.add('Rep_14');
           DOWN_ELEM_11.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_13');
            DOWN_ELEM_11.classList.remove('d_first_move9');
            REPL_ELEM_11.classList.remove('Rep_14');
            DOWN_ELEM_11.classList.remove('d_first_anim9');
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

      Six_speed_9(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
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

           REPL_ELEM_12.classList.add('Rep_14');
           DOWN_ELEM_12.classList.add('d_first_anim9');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_13');
            DOWN_ELEM_12.classList.remove('d_first_move9');
            REPL_ELEM_12.classList.remove('Rep_14');
            DOWN_ELEM_12.classList.remove('d_first_anim9');
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

	.side_screen9 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/Battlefield_1_background.jpg");
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

    .side_screen9 span {
    	position: absolute;
    	left: 355px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block9 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block9 > .sound_block9 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block9 .sound_block9 .name9 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block9 .sound_block9 .BF1 {
    	left: 95px;
    }

    .audio_collection_block9 .sound_block9 .BF2 {
    	left: 70px;
    }

    .audio_collection_block9 .sound_block9 .BF3 {
    	left: 100px;
    }

    .audio_collection_block9 .sound_block9 .BF4 {
    	left: 130px;
    }

    .audio_collection_block9 .sound_block9 .BF5 {
    	left: 60px;
    }

    .audio_collection_block9 .sound_block9 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block9 .sound_block9 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block9 .sound_block9 .audio_pole_m9 {
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

    .audio_collection_block9 .sound_block9 .audio_pole_m9:hover {
    	opacity: .7;
    }

    .audio_collection_block9 .sound_block9 .audio_pole_m9 .aud_p9 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	margin-left: 0;
    	margin-top: 0;
    	background: yellow;
    }

    .audio_collection_block9 .sound_block9 #vol9 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9.L_show9 {
    	display: block;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 .FIRST_V {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 .SECOND_V {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 .THIRD_V {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block9 .sound_block9 .l_of_vol9 .FOURTH_V {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block9 .sound_block9 .prev9 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block9 .sound_block9 .prev9:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block9 .sound_block9 .play9 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block9 .sound_block9 .next9 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block9 .sound_block9 .next9:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block9 .sound_block9 .start_time9 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block9 .sound_block9 .end_time9 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block9 .sound_block9 .Replay_button9 {
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

    .audio_collection_block9 .sound_block9 .Replay_button9.Rep_13 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block9 .sound_block9 .Replay_button9.Rep_14 {
    	animation: spek9 1s linear;
    	transform: scale(0);
    }

    @keyframes spek9 {
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

    .audio_collection_block9 .sound_block9 .Download_button9 {
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

    .audio_collection_block9 .sound_block9 .Download_button9:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block9 .sound_block9 .Download_button9.d_first_move9 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block9 .sound_block9 .Download_button9.d_first_anim9 {
    	animation: down9 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down9 {
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

    .audio_collection_block9 .sound_block9 .Time_of_audio9 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block9 .sound_block9 .Time_of_audio9 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block9 .sound_block9 .Time_of_audio9.T_aud_9 {
    	display: block;
    }

    .audio_collection_block9 .sound_block9 #speed_aud9 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block9 .sound_block9 .Speed_block9 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block9 .sound_block9 .Speed_block9.tgl_9 {
    	display: block;
    }
    
    .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 .b9 {
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

    .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 .b9:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 .b9 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 .b9 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	 .side_screen9 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen9 span {
    		font-size: 55px;
    		left: 310px;
    	}

    	.audio_collection_block9 > .sound_block9 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block9 .sound_block9 .audio_pole_m9 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block9 .sound_block9 .audio_pole_m9 .aud_p9 {
    		height: 9.5px;
    	}

    	.audio_collection_block9 .sound_block9 #vol9 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block9 .sound_block9 .play9 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block9 .sound_block9 .prev9 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block9 .sound_block9 .next9 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block9 .sound_block9 .name9 {
    	   left: 255px;
        }

        .audio_collection_block9 .sound_block9 .Time_of_audio9 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block9 .sound_block9 .Time_of_audio9 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block9 .sound_block9 .start_time9 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block9 .sound_block9 .end_time9 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block9 .sound_block9 #speed_aud9 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block9 .sound_block9 .Speed_block9 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 .b9 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block9 .sound_block9 .Speed_block9 .contain9 .b9 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block9 .sound_block9 .Replay_button9 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block9 .sound_block9 .Download_button9 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block9 .sound_block9 .Replay_button9.sh20 {
    	    margin-left: 850px;
        }

        .audio_collection_block9 .sound_block9 .l_of_vol9 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }
        
        .audio_collection_block9 .sound_block9 .text8_mobile_1 {
        	left: 220px;
        }

        .audio_collection_block9 .sound_block9 .text8_mobile_2 {
        	left: 155px;
        } 

        .audio_collection_block9 .sound_block9 .text8_mobile_3 {
        	left: 230px;
        }

        .audio_collection_block9 .sound_block9 .text8_mobile_4 {
        	left: 190px;
        }

        .audio_collection_block9 .sound_block9 .text8_mobile_10 {
        	left: 135px;
        }

        .audio_collection_block9 .sound_block9 .text8_mobile_11 {
        	left: 155px;
        }

        .audio_collection_block9 .sound_block9 .text8_mobile_12 {
        	left: 190px;
        }

        .audio_collection_block9 .sound_block9 .text8_mobile_14 {
        	left: 140px;
        }
    } 

</style>