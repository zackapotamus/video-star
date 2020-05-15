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
    created_at,
    updated_at)

VALUES 
(1, false, "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",null,null,"/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg",null,null,"en","Blade Runner","In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",28.18,null,null,"1982-06-25",null,null,null,false,false,null,"Blade Runner",7.9,9025,'Digital',null,null,"2020-05-14","2020-05-14"),
(1, false, "/3kpx7iKPmh75exJevGLJyrj3eN.jpg",null,null,"/ckchcez2u40myIAgkfdVyzofX2T.jpg",null,null,"en","The Giver","In a seemingly perfect community, without war, pain, suffering, differences or choice, a young boy is chosen to learn from an elderly man about the true pain and pleasure of the \'real\' world.",13.516,null,null,"2014-08-11",null,null,null,false,false,null,"The Giver",6.5,3469,'Blu-Ray',null,null,"2020-05-14","2020-05-14"),
(1, false, "/cFqIyetmPceAXbDmD87ZYvz2pQ0.jpg",null,null,"/i65uV3OikQ1ymesx0lXT88T3hYY.jpg",null,null,"en","Little Big Man","Jack Crabb, looking back from extreme old age, tells of his life being raised by Indians and fighting with General Custer.",9.841,null,null,"1970-12-14",null,null,null,false,false,null,"Little Big Man",7.6,297,'DVD',null,null,"2020-05-14","2020-05-14"),
(1, false, "/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg",null,null,"/94RaS52zmsqaiAe1TG20pdbJCZr.jpg",null,null,"en","The Darkest Minds","After a disease kills 98% of America's children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.",19.193,null,null,"2018-07-25",null,null,null,false,false,null,"The Darkest Minds",6.9,1629,'Digital',null,null,"2020-05-14","2020-05-14"),
(1, false, "/bvbyidkMaBls1LTaIWYY6UmYTaL.jpg",null,null,"/2zYfzA3TBwrMC8tfFbpiTLODde0.jpg",null,null,"en","Maze Runner: The Death Cure","Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.",20.761,null,null,"2018-01-10",null,null,null,false,false,null,"Maze Runner: The Death Cure",7.0,4790,'Digital',null,null,"2020-05-14","2020-05-14");

SELECT * FROM Video;