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
        "time": "2024-01-21T23:24:00Z",
        "values": {
            "temperature": 0.63,
            "temperatureApparent": 0.63,
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
                    "temperature": -4.81,
                    "temperatureApparent": -7.02,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T04:00:00Z",
                "values": {
                    "temperature": -5.81,
                    "temperatureApparent": -8.63,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperature": -5.38,
                    "temperatureApparent": -8.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-21T06:00:00Z",
                "values": {
                    "temperature": -4.88,
                    "temperatureApparent": -8.15,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T07:00:00Z",
                "values": {
                    "temperature": -5.19,
                    "temperatureApparent": -8.51,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-21T08:00:00Z",
                "values": {
                    "temperature": -3.81,
                    "temperatureApparent": -7.09,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-21T09:00:00Z",
                "values": {
                    "temperature": -1.31,
                    "temperatureApparent": -4,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T10:00:00Z",
                "values": {
                    "temperature": 1.19,
                    "temperatureApparent": -0.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T11:00:00Z",
                "values": {
                    "temperature": 2.5,
                    "temperatureApparent": 1.08,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:00:00Z",
                "values": {
                    "temperature": 2.69,
                    "temperatureApparent": 2.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:00:00Z",
                "values": {
                    "temperature": 3,
                    "temperatureApparent": 3,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T14:00:00Z",
                "values": {
                    "temperature": 3.13,
                    "temperatureApparent": 3.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T15:00:00Z",
                "values": {
                    "temperature": 4.5,
                    "temperatureApparent": 4.5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T16:00:00Z",
                "values": {
                    "temperature": 3.5,
                    "temperatureApparent": 3.5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T17:00:00Z",
                "values": {
                    "temperature": -0.63,
                    "temperatureApparent": -0.63,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T18:00:00Z",
                "values": {
                    "temperature": -3.31,
                    "temperatureApparent": -3.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T19:00:00Z",
                "values": {
                    "temperature": -1.69,
                    "temperatureApparent": -1.69,
                    "weatherCode": 1000
                }
            },
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
                    "temperature": 0,
                    "temperatureApparent": 0,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T22:00:00Z",
                "values": {
                    "temperature": 0.31,
                    "temperatureApparent": 0.31,
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
            }
        ],
        "daily": [
            {
                "time": "2024-01-20T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -4.3,
                    "temperatureApparentMax": 1.13,
                    "temperatureApparentMin": -13.92,
                    "temperatureAvg": -3.56,
                    "temperatureMax": 1.13,
                    "temperatureMin": -9.19,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -0.87,
                    "temperatureApparentMax": 4.5,
                    "temperatureApparentMin": -8.51,
                    "temperatureAvg": 0.01,
                    "temperatureMax": 4.5,
                    "temperatureMin": -5.19,
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
                "time": "2024-01-21T23:26:00Z",
                "values": {
                    "temperature": 0.63,
                    "temperatureApparent": 0.63,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:27:00Z",
                "values": {
                    "temperature": 0.63,
                    "temperatureApparent": 0.63,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:28:00Z",
                "values": {
                    "temperature": 0.64,
                    "temperatureApparent": 0.64,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:29:00Z",
                "values": {
                    "temperature": 0.64,
                    "temperatureApparent": 0.64,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:30:00Z",
                "values": {
                    "temperature": 0.65,
                    "temperatureApparent": 0.65,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:31:00Z",
                "values": {
                    "temperature": 0.65,
                    "temperatureApparent": 0.65,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:32:00Z",
                "values": {
                    "temperature": 0.66,
                    "temperatureApparent": 0.66,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:33:00Z",
                "values": {
                    "temperature": 0.67,
                    "temperatureApparent": 0.67,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:34:00Z",
                "values": {
                    "temperature": 0.67,
                    "temperatureApparent": 0.67,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:35:00Z",
                "values": {
                    "temperature": 0.68,
                    "temperatureApparent": 0.68,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:36:00Z",
                "values": {
                    "temperature": 0.68,
                    "temperatureApparent": 0.68,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:37:00Z",
                "values": {
                    "temperature": 0.69,
                    "temperatureApparent": 0.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:38:00Z",
                "values": {
                    "temperature": 0.7,
                    "temperatureApparent": 0.7,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:39:00Z",
                "values": {
                    "temperature": 0.7,
                    "temperatureApparent": 0.7,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:40:00Z",
                "values": {
                    "temperature": 0.71,
                    "temperatureApparent": 0.71,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:41:00Z",
                "values": {
                    "temperature": 0.71,
                    "temperatureApparent": 0.71,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:42:00Z",
                "values": {
                    "temperature": 0.72,
                    "temperatureApparent": 0.72,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:43:00Z",
                "values": {
                    "temperature": 0.72,
                    "temperatureApparent": 0.72,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:44:00Z",
                "values": {
                    "temperature": 0.73,
                    "temperatureApparent": 0.73,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:45:00Z",
                "values": {
                    "temperature": 0.74,
                    "temperatureApparent": 0.74,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:46:00Z",
                "values": {
                    "temperature": 0.74,
                    "temperatureApparent": 0.74,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:47:00Z",
                "values": {
                    "temperature": 0.75,
                    "temperatureApparent": 0.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:48:00Z",
                "values": {
                    "temperature": 0.75,
                    "temperatureApparent": 0.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:49:00Z",
                "values": {
                    "temperature": 0.76,
                    "temperatureApparent": 0.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:50:00Z",
                "values": {
                    "temperature": 0.77,
                    "temperatureApparent": 0.77,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:51:00Z",
                "values": {
                    "temperature": 0.77,
                    "temperatureApparent": 0.77,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:52:00Z",
                "values": {
                    "temperature": 0.78,
                    "temperatureApparent": 0.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:53:00Z",
                "values": {
                    "temperature": 0.78,
                    "temperatureApparent": 0.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:54:00Z",
                "values": {
                    "temperature": 0.79,
                    "temperatureApparent": 0.79,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:55:00Z",
                "values": {
                    "temperature": 0.79,
                    "temperatureApparent": 0.79,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:56:00Z",
                "values": {
                    "temperature": 0.8,
                    "temperatureApparent": 0.8,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:57:00Z",
                "values": {
                    "temperature": 0.81,
                    "temperatureApparent": 0.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:58:00Z",
                "values": {
                    "temperature": 0.81,
                    "temperatureApparent": 0.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:59:00Z",
                "values": {
                    "temperature": 0.82,
                    "temperatureApparent": 0.82,
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
                "time": "2024-01-22T00:01:00Z",
                "values": {
                    "temperature": 0.83,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:02:00Z",
                "values": {
                    "temperature": 0.83,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:03:00Z",
                "values": {
                    "temperature": 0.83,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:04:00Z",
                "values": {
                    "temperature": 0.83,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:05:00Z",
                "values": {
                    "temperature": 0.83,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:06:00Z",
                "values": {
                    "temperature": 0.84,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:07:00Z",
                "values": {
                    "temperature": 0.84,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:08:00Z",
                "values": {
                    "temperature": 0.84,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:09:00Z",
                "values": {
                    "temperature": 0.84,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:10:00Z",
                "values": {
                    "temperature": 0.85,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:11:00Z",
                "values": {
                    "temperature": 0.85,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:12:00Z",
                "values": {
                    "temperature": 0.85,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:13:00Z",
                "values": {
                    "temperature": 0.85,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:14:00Z",
                "values": {
                    "temperature": 0.85,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:15:00Z",
                "values": {
                    "temperature": 0.86,
                    "temperatureApparent": 0.86,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:16:00Z",
                "values": {
                    "temperature": 0.86,
                    "temperatureApparent": 0.86,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:17:00Z",
                "values": {
                    "temperature": 0.86,
                    "temperatureApparent": 0.86,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:18:00Z",
                "values": {
                    "temperature": 0.86,
                    "temperatureApparent": 0.86,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:19:00Z",
                "values": {
                    "temperature": 0.86,
                    "temperatureApparent": 0.86,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:20:00Z",
                "values": {
                    "temperature": 0.87,
                    "temperatureApparent": 0.87,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:21:00Z",
                "values": {
                    "temperature": 0.87,
                    "temperatureApparent": 0.87,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:22:00Z",
                "values": {
                    "temperature": 0.87,
                    "temperatureApparent": 0.87,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:23:00Z",
                "values": {
                    "temperature": 0.87,
                    "temperatureApparent": 0.87,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:24:00Z",
                "values": {
                    "temperature": 0.88,
                    "temperatureApparent": 0.88,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:25:00Z",
                "values": {
                    "temperature": 0.88,
                    "temperatureApparent": 0.88,
                    "weatherCode": 1100
                }
            }
        ],
        "hourly": [
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
                    "temperature": 13.87,
                    "temperatureApparent": 13.87,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T14:00:00Z",
                "values": {
                    "temperature": 13.63,
                    "temperatureApparent": 13.63,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T15:00:00Z",
                "values": {
                    "temperature": 12.02,
                    "temperatureApparent": 12.02,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T16:00:00Z",
                "values": {
                    "temperature": 9.18,
                    "temperatureApparent": 9.18,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T17:00:00Z",
                "values": {
                    "temperature": 6.58,
                    "temperatureApparent": 6.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T18:00:00Z",
                "values": {
                    "temperature": 6.36,
                    "temperatureApparent": 6.36,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T19:00:00Z",
                "values": {
                    "temperature": 6.59,
                    "temperatureApparent": 6.59,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T20:00:00Z",
                "values": {
                    "temperature": 6.64,
                    "temperatureApparent": 6.64,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T21:00:00Z",
                "values": {
                    "temperature": 6.39,
                    "temperatureApparent": 6.39,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T22:00:00Z",
                "values": {
                    "temperature": 6.25,
                    "temperatureApparent": 6.25,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T23:00:00Z",
                "values": {
                    "temperature": 6.44,
                    "temperatureApparent": 6.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T00:00:00Z",
                "values": {
                    "temperature": 6.32,
                    "temperatureApparent": 6.32,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T01:00:00Z",
                "values": {
                    "temperature": 6,
                    "temperatureApparent": 6,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T02:00:00Z",
                "values": {
                    "temperature": 5.72,
                    "temperatureApparent": 5.72,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T03:00:00Z",
                "values": {
                    "temperature": 5.41,
                    "temperatureApparent": 5.41,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T04:00:00Z",
                "values": {
                    "temperature": 5.16,
                    "temperatureApparent": 5.16,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperature": 4.76,
                    "temperatureApparent": 4.76,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T06:00:00Z",
                "values": {
                    "temperature": 4.05,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T07:00:00Z",
                "values": {
                    "temperature": 4.15,
                    "temperatureApparent": 1,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T08:00:00Z",
                "values": {
                    "temperature": 4.87,
                    "temperatureApparent": 4.87,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T09:00:00Z",
                "values": {
                    "temperature": 6.58,
                    "temperatureApparent": 6.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T10:00:00Z",
                "values": {
                    "temperature": 8.59,
                    "temperatureApparent": 8.59,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T11:00:00Z",
                "values": {
                    "temperature": 10.1,
                    "temperatureApparent": 10.1,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T12:00:00Z",
                "values": {
                    "temperature": 10.79,
                    "temperatureApparent": 10.79,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T13:00:00Z",
                "values": {
                    "temperature": 10.74,
                    "temperatureApparent": 10.74,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T14:00:00Z",
                "values": {
                    "temperature": 10.15,
                    "temperatureApparent": 10.15,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T15:00:00Z",
                "values": {
                    "temperature": 9.19,
                    "temperatureApparent": 9.19,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T16:00:00Z",
                "values": {
                    "temperature": 7.03,
                    "temperatureApparent": 7.03,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T17:00:00Z",
                "values": {
                    "temperature": 3.66,
                    "temperatureApparent": 0.53,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T18:00:00Z",
                "values": {
                    "temperature": 2.88,
                    "temperatureApparent": -0.4,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T19:00:00Z",
                "values": {
                    "temperature": 2.77,
                    "temperatureApparent": -0.37,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T20:00:00Z",
                "values": {
                    "temperature": 2.66,
                    "temperatureApparent": -0.33,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T21:00:00Z",
                "values": {
                    "temperature": 2.55,
                    "temperatureApparent": -0.27,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T22:00:00Z",
                "values": {
                    "temperature": 2.61,
                    "temperatureApparent": 0.08,
                    "weatherCode": 1100
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -0.4,
                    "temperatureApparentMax": 4.5,
                    "temperatureApparentMin": -8.51,
                    "temperatureAvg": 0.29,
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
                    "temperatureApparentAvg": 8.21,
                    "temperatureApparentMax": 14.54,
                    "temperatureApparentMin": 5.16,
                    "temperatureAvg": 8.21,
                    "temperatureMax": 14.54,
                    "temperatureMin": 5.16,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 4.43,
                    "temperatureApparentMax": 10.79,
                    "temperatureApparentMin": -0.4,
                    "temperatureAvg": 5.89,
                    "temperatureMax": 10.79,
                    "temperatureMin": 2.55,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            }
        ]
    },
    "location": {
        "lat": 42.5055,
        "lon": 1.5243
    }
}