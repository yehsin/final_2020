var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1OWMzMjU0M2UyNGY4NDRlZGI5MjFhNDhjYjJlMjMzMzNhM2MwMjA3Y2FiZTQyNjdiNWNjODVlYjllNTAxZTg0YTVmNDM0YjliMTc4ZWU4In0.eyJhdWQiOiIyIiwianRpIjoiMzU5YzMyNTQzZTI0Zjg0NGVkYjkyMWE0OGNiMmUyMzMzM2EzYzAyMDdjYWJlNDI2N2I1Y2M4NWViOWU1MDFlODRhNWY0MzRiOWIxNzhlZTgiLCJpYXQiOjE1Nzg2NDI4NDgsIm5iZiI6MTU3ODY0Mjg0OCwiZXhwIjoxNjEwMjY1MjQ4LCJzdWIiOiIyMjgiLCJzY29wZXMiOltdfQ.U8T9FUwY_u_NQk-QeVS4etAkqzLoxEGXdljiGeWqS9h3qBLa4CaKF_7pWI8dktYSnDESTSRqrHDLCX9yqd1DVdpY1f55_PDY5URNy0ftk2j6XDmHKDmxK9BMPQJXtywAW4Zu69zxlD3dHF9yAJq_WehcZupQiunyEjnnQXH8fPMpbT-FkbE0ZWbcjf3yWU8n6ZZ-PlcpYikue-hT3I6Qwg6zBD1cq31s_BbNg0TcO-gaNVI8uFReMIGGxwA_ORF6nnzYQ_JTGPoH5eOomSsKLO18liD5T9LSjkhDtjVwoIOWxP7KsWO5BKw5OrUxY4I8S6QN_87jdiiYAK26SSlgRekthuCrLojRcrqy37avzXO0JJteFFBC8tR5PRJ9bIWisAg-D7H5PgBNaNfWX-F8djcDDIymymniSKjav4LF0yvczutlQZU0qKpxYbaQvdKGhJpmgWCUhTCZ313pBk6qbpdjqoAZ0q-_R5bCUtuSokwvNVpdR7M51GAXjW9FNs16G4tqqt-hSRP4HXekivsR_pHcsyolD45vylwGQH1-Vg7288jWkuxZ0YN_d-iE0HWxp9xVLDsBI3FWVs5KlbmP2j1Usw5vdf9vmmdU31R8Zv3O0IuAD8LmJaTavP0IxCux_5qHBN719aSTmaPFlLq7Wa5G5Zlw7T1wZic0gUs5f2M";
	$(document).ready(function() {
		$("#refresh").click(function() {
            var dateObj = new Date();
            var hourago = new Date(dateObj.getTime() - (1000*60*60));
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            var seconds = dateObj.getSeconds();
            var minutes = dateObj.getMinutes();
            var hour = dateObj.getHours();

            var lmonth = hourago.getUTCMonth() + 1; //months from 1-12
            var lday = hourago.getUTCDate();
            var lyear = hourago.getUTCFullYear();
            var lhour = hourago.getHours();
            var now;
            var lh;
            
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (lhour < 10) {
                lhour = '0' + lhour;
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (lday < 10) {
                lday = '0' + lday;
            }
            if (month < 10) {
                month = '0' + month;
            }
            if (lmonth < 10) {
                lmonth = '0' + lmonth;
            }
        
            now = year +'-' + month + '-' + day + ' ' + hour + ':' + minutes +':' + seconds;
            lh = lyear +'-' + lmonth + '-' + lday + ' ' + lhour + ':' + minutes +':' + seconds;
            
            console.log(now);
            console.log(lh);
            
            var macaddr = "?macaddr=" + "aa1bee86";
			var date_filter = "&date_filter=" + lh + "+-+" + now;
			var data_array;
			$.ajax({
				type: "POST",
				url: "https://campus.kits.tw/ICN_API" + macaddr + date_filter,
				dataType: "json",
				async: false,
				success: function(response) {
					var i;
                    var x, y, z, acc, time;
                    var timestamp = [], value = [];
                    count = 0;
                    var image = document.getElementById("light");
                    
                    console.log(response.length);
                    
                    for (i = 0; i < response.length; i++) {
                        x = Math.abs(response[i]['acc_x']);
                        y = Math.abs(response[i]['acc_y']);
                        z = Math.abs(response[i]['acc_z']);
                        time = response[i]['updated_at'];
                        acc = x + y + z;
                        if (acc > 0) {
                            count ++;
                            value.push(acc);
                            timestamp.push(time);
                        }
                    }
                    if(count > 80){
                        image.src = "img/red.png";
                    } else if(count > 40){
                        image.src = "img/yellow.png";
                    } else {
                        image.src = "img/green.png";
                    }
                    console.log(count);
                    console.log(value.length);
                    console.log(timestamp.length);
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