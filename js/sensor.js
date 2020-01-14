var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1OWMzMjU0M2UyNGY4NDRlZGI5MjFhNDhjYjJlMjMzMzNhM2MwMjA3Y2FiZTQyNjdiNWNjODVlYjllNTAxZTg0YTVmNDM0YjliMTc4ZWU4In0.eyJhdWQiOiIyIiwianRpIjoiMzU5YzMyNTQzZTI0Zjg0NGVkYjkyMWE0OGNiMmUyMzMzM2EzYzAyMDdjYWJlNDI2N2I1Y2M4NWViOWU1MDFlODRhNWY0MzRiOWIxNzhlZTgiLCJpYXQiOjE1Nzg2NDI4NDgsIm5iZiI6MTU3ODY0Mjg0OCwiZXhwIjoxNjEwMjY1MjQ4LCJzdWIiOiIyMjgiLCJzY29wZXMiOltdfQ.U8T9FUwY_u_NQk-QeVS4etAkqzLoxEGXdljiGeWqS9h3qBLa4CaKF_7pWI8dktYSnDESTSRqrHDLCX9yqd1DVdpY1f55_PDY5URNy0ftk2j6XDmHKDmxK9BMPQJXtywAW4Zu69zxlD3dHF9yAJq_WehcZupQiunyEjnnQXH8fPMpbT-FkbE0ZWbcjf3yWU8n6ZZ-PlcpYikue-hT3I6Qwg6zBD1cq31s_BbNg0TcO-gaNVI8uFReMIGGxwA_ORF6nnzYQ_JTGPoH5eOomSsKLO18liD5T9LSjkhDtjVwoIOWxP7KsWO5BKw5OrUxY4I8S6QN_87jdiiYAK26SSlgRekthuCrLojRcrqy37avzXO0JJteFFBC8tR5PRJ9bIWisAg-D7H5PgBNaNfWX-F8djcDDIymymniSKjav4LF0yvczutlQZU0qKpxYbaQvdKGhJpmgWCUhTCZ313pBk6qbpdjqoAZ0q-_R5bCUtuSokwvNVpdR7M51GAXjW9FNs16G4tqqt-hSRP4HXekivsR_pHcsyolD45vylwGQH1-Vg7288jWkuxZ0YN_d-iE0HWxp9xVLDsBI3FWVs5KlbmP2j1Usw5vdf9vmmdU31R8Zv3O0IuAD8LmJaTavP0IxCux_5qHBN719aSTmaPFlLq7Wa5G5Zlw7T1wZic0gUs5f2M";
	$(document).ready(function() {
		$("#refresh").click(function() {
            // pad zero
            function leftPad(number, targetLength) {
                var output = number + '';
                while (output.length < targetLength) {
                    output = '0' + output;
                }
                return output;
            }

            // calculate hours
            function cal_hour(curr_time_obj, hr) {
                var prev = new Date(curr_time_obj.getTime() - (1000*60*60 * hr));
                var prev_year = prev.getFullYear();
                var prev_month = prev.getMonth() + 1; //months from 1-12
                var prev_day = prev.getDate();
                var prev_hour = prev.getHours();    

                if (prev_month < 10) prev_month = '0' + prev_month;
                if (prev_day < 10) prev_day = '0' + prev_day;
                if (prev_hour < 10) prev_hour = '0' + prev_hour;
                
                console.log(prev_year +'-' + prev_month + '-' + prev_day + ' ' + prev_hour + ':' + '00:00');    
                return prev_year +'-' + prev_month + '-' + prev_day + ' ' + prev_hour + ':' + '00:00';
            }

            // calculate days
            function cal_day(curr_time_obj, day) {
                var prev = new Date(curr_time_obj.getTime() - (1000*60*60*24 * day));
                var prev_year = prev.getFullYear();
                var prev_month = prev.getMonth() + 1; //months from 1-12
                var prev_day = prev.getDate();
                var prev_hour = prev.getHours();    

                if (prev_month < 10) prev_month = '0' + prev_month;
                if (prev_day < 10) prev_day = '0' + prev_day;
                if (prev_hour < 10) prev_hour = '0' + prev_hour;

                return prev_year +'-' + prev_month + '-' + prev_day + ' 00:00:00';
            }

            var curr_time_obj = new Date();
            // var data_start_obj = new Date(curr_time_obj.getTime() - (1000*60*60 * 24*8)); 
            var data_start_obj = new Date(curr_time_obj.getTime() - (1000*60*60 * 24*8)); 
            var last_week_obj = new Date(curr_time_obj.getTime() - (1000*60*60 * 24*7)); 

            // current time
            var curr_time_year = curr_time_obj.getFullYear();
            var curr_time_month = leftPad(curr_time_obj.getMonth() + 1, 2)
            var curr_time_date = leftPad(curr_time_obj.getDate(), 2)
            var curr_time_hour = leftPad(curr_time_obj.getHours(), 2) 
            var curr_time_min = leftPad(curr_time_obj.getMinutes(), 2) 
            var curr_time_sec = leftPad(curr_time_obj.getSeconds(), 2)
            var curr_time = curr_time_year + '-' + curr_time_month + '-' + curr_time_date + ' ' + curr_time_hour + ':' + curr_time_min + ':' + curr_time_sec

            // start time
            var data_start_year = data_start_obj.getFullYear();
            var data_start_month = leftPad(data_start_obj.getMonth() + 1, 2)
            var data_start_date = leftPad(data_start_obj.getDate(), 2)
            var data_start_hour = leftPad(data_start_obj.getHours(), 2) 
            var data_start_min = leftPad(data_start_obj.getMinutes(), 2) 
            var data_start_sec = leftPad(data_start_obj.getSeconds(), 2)
            var data_start = data_start_year + '-' + data_start_month + '-' + data_start_date + ' ' + data_start_hour + ':' + data_start_min + ':' + data_start_sec

            // last week
            var last_week_year = last_week_obj.getFullYear();
            var last_week_month = leftPad(last_week_obj.getMonth() + 1, 2)
            var last_week_date = leftPad(last_week_obj.getDate(), 2)
            var last_week_hour = leftPad(last_week_obj.getHours(), 2) 
            var last_week_min = leftPad(last_week_obj.getMinutes(), 2) 
            var last_week_sec = leftPad(last_week_obj.getSeconds(), 2)
            var last_week = last_week_year + '-' + last_week_month + '-' + last_week_date + ' ' + last_week_hour + ':' + last_week_min + ':' + last_week_sec

            // split time
            var curr_hour = curr_time_year + '-' + curr_time_month + '-' + curr_time_date + ' ' + curr_time_hour + ':00:00'
            var curr_date = curr_time_year + '-' + curr_time_month + '-' + curr_time_date + ' 00:00:00'
            var last_week = last_week_year + '-' + last_week_month + '-' + last_week_date + ' 00:00:00'

            // get data
            var macaddr = "?macaddr=" + "aab7e12c";
            // var macaddr = "?macaddr=" + "aa1bee86";
            var date_filter = "&date_filter=" + data_start + "+-+" + curr_time;
            console.log(data_start);
            console.log(curr_time);

            // get hour list
            var hour_list = new Array(curr_time_obj.getHours());
            for (var i = 1; i <= hour_list.length; i ++) {
                hour_list[hour_list.length-i] = cal_hour(curr_time_obj, i);
            }
            hour_list.push(curr_hour);
            
            // get day list
            var day_list = new Array(7);
            for (var i = 1; i <= day_list.length; i ++) {
                day_list[day_list.length-i] = cal_day(curr_time_obj, i);
                console.log(day_list[day_list.length-i])
            }
            day_list.push(curr_date);
        
			$.ajax({
				type: "POST",
				url: "https://campus.kits.tw/ICN_API" + macaddr + date_filter,
				dataType: "json",
				async: false,
				success: function(response) {
					var i, j, k;
                    var x, y, z, acc, time, count = 0, hour_sum_temp = 0, day_sum_temp = 0;
                    var timestamp = [], value = [];
                    var timestamp_week = [], value_week = [];
                    var hour_sum = [];
                    var day_sum = [];
                    
                    var image = document.getElementById("light");
                    var warning1 = document.getElementById("warning1");
                    var warning2 = document.getElementById("warning2");
                    var warning3 = document.getElementById("warning3");
                    

                    for (i = 0, j = 0, k = 0; i < response.length; i++) {
                        x = Math.abs(response[i]['acc_x']);
                        y = Math.abs(response[i]['acc_y']);
                        z = Math.abs(response[i]['acc_z']);
                        time = response[i]['updated_at'];
                        acc = x + y + z;
                        if (acc > 0) {
                            count ++;
                        }

                        if (response[i]['updated_at'] >= hour_list[j] && j < hour_list.length - 1) {
                            
                            if (time >= hour_list[j+1]) {
                                hour_sum.push(hour_sum_temp);
                                hour_sum_temp = 0;
                                j ++;
                            }
                            if (acc > 0) {
                                hour_sum_temp ++;
                            }
                        }
    
                        if (response[i]['updated_at'] >= day_list[k] && k < 7) {
                            
                            if (time >= day_list[k+1]) {
                                day_sum.push(day_sum_temp);
                                day_sum_temp = 0;
                                k ++;
                            }
                            if (acc > 0) {
                                day_sum_temp ++;
                            }
                        }
                    }                   

                    if(count > 80){
                        image.src = "img/red.png";
                        warning1.innerHTML = "現在車流量很大，請小心注意哦！";
                        warning2.innerHTML = "本站建議半小時後再出門道路會比較順暢。";
                        warning3.innerHTML = "如果有車證的話離開學校速度可以加快～";
                    } else if(count > 40){
                        image.src = "img/yellow.png";
                        warning1.innerHTML = "現在車流量稍大，離校車輛可能需要等一下！";
                        warning2.innerHTML = "本站建議半小時後再出門道路會比較順暢。";
                        warning3.innerHTML = "如果有車證的話離開學校速度可以加快～";
                    } else {
                        image.src = "img/green.png";
                        warning1.innerHTML = "現在道路非常順暢，離校速度超級快！";
                        warning2.innerHTML = "本站建議盡快出門以免車況變糟。";
                        warning3.innerHTML = "如果有車證的話離開學校速度可以更加快～";
                    }
                    console.log(count);

                    var acc_data = new Array(hour_sum.length + 1);
                    for (i = 0; i < acc_data.length; i++) acc_data[i] = new Array(2);
                    
                    acc_data[0][0] = 'time';
                    acc_data[0][1] = 'value';
                    for (i = 1; i < acc_data.length; i ++) {
                        acc_data[i][0] = hour_list[i-1];
                        acc_data[i][1] = hour_sum[i-1];
                    }

                    draw(acc_data, "curve_chart_hour")

                    var acc_data_day = new Array(day_sum.length + 1);
                    for (i = 0; i < acc_data_day.length; i++) acc_data_day[i] = new Array(2);
                    
                    acc_data_day[0][0] = 'time';
                    acc_data_day[0][1] = 'value';
                    for (i = 1; i < acc_data_day.length; i ++) {
                        acc_data_day[i][0] = day_list[i-1];
                        acc_data_day[i][1] = day_sum[i-1];
                    }

                    draw(acc_data_day, "curve_chart_day")
                    
                    function draw(acc_data, ID) {
                        google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(drawChart);
                        
                        function drawChart() {
                            var data = google.visualization.arrayToDataTable(acc_data);
                            
                            var options = {
                                title: 'Company Performance',
                            curveType: 'function',
                            legend: { position: 'bottom' }
                            };
                        
                            var chart = new google.visualization.ColumnChart(document.getElementById(ID));
                        
                        chart.draw(data, options);

                        }
                    
                    }

				},
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + AccessToken
				},
				error: function(jqXHR) {
					//alert("Return status: " + jqXHR.status);
					if(jqXHR.status == '200')
						alert("API calling error: macaddr or url format error!");
					else
						alert("API is sleeping !");
				}
			})
		})
    });