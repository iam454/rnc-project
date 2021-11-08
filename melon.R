library(httr)
library(rvest)
library("openxlsx")

url = "https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=496837151"
get_url =GET(url)
my_html = read_html(get_url,encoding = 'utf -8')
song_name_p1= html_nodes(my_html,'.ellipsis.rank01')
song_name_p2 =html_nodes(song_name_p1,'a')
song_name = html_text(song_name_p2,trim =TRUE)

singer_p1 = html_nodes(my_html,'.checkEllipsis')
singer_name = html_text(singer_p1,trim =TRUE)

song_list = character()
singer_list = character()
song_list = append(song_list,song_name)
singer_list=append(singer_list,singer_name)

df = data.frame(song_list,singer_list)
write.xlsx(df, file= "sunnysong.xlsx")
rm(list=ls())
