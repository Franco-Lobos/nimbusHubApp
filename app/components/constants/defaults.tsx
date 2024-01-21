import { ForecastWeatherData } from "~/models/tomorrow/Forecast"
import { HistoryData } from "~/models/tomorrow/History"
import { RealTimeData } from "~/models/tomorrow/RealTime"
import { SessionLocation , TomorrowLocation} from "~/models/tomorrow/WeatherLocation"


export const defaultSessionLocation: SessionLocation = {
    "lat": 42.50693893432617,
    "lon": 1.5212466716766357,
    "name": "Andorra la Vella, AD500, Andorra",
    "type": "town"
}
export const defaultLocation: TomorrowLocation = {
    "lat": 42.5055,
    "lon": 1.5243
}
  
export const defaultRealTime : RealTimeData= {
    "data": {
        "time": "2024-01-21T20:08:00Z",
        "values": {
            "temperature": -0.31,
            "temperatureApparent": -0.31,
            "weatherCode": 1000
        }
    },
    "location": {
        "lat": 42.5055,
        "lon": 1.5243
    }
}

export const defaultHistory: HistoryData = {
    "timelines": {
        "hourly": [
            {
                "time": "2024-01-20T04:00:00Z",
                "values": {
                    "temperature": -8.38,
                    "temperatureApparent": -13.43,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T05:00:00Z",
                "values": {
                    "temperature": -8.63,
                    "temperatureApparent": -13.65,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T06:00:00Z",
                "values": {
                    "temperature": -9.19,
                    "temperatureApparent": -13.92,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T07:00:00Z",
                "values": {
                    "temperature": -8.5,
                    "temperatureApparent": -12.94,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T08:00:00Z",
                "values": {
                    "temperature": -8,
                    "temperatureApparent": -10.89,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T09:00:00Z",
                "values": {
                    "temperature": -3.31,
                    "temperatureApparent": -3.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T10:00:00Z",
                "values": {
                    "temperature": 1.13,
                    "temperatureApparent": 1.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T11:00:00Z",
                "values": {
                    "temperature": -0.63,
                    "temperatureApparent": -0.63,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T12:00:00Z",
                "values": {
                    "temperature": -0.31,
                    "temperatureApparent": -0.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T13:00:00Z",
                "values": {
                    "temperature": -0.5,
                    "temperatureApparent": -0.5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T14:00:00Z",
                "values": {
                    "temperature": -0.88,
                    "temperatureApparent": -0.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T15:00:00Z",
                "values": {
                    "temperature": -1.31,
                    "temperatureApparent": -1.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T16:00:00Z",
                "values": {
                    "temperature": -1.88,
                    "temperatureApparent": -1.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T17:00:00Z",
                "values": {
                    "temperature": -2.81,
                    "temperatureApparent": -2.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T18:00:00Z",
                "values": {
                    "temperature": -2.88,
                    "temperatureApparent": -2.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T19:00:00Z",
                "values": {
                    "temperature": -4.31,
                    "temperatureApparent": -4.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T20:00:00Z",
                "values": {
                    "temperature": -4.19,
                    "temperatureApparent": -4.19,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T21:00:00Z",
                "values": {
                    "temperature": -4.19,
                    "temperatureApparent": -4.19,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T22:00:00Z",
                "values": {
                    "temperature": -3.88,
                    "temperatureApparent": -3.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T23:00:00Z",
                "values": {
                    "temperature": -4,
                    "temperatureApparent": -4,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T00:00:00Z",
                "values": {
                    "temperature": -4,
                    "temperatureApparent": -4,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T01:00:00Z",
                "values": {
                    "temperature": -3.69,
                    "temperatureApparent": -3.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T02:00:00Z",
                "values": {
                    "temperature": -3.88,
                    "temperatureApparent": -3.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T03:00:00Z",
                "values": {
                    "temperature": -4.63,
                    "temperatureApparent": -4.63,
                    "weatherCode": 1000
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-19T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -5.4,
                    "temperatureApparentMax": 0,
                    "temperatureApparentMin": -13.71,
                    "temperatureAvg": -3.05,
                    "temperatureMax": 0,
                    "temperatureMin": -8.38,
                    "weatherCodeMax": 5001,
                    "weatherCodeMin": 5001
                }
            },
            {
                "time": "2024-01-20T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -3.99,
                    "temperatureApparentMax": 1.13,
                    "temperatureApparentMin": -13.92,
                    "temperatureAvg": -3.45,
                    "temperatureMax": 1.13,
                    "temperatureMin": -9.19,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            }
        ]
    },
    "location": {
        "lat": 42.5055,
        "lon": 1.5243
    }
}

export const defaultForecast : ForecastWeatherData={
    "timelines": {
        "minutely": [
            {
                "time": "2024-01-21T20:08:00Z",
                "values": {
                    "temperature": -0.31,
                    "temperatureApparent": -0.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:09:00Z",
                "values": {
                    "temperature": -0.31,
                    "temperatureApparent": -0.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:10:00Z",
                "values": {
                    "temperature": -0.3,
                    "temperatureApparent": -0.3,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:11:00Z",
                "values": {
                    "temperature": -0.3,
                    "temperatureApparent": -0.3,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:12:00Z",
                "values": {
                    "temperature": -0.3,
                    "temperatureApparent": -0.3,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:13:00Z",
                "values": {
                    "temperature": -0.29,
                    "temperatureApparent": -0.29,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:14:00Z",
                "values": {
                    "temperature": -0.29,
                    "temperatureApparent": -0.29,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:15:00Z",
                "values": {
                    "temperature": -0.28,
                    "temperatureApparent": -0.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:16:00Z",
                "values": {
                    "temperature": -0.28,
                    "temperatureApparent": -0.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:17:00Z",
                "values": {
                    "temperature": -0.27,
                    "temperatureApparent": -0.27,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:18:00Z",
                "values": {
                    "temperature": -0.27,
                    "temperatureApparent": -0.27,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:19:00Z",
                "values": {
                    "temperature": -0.27,
                    "temperatureApparent": -0.27,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:20:00Z",
                "values": {
                    "temperature": -0.26,
                    "temperatureApparent": -0.26,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:21:00Z",
                "values": {
                    "temperature": -0.26,
                    "temperatureApparent": -0.26,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:22:00Z",
                "values": {
                    "temperature": -0.25,
                    "temperatureApparent": -0.25,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:23:00Z",
                "values": {
                    "temperature": -0.25,
                    "temperatureApparent": -0.25,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:24:00Z",
                "values": {
                    "temperature": -0.24,
                    "temperatureApparent": -0.24,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:25:00Z",
                "values": {
                    "temperature": -0.24,
                    "temperatureApparent": -0.24,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:26:00Z",
                "values": {
                    "temperature": -0.24,
                    "temperatureApparent": -0.24,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:27:00Z",
                "values": {
                    "temperature": -0.23,
                    "temperatureApparent": -0.23,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:28:00Z",
                "values": {
                    "temperature": -0.23,
                    "temperatureApparent": -0.23,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:29:00Z",
                "values": {
                    "temperature": -0.22,
                    "temperatureApparent": -0.22,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:30:00Z",
                "values": {
                    "temperature": -0.22,
                    "temperatureApparent": -0.22,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:31:00Z",
                "values": {
                    "temperature": -0.21,
                    "temperatureApparent": -0.21,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:32:00Z",
                "values": {
                    "temperature": -0.21,
                    "temperatureApparent": -0.21,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:33:00Z",
                "values": {
                    "temperature": -0.21,
                    "temperatureApparent": -0.21,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:34:00Z",
                "values": {
                    "temperature": -0.2,
                    "temperatureApparent": -0.2,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:35:00Z",
                "values": {
                    "temperature": -0.2,
                    "temperatureApparent": -0.2,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:36:00Z",
                "values": {
                    "temperature": -0.19,
                    "temperatureApparent": -0.19,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:37:00Z",
                "values": {
                    "temperature": -0.19,
                    "temperatureApparent": -0.19,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:38:00Z",
                "values": {
                    "temperature": -0.18,
                    "temperatureApparent": -0.18,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:39:00Z",
                "values": {
                    "temperature": -0.18,
                    "temperatureApparent": -0.18,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:40:00Z",
                "values": {
                    "temperature": -0.18,
                    "temperatureApparent": -0.18,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:41:00Z",
                "values": {
                    "temperature": -0.17,
                    "temperatureApparent": -0.17,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:42:00Z",
                "values": {
                    "temperature": -0.17,
                    "temperatureApparent": -0.17,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:43:00Z",
                "values": {
                    "temperature": -0.16,
                    "temperatureApparent": -0.16,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:44:00Z",
                "values": {
                    "temperature": -0.16,
                    "temperatureApparent": -0.16,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:45:00Z",
                "values": {
                    "temperature": -0.15,
                    "temperatureApparent": -0.15,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:46:00Z",
                "values": {
                    "temperature": -0.15,
                    "temperatureApparent": -0.15,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:47:00Z",
                "values": {
                    "temperature": -0.15,
                    "temperatureApparent": -0.15,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:48:00Z",
                "values": {
                    "temperature": -0.14,
                    "temperatureApparent": -0.14,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:49:00Z",
                "values": {
                    "temperature": -0.14,
                    "temperatureApparent": -0.14,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:50:00Z",
                "values": {
                    "temperature": -0.13,
                    "temperatureApparent": -0.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:51:00Z",
                "values": {
                    "temperature": -0.13,
                    "temperatureApparent": -0.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:52:00Z",
                "values": {
                    "temperature": -0.12,
                    "temperatureApparent": -0.12,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:53:00Z",
                "values": {
                    "temperature": -0.12,
                    "temperatureApparent": -0.12,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:54:00Z",
                "values": {
                    "temperature": -0.12,
                    "temperatureApparent": -0.12,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:55:00Z",
                "values": {
                    "temperature": -0.11,
                    "temperatureApparent": -0.11,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:56:00Z",
                "values": {
                    "temperature": -0.11,
                    "temperatureApparent": -0.11,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:57:00Z",
                "values": {
                    "temperature": -0.1,
                    "temperatureApparent": -0.1,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:58:00Z",
                "values": {
                    "temperature": -0.1,
                    "temperatureApparent": -0.1,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:59:00Z",
                "values": {
                    "temperature": -0.09,
                    "temperatureApparent": -0.09,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:00:00Z",
                "values": {
                    "temperature": -0.09,
                    "temperatureApparent": -0.09,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:01:00Z",
                "values": {
                    "temperature": -0.08,
                    "temperatureApparent": -0.08,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:02:00Z",
                "values": {
                    "temperature": -0.08,
                    "temperatureApparent": -0.08,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:03:00Z",
                "values": {
                    "temperature": -0.07,
                    "temperatureApparent": -0.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:04:00Z",
                "values": {
                    "temperature": -0.07,
                    "temperatureApparent": -0.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:05:00Z",
                "values": {
                    "temperature": -0.06,
                    "temperatureApparent": -0.06,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:06:00Z",
                "values": {
                    "temperature": -0.06,
                    "temperatureApparent": -0.06,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:07:00Z",
                "values": {
                    "temperature": -0.05,
                    "temperatureApparent": -0.05,
                    "weatherCode": 1000
                }
            }
        ],
        "hourly": [
            {
                "time": "2024-01-21T20:00:00Z",
                "values": {
                    "temperature": -0.31,
                    "temperatureApparent": -0.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:00:00Z",
                "values": {
                    "temperature": -0.09,
                    "temperatureApparent": -0.09,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T22:00:00Z",
                "values": {
                    "temperature": 0.22,
                    "temperatureApparent": 0.22,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:00:00Z",
                "values": {
                    "temperature": 0.5,
                    "temperatureApparent": 0.5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:00:00Z",
                "values": {
                    "temperature": 0.82,
                    "temperatureApparent": 0.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T01:00:00Z",
                "values": {
                    "temperature": 0.95,
                    "temperatureApparent": 0.95,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T02:00:00Z",
                "values": {
                    "temperature": 1.29,
                    "temperatureApparent": 1.29,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-22T03:00:00Z",
                "values": {
                    "temperature": 1.69,
                    "temperatureApparent": 1.69,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-22T04:00:00Z",
                "values": {
                    "temperature": 1.64,
                    "temperatureApparent": 1.64,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperature": 2.27,
                    "temperatureApparent": 0.89,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T06:00:00Z",
                "values": {
                    "temperature": 1.6,
                    "temperatureApparent": -0.15,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T07:00:00Z",
                "values": {
                    "temperature": 1.96,
                    "temperatureApparent": 0.69,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T08:00:00Z",
                "values": {
                    "temperature": 2.89,
                    "temperatureApparent": 2.89,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-22T09:00:00Z",
                "values": {
                    "temperature": 7.63,
                    "temperatureApparent": 7.63,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T10:00:00Z",
                "values": {
                    "temperature": 8.84,
                    "temperatureApparent": 8.84,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T11:00:00Z",
                "values": {
                    "temperature": 8.92,
                    "temperatureApparent": 8.92,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T12:00:00Z",
                "values": {
                    "temperature": 8.7,
                    "temperatureApparent": 8.7,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T13:00:00Z",
                "values": {
                    "temperature": 8.91,
                    "temperatureApparent": 8.91,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T14:00:00Z",
                "values": {
                    "temperature": 9.05,
                    "temperatureApparent": 9.05,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T15:00:00Z",
                "values": {
                    "temperature": 7.07,
                    "temperatureApparent": 7.07,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T16:00:00Z",
                "values": {
                    "temperature": 5.55,
                    "temperatureApparent": 5.55,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T17:00:00Z",
                "values": {
                    "temperature": 4.44,
                    "temperatureApparent": 4.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T18:00:00Z",
                "values": {
                    "temperature": 4.17,
                    "temperatureApparent": 2.38,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T19:00:00Z",
                "values": {
                    "temperature": 3.82,
                    "temperatureApparent": 2.43,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T20:00:00Z",
                "values": {
                    "temperature": 3.6,
                    "temperatureApparent": 2.39,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T21:00:00Z",
                "values": {
                    "temperature": 3.38,
                    "temperatureApparent": 1.94,
                    "weatherCode": 2100
                }
            },
            {
                "time": "2024-01-22T22:00:00Z",
                "values": {
                    "temperature": 2.66,
                    "temperatureApparent": 1.25,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-22T23:00:00Z",
                "values": {
                    "temperature": 3.04,
                    "temperatureApparent": 1.14,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T00:00:00Z",
                "values": {
                    "temperature": 2.53,
                    "temperatureApparent": 0.72,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T01:00:00Z",
                "values": {
                    "temperature": 2.3,
                    "temperatureApparent": 0.52,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T02:00:00Z",
                "values": {
                    "temperature": 1.84,
                    "temperatureApparent": 0.42,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T03:00:00Z",
                "values": {
                    "temperature": 1.65,
                    "temperatureApparent": -0.32,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T04:00:00Z",
                "values": {
                    "temperature": 1.53,
                    "temperatureApparent": -0.47,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperature": 1.34,
                    "temperatureApparent": -1.01,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T06:00:00Z",
                "values": {
                    "temperature": 1.11,
                    "temperatureApparent": -1.68,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T07:00:00Z",
                "values": {
                    "temperature": 0.49,
                    "temperatureApparent": -2.61,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-23T08:00:00Z",
                "values": {
                    "temperature": 1.02,
                    "temperatureApparent": -1.98,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T09:00:00Z",
                "values": {
                    "temperature": 4.01,
                    "temperatureApparent": 1.71,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T10:00:00Z",
                "values": {
                    "temperature": 6.09,
                    "temperatureApparent": 6.09,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T11:00:00Z",
                "values": {
                    "temperature": 6.91,
                    "temperatureApparent": 6.91,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T12:00:00Z",
                "values": {
                    "temperature": 7.16,
                    "temperatureApparent": 7.16,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T13:00:00Z",
                "values": {
                    "temperature": 7.39,
                    "temperatureApparent": 7.39,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T14:00:00Z",
                "values": {
                    "temperature": 7.08,
                    "temperatureApparent": 7.08,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T15:00:00Z",
                "values": {
                    "temperature": 6.44,
                    "temperatureApparent": 6.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T16:00:00Z",
                "values": {
                    "temperature": 5.15,
                    "temperatureApparent": 5.15,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T17:00:00Z",
                "values": {
                    "temperature": 3.46,
                    "temperatureApparent": 1.51,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T18:00:00Z",
                "values": {
                    "temperature": 3.88,
                    "temperatureApparent": 1.68,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T19:00:00Z",
                "values": {
                    "temperature": 3.92,
                    "temperatureApparent": 1.57,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:00:00Z",
                "values": {
                    "temperature": 3.46,
                    "temperatureApparent": 1.19,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:00:00Z",
                "values": {
                    "temperature": 2.85,
                    "temperatureApparent": 0.66,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T22:00:00Z",
                "values": {
                    "temperature": 2.61,
                    "temperatureApparent": 0.47,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T23:00:00Z",
                "values": {
                    "temperature": 2.41,
                    "temperatureApparent": 0.28,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T00:00:00Z",
                "values": {
                    "temperature": 2.39,
                    "temperatureApparent": 0.25,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T01:00:00Z",
                "values": {
                    "temperature": 2.52,
                    "temperatureApparent": 0.52,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T02:00:00Z",
                "values": {
                    "temperature": 2.56,
                    "temperatureApparent": 0.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T03:00:00Z",
                "values": {
                    "temperature": 2.76,
                    "temperatureApparent": 0.96,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T04:00:00Z",
                "values": {
                    "temperature": 2.83,
                    "temperatureApparent": 1.08,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperature": 2.73,
                    "temperatureApparent": 1.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T06:00:00Z",
                "values": {
                    "temperature": 3.06,
                    "temperatureApparent": 1.41,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T07:00:00Z",
                "values": {
                    "temperature": 3.51,
                    "temperatureApparent": 2.03,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T08:00:00Z",
                "values": {
                    "temperature": 5,
                    "temperatureApparent": 5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T09:00:00Z",
                "values": {
                    "temperature": 9.56,
                    "temperatureApparent": 9.56,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T10:00:00Z",
                "values": {
                    "temperature": 12.07,
                    "temperatureApparent": 12.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T11:00:00Z",
                "values": {
                    "temperature": 12.78,
                    "temperatureApparent": 12.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T12:00:00Z",
                "values": {
                    "temperature": 13.2,
                    "temperatureApparent": 13.2,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T13:00:00Z",
                "values": {
                    "temperature": 13.47,
                    "temperatureApparent": 13.47,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T14:00:00Z",
                "values": {
                    "temperature": 13.44,
                    "temperatureApparent": 13.44,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T15:00:00Z",
                "values": {
                    "temperature": 12.78,
                    "temperatureApparent": 12.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T16:00:00Z",
                "values": {
                    "temperature": 10.77,
                    "temperatureApparent": 10.77,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T17:00:00Z",
                "values": {
                    "temperature": 7.49,
                    "temperatureApparent": 7.49,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T18:00:00Z",
                "values": {
                    "temperature": 6.06,
                    "temperatureApparent": 6.06,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T19:00:00Z",
                "values": {
                    "temperature": 5.67,
                    "temperatureApparent": 5.67,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T20:00:00Z",
                "values": {
                    "temperature": 6.19,
                    "temperatureApparent": 6.19,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T21:00:00Z",
                "values": {
                    "temperature": 6.27,
                    "temperatureApparent": 6.27,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T22:00:00Z",
                "values": {
                    "temperature": 6.09,
                    "temperatureApparent": 6.09,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T23:00:00Z",
                "values": {
                    "temperature": 6.29,
                    "temperatureApparent": 6.29,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T00:00:00Z",
                "values": {
                    "temperature": 6.54,
                    "temperatureApparent": 6.54,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T01:00:00Z",
                "values": {
                    "temperature": 6.41,
                    "temperatureApparent": 6.41,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T02:00:00Z",
                "values": {
                    "temperature": 6.28,
                    "temperatureApparent": 6.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T03:00:00Z",
                "values": {
                    "temperature": 5.9,
                    "temperatureApparent": 5.9,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T04:00:00Z",
                "values": {
                    "temperature": 5.75,
                    "temperatureApparent": 5.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T05:00:00Z",
                "values": {
                    "temperature": 5.52,
                    "temperatureApparent": 5.52,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T06:00:00Z",
                "values": {
                    "temperature": 5.42,
                    "temperatureApparent": 5.42,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T07:00:00Z",
                "values": {
                    "temperature": 5.32,
                    "temperatureApparent": 5.32,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T08:00:00Z",
                "values": {
                    "temperature": 6.07,
                    "temperatureApparent": 6.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T09:00:00Z",
                "values": {
                    "temperature": 9.07,
                    "temperatureApparent": 9.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T10:00:00Z",
                "values": {
                    "temperature": 12.11,
                    "temperatureApparent": 12.11,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T11:00:00Z",
                "values": {
                    "temperature": 13.78,
                    "temperatureApparent": 13.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T12:00:00Z",
                "values": {
                    "temperature": 14.54,
                    "temperatureApparent": 14.54,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T13:00:00Z",
                "values": {
                    "temperature": 14.71,
                    "temperatureApparent": 14.71,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T14:00:00Z",
                "values": {
                    "temperature": 14.23,
                    "temperatureApparent": 14.23,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-25T15:00:00Z",
                "values": {
                    "temperature": 12.4,
                    "temperatureApparent": 12.4,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-25T16:00:00Z",
                "values": {
                    "temperature": 9.43,
                    "temperatureApparent": 9.43,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-25T17:00:00Z",
                "values": {
                    "temperature": 6.39,
                    "temperatureApparent": 6.39,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T18:00:00Z",
                "values": {
                    "temperature": 5.66,
                    "temperatureApparent": 5.66,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T19:00:00Z",
                "values": {
                    "temperature": 5.58,
                    "temperatureApparent": 5.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T20:00:00Z",
                "values": {
                    "temperature": 5.67,
                    "temperatureApparent": 5.67,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T21:00:00Z",
                "values": {
                    "temperature": 5.88,
                    "temperatureApparent": 5.88,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T22:00:00Z",
                "values": {
                    "temperature": 5.82,
                    "temperatureApparent": 5.82,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T23:00:00Z",
                "values": {
                    "temperature": 5.75,
                    "temperatureApparent": 5.75,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T00:00:00Z",
                "values": {
                    "temperature": 5.64,
                    "temperatureApparent": 5.64,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T01:00:00Z",
                "values": {
                    "temperature": 5.44,
                    "temperatureApparent": 5.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T02:00:00Z",
                "values": {
                    "temperature": 5.31,
                    "temperatureApparent": 5.31,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T03:00:00Z",
                "values": {
                    "temperature": 4.89,
                    "temperatureApparent": 4.89,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T04:00:00Z",
                "values": {
                    "temperature": 4.65,
                    "temperatureApparent": 4.65,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperature": 4.33,
                    "temperatureApparent": 1.43,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T06:00:00Z",
                "values": {
                    "temperature": 3.99,
                    "temperatureApparent": 0.94,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T07:00:00Z",
                "values": {
                    "temperature": 3.45,
                    "temperatureApparent": 0.23,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T08:00:00Z",
                "values": {
                    "temperature": 4.02,
                    "temperatureApparent": 1.02,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T09:00:00Z",
                "values": {
                    "temperature": 6.87,
                    "temperatureApparent": 6.87,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T10:00:00Z",
                "values": {
                    "temperature": 9.42,
                    "temperatureApparent": 9.42,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T11:00:00Z",
                "values": {
                    "temperature": 10.8,
                    "temperatureApparent": 10.8,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T12:00:00Z",
                "values": {
                    "temperature": 11.52,
                    "temperatureApparent": 11.52,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T13:00:00Z",
                "values": {
                    "temperature": 11.15,
                    "temperatureApparent": 11.15,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T14:00:00Z",
                "values": {
                    "temperature": 10.79,
                    "temperatureApparent": 10.79,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T15:00:00Z",
                "values": {
                    "temperature": 10.43,
                    "temperatureApparent": 10.43,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T16:00:00Z",
                "values": {
                    "temperature": 8.17,
                    "temperatureApparent": 8.17,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T17:00:00Z",
                "values": {
                    "temperature": 5.92,
                    "temperatureApparent": 5.92,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T18:00:00Z",
                "values": {
                    "temperature": 3.66,
                    "temperatureApparent": 0.79,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T19:00:00Z",
                "values": {
                    "temperature": 3.54,
                    "temperatureApparent": 0.9,
                    "weatherCode": 1001
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -0.41,
                    "temperatureApparentMax": 4.5,
                    "temperatureApparentMin": -8.51,
                    "temperatureAvg": 0.28,
                    "temperatureMax": 4.5,
                    "temperatureMin": -5.19,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 3.69,
                    "temperatureApparentMax": 9.05,
                    "temperatureApparentMin": -0.47,
                    "temperatureAvg": 4.61,
                    "temperatureMax": 9.05,
                    "temperatureMin": 1.53,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 2.28,
                    "temperatureApparentMax": 7.39,
                    "temperatureApparentMin": -2.61,
                    "temperatureAvg": 3.85,
                    "temperatureMax": 7.39,
                    "temperatureMin": 0.49,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 7.89,
                    "temperatureApparentMax": 13.47,
                    "temperatureApparentMin": 1.41,
                    "temperatureAvg": 8.03,
                    "temperatureMax": 13.47,
                    "temperatureMin": 3.06,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-25T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 7.99,
                    "temperatureApparentMax": 14.71,
                    "temperatureApparentMin": 4.65,
                    "temperatureAvg": 7.99,
                    "temperatureMax": 14.71,
                    "temperatureMin": 4.65,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 5.81,
                    "temperatureApparentMax": 11.52,
                    "temperatureApparentMin": 0.23,
                    "temperatureAvg": 7.14,
                    "temperatureMax": 11.52,
                    "temperatureMin": 3.28,
                    "weatherCodeMax": 1100,
                    "weatherCodeMin": 1100
                }
            }
        ]
    },
    "location": {
        "lat": 42.5055,
        "lon": 1.5243
    }
}