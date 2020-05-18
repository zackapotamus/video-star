USE videostar_db;

INSERT INTO Video (
    user_id, 
    adult, 
    backdrop_path,
    budget,
    homepage,
    poster_path,
    tmd_id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    production_companies,
    production_countries,
    release_date,
    runtime,
    spoken_languages,
    status,
    is_borrowed,
    is_lent,
    tagline,
    title,
    vote_average,
    vote_count,
    video_type,
    lend_borrow_name,
    lend_borrow_date,
    lend_borrow_due_date,
    created_at,
    updated_at)

VALUES 
(1, false, "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",28000000,"http://www.warnerbros.com/blade-runner","/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg",78,"tt0083658","en","Blade Runner","In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",30.992,null,null,"1982-06-25",118,null,"Released",false,true,"Man has made his match... now it's his problem.","Blade Runner",7.9,9036,'Digital',"Anne","2020-05-14","2020-06-14","2020-05-14","2020-05-14"),

(1, false, "/3kpx7iKPmh75exJevGLJyrj3eN.jpg",25000000,"http://thegiverfilm.com/","/ckchcez2u40myIAgkfdVyzofX2T.jpg",227156,"tt0435651","en","The Giver","In a seemingly perfect community, without war, pain, suffering, differences or choice, a young boy is chosen to learn from an elderly man about the true pain and pleasure of the \'real\' world.",12.545,null,null,"2014-08-11",94,"English","Released",true,false,"Search for truth. Find freedom.","The Giver",6.5,3473,'Blu-ray',"John","2020-05-14","2020-05-18","2020-05-14","2020-05-14"),

(1, false, "/bvbyidkMaBls1LTaIWYY6UmYTaL.jpg",34000000,"http://themazerunnermovie.com","/2zYfzA3TBwrMC8tfFbpiTLODde0.jpg",198663,"tt1790864","en","The Maze Runner","Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",42.165,null,null,"2014-09-10",113,"English","Released",true,false,"Remember. Survive. Run.","The Maze Runner",7.1,12049,'Digital',"Anne","2020-05-14","2020-05-20","2020-05-14","2020-05-14"),

(1, false, "/8iVyhmjzUbvAGppkdCZPiyEHSoF.jpg",63000000,"http://www.foxmovies.com/movies/fight-club","/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",550,"tt0137523","en","Fight Club","A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \'fight clubs\' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",20.761,null,null,"1999-10-15",139,"English","Released",false,false,"Mischief. Mayhem. Soap.","Fight Club",8.4,19151,'Digital',null,null,null,"2020-05-14","2020-05-14"),

(1, false, "/pPj1yM2PXiC56GkUYmoT3qR9zka.jpg",11000000,"http://www.starwars.com/films/star-wars-episode-iv-a-new-hope","/r8Ph5MYXL04Qzu4QBbq2KjqwtkQ.jpg",11,"tt0076759","en","Star Wars","Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",75.049,null,null,"1977-05-25",121,"English","Released",false,false,"A long time ago in a galaxy far, far away...","Star Wars",8.2,13591,'Blu-ray',null,null,null,"2020-05-14","2020-05-14"),

(1, false, "/ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",63000000,"http://www.warnerbros.com/matrix","/lh4aGpd3U9rm9B8Oqr6CUgQLtZL.jpg",603,"tt0133093","en","The Matrix","Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",42.307,null,null,"1999-03-30",136,"English","Released",false,false,"Welcome to the Real World.","The Matrix",8.1,16923,'DVD',null,null,null,"2020-05-14","2020-05-14");

SELECT * FROM Video;