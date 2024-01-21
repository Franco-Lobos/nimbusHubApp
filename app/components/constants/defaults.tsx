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
        "time": "2024-01-21T03:04:00Z",
        "values": {
            "temperature": -4.63,
            "temperatureApparent": -4.63,
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
                "time": "2024-01-21T12:06:00Z",
                "values": {
                    "temperature": 2.69,
                    "temperatureApparent": 2.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:07:00Z",
                "values": {
                    "temperature": 2.69,
                    "temperatureApparent": 2.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:08:00Z",
                "values": {
                    "temperature": 2.7,
                    "temperatureApparent": 2.7,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:09:00Z",
                "values": {
                    "temperature": 2.7,
                    "temperatureApparent": 2.7,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:10:00Z",
                "values": {
                    "temperature": 2.71,
                    "temperatureApparent": 2.71,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:11:00Z",
                "values": {
                    "temperature": 2.71,
                    "temperatureApparent": 2.71,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:12:00Z",
                "values": {
                    "temperature": 2.72,
                    "temperatureApparent": 2.72,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:13:00Z",
                "values": {
                    "temperature": 2.72,
                    "temperatureApparent": 2.72,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:14:00Z",
                "values": {
                    "temperature": 2.73,
                    "temperatureApparent": 2.73,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:15:00Z",
                "values": {
                    "temperature": 2.73,
                    "temperatureApparent": 2.73,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:16:00Z",
                "values": {
                    "temperature": 2.74,
                    "temperatureApparent": 2.74,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:17:00Z",
                "values": {
                    "temperature": 2.74,
                    "temperatureApparent": 2.74,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:18:00Z",
                "values": {
                    "temperature": 2.75,
                    "temperatureApparent": 2.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:19:00Z",
                "values": {
                    "temperature": 2.75,
                    "temperatureApparent": 2.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:20:00Z",
                "values": {
                    "temperature": 2.75,
                    "temperatureApparent": 2.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:21:00Z",
                "values": {
                    "temperature": 2.76,
                    "temperatureApparent": 2.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:22:00Z",
                "values": {
                    "temperature": 2.76,
                    "temperatureApparent": 2.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:23:00Z",
                "values": {
                    "temperature": 2.77,
                    "temperatureApparent": 2.77,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:24:00Z",
                "values": {
                    "temperature": 2.77,
                    "temperatureApparent": 2.77,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:25:00Z",
                "values": {
                    "temperature": 2.78,
                    "temperatureApparent": 2.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:26:00Z",
                "values": {
                    "temperature": 2.78,
                    "temperatureApparent": 2.78,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:27:00Z",
                "values": {
                    "temperature": 2.79,
                    "temperatureApparent": 2.79,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:28:00Z",
                "values": {
                    "temperature": 2.79,
                    "temperatureApparent": 2.79,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:29:00Z",
                "values": {
                    "temperature": 2.8,
                    "temperatureApparent": 2.8,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:30:00Z",
                "values": {
                    "temperature": 2.8,
                    "temperatureApparent": 2.8,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:31:00Z",
                "values": {
                    "temperature": 2.81,
                    "temperatureApparent": 2.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:32:00Z",
                "values": {
                    "temperature": 2.81,
                    "temperatureApparent": 2.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:33:00Z",
                "values": {
                    "temperature": 2.82,
                    "temperatureApparent": 2.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:34:00Z",
                "values": {
                    "temperature": 2.82,
                    "temperatureApparent": 2.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:35:00Z",
                "values": {
                    "temperature": 2.83,
                    "temperatureApparent": 2.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:36:00Z",
                "values": {
                    "temperature": 2.83,
                    "temperatureApparent": 2.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:37:00Z",
                "values": {
                    "temperature": 2.84,
                    "temperatureApparent": 2.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:38:00Z",
                "values": {
                    "temperature": 2.84,
                    "temperatureApparent": 2.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:39:00Z",
                "values": {
                    "temperature": 2.85,
                    "temperatureApparent": 2.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:40:00Z",
                "values": {
                    "temperature": 2.85,
                    "temperatureApparent": 2.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:41:00Z",
                "values": {
                    "temperature": 2.86,
                    "temperatureApparent": 2.86,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:42:00Z",
                "values": {
                    "temperature": 2.86,
                    "temperatureApparent": 2.86,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:43:00Z",
                "values": {
                    "temperature": 2.87,
                    "temperatureApparent": 2.87,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:44:00Z",
                "values": {
                    "temperature": 2.87,
                    "temperatureApparent": 2.87,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:45:00Z",
                "values": {
                    "temperature": 2.87,
                    "temperatureApparent": 2.87,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:46:00Z",
                "values": {
                    "temperature": 2.88,
                    "temperatureApparent": 2.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:47:00Z",
                "values": {
                    "temperature": 2.88,
                    "temperatureApparent": 2.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:48:00Z",
                "values": {
                    "temperature": 2.89,
                    "temperatureApparent": 2.89,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:49:00Z",
                "values": {
                    "temperature": 2.89,
                    "temperatureApparent": 2.89,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:50:00Z",
                "values": {
                    "temperature": 2.9,
                    "temperatureApparent": 2.9,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:51:00Z",
                "values": {
                    "temperature": 2.9,
                    "temperatureApparent": 2.9,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:52:00Z",
                "values": {
                    "temperature": 2.91,
                    "temperatureApparent": 2.91,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:53:00Z",
                "values": {
                    "temperature": 2.91,
                    "temperatureApparent": 2.91,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:54:00Z",
                "values": {
                    "temperature": 2.92,
                    "temperatureApparent": 2.92,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:55:00Z",
                "values": {
                    "temperature": 2.92,
                    "temperatureApparent": 2.92,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:56:00Z",
                "values": {
                    "temperature": 2.93,
                    "temperatureApparent": 2.93,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:57:00Z",
                "values": {
                    "temperature": 2.93,
                    "temperatureApparent": 2.93,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:58:00Z",
                "values": {
                    "temperature": 2.94,
                    "temperatureApparent": 2.94,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:59:00Z",
                "values": {
                    "temperature": 2.94,
                    "temperatureApparent": 1.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:00:00Z",
                "values": {
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:01:00Z",
                "values": {
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:02:00Z",
                "values": {
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:03:00Z",
                "values": {
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:04:00Z",
                "values": {
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:05:00Z",
                "values": {
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            }
        ],
        "hourly": [
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
                    "temperature": 2.95,
                    "temperatureApparent": 1.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T14:00:00Z",
                "values": {
                    "temperature": 3.05,
                    "temperatureApparent": 1.9,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T15:00:00Z",
                "values": {
                    "temperature": 4.44,
                    "temperatureApparent": 4.44,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T16:00:00Z",
                "values": {
                    "temperature": 3.45,
                    "temperatureApparent": 3.45,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T17:00:00Z",
                "values": {
                    "temperature": -0.69,
                    "temperatureApparent": -0.69,
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
                    "temperature": -2.99,
                    "temperatureApparent": -2.99,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T20:00:00Z",
                "values": {
                    "temperature": -2.81,
                    "temperatureApparent": -2.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T21:00:00Z",
                "values": {
                    "temperature": -1.79,
                    "temperatureApparent": -1.79,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T22:00:00Z",
                "values": {
                    "temperature": -0.28,
                    "temperatureApparent": -0.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:00:00Z",
                "values": {
                    "temperature": 1.56,
                    "temperatureApparent": 1.56,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T00:00:00Z",
                "values": {
                    "temperature": 1.27,
                    "temperatureApparent": 1.27,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T01:00:00Z",
                "values": {
                    "temperature": 0.65,
                    "temperatureApparent": 0.65,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T02:00:00Z",
                "values": {
                    "temperature": 0.72,
                    "temperatureApparent": 0.72,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T03:00:00Z",
                "values": {
                    "temperature": 1.03,
                    "temperatureApparent": 1.03,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T04:00:00Z",
                "values": {
                    "temperature": 1.4,
                    "temperatureApparent": -0.18,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperature": 2.48,
                    "temperatureApparent": 0.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T06:00:00Z",
                "values": {
                    "temperature": 1.74,
                    "temperatureApparent": 0.4,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T07:00:00Z",
                "values": {
                    "temperature": 2.96,
                    "temperatureApparent": 2.96,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T08:00:00Z",
                "values": {
                    "temperature": 6.61,
                    "temperatureApparent": 6.61,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T09:00:00Z",
                "values": {
                    "temperature": 8.32,
                    "temperatureApparent": 8.32,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T10:00:00Z",
                "values": {
                    "temperature": 8.84,
                    "temperatureApparent": 8.84,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-22T11:00:00Z",
                "values": {
                    "temperature": 9.08,
                    "temperatureApparent": 9.08,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T12:00:00Z",
                "values": {
                    "temperature": 9.47,
                    "temperatureApparent": 9.47,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T13:00:00Z",
                "values": {
                    "temperature": 9.97,
                    "temperatureApparent": 9.97,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T14:00:00Z",
                "values": {
                    "temperature": 9.06,
                    "temperatureApparent": 9.06,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T15:00:00Z",
                "values": {
                    "temperature": 8.28,
                    "temperatureApparent": 8.28,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T16:00:00Z",
                "values": {
                    "temperature": 5.38,
                    "temperatureApparent": 5.38,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T17:00:00Z",
                "values": {
                    "temperature": 2.96,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T18:00:00Z",
                "values": {
                    "temperature": 3.8,
                    "temperatureApparent": 2.36,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T19:00:00Z",
                "values": {
                    "temperature": 3.36,
                    "temperatureApparent": 1.43,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T20:00:00Z",
                "values": {
                    "temperature": 3.12,
                    "temperatureApparent": 1.13,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T21:00:00Z",
                "values": {
                    "temperature": 3.24,
                    "temperatureApparent": 0.87,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T22:00:00Z",
                "values": {
                    "temperature": 2.77,
                    "temperatureApparent": 0.3,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T23:00:00Z",
                "values": {
                    "temperature": 2.74,
                    "temperatureApparent": 0.22,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T00:00:00Z",
                "values": {
                    "temperature": 2.45,
                    "temperatureApparent": 0.24,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T01:00:00Z",
                "values": {
                    "temperature": 2.29,
                    "temperatureApparent": -0.01,
                    "weatherCode": 2100
                }
            },
            {
                "time": "2024-01-23T02:00:00Z",
                "values": {
                    "temperature": 1.75,
                    "temperatureApparent": -1.09,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T03:00:00Z",
                "values": {
                    "temperature": 1.29,
                    "temperatureApparent": -1.44,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T04:00:00Z",
                "values": {
                    "temperature": 0.58,
                    "temperatureApparent": -2.26,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperature": 0.24,
                    "temperatureApparent": -2.92,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T06:00:00Z",
                "values": {
                    "temperature": -0.01,
                    "temperatureApparent": -3.46,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T07:00:00Z",
                "values": {
                    "temperature": 0.03,
                    "temperatureApparent": -3.52,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T08:00:00Z",
                "values": {
                    "temperature": 0.75,
                    "temperatureApparent": -2.74,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T09:00:00Z",
                "values": {
                    "temperature": 3.52,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T10:00:00Z",
                "values": {
                    "temperature": 6.1,
                    "temperatureApparent": 6.1,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T11:00:00Z",
                "values": {
                    "temperature": 7.07,
                    "temperatureApparent": 7.07,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T12:00:00Z",
                "values": {
                    "temperature": 7.38,
                    "temperatureApparent": 7.38,
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
                    "temperature": 7.15,
                    "temperatureApparent": 7.15,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T15:00:00Z",
                "values": {
                    "temperature": 6.39,
                    "temperatureApparent": 6.39,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T16:00:00Z",
                "values": {
                    "temperature": 5.2,
                    "temperatureApparent": 5.2,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T17:00:00Z",
                "values": {
                    "temperature": 4.03,
                    "temperatureApparent": 1.76,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T18:00:00Z",
                "values": {
                    "temperature": 3.77,
                    "temperatureApparent": 1.24,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T19:00:00Z",
                "values": {
                    "temperature": 3.35,
                    "temperatureApparent": 0.74,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:00:00Z",
                "values": {
                    "temperature": 2.91,
                    "temperatureApparent": 0.53,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:00:00Z",
                "values": {
                    "temperature": 2.65,
                    "temperatureApparent": 0.6,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T22:00:00Z",
                "values": {
                    "temperature": 2.78,
                    "temperatureApparent": 0.98,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T23:00:00Z",
                "values": {
                    "temperature": 3.1,
                    "temperatureApparent": 1.52,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T00:00:00Z",
                "values": {
                    "temperature": 2.7,
                    "temperatureApparent": 1.08,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T01:00:00Z",
                "values": {
                    "temperature": 2.86,
                    "temperatureApparent": 1.41,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T02:00:00Z",
                "values": {
                    "temperature": 2.69,
                    "temperatureApparent": 1.18,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T03:00:00Z",
                "values": {
                    "temperature": 2.52,
                    "temperatureApparent": 0.53,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T04:00:00Z",
                "values": {
                    "temperature": 2.52,
                    "temperatureApparent": 0.46,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperature": 2.45,
                    "temperatureApparent": 0.43,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T06:00:00Z",
                "values": {
                    "temperature": 2.78,
                    "temperatureApparent": 0.96,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T07:00:00Z",
                "values": {
                    "temperature": 2.97,
                    "temperatureApparent": 1.36,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T08:00:00Z",
                "values": {
                    "temperature": 4.21,
                    "temperatureApparent": 2.71,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T09:00:00Z",
                "values": {
                    "temperature": 7.87,
                    "temperatureApparent": 7.87,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T10:00:00Z",
                "values": {
                    "temperature": 11.9,
                    "temperatureApparent": 11.9,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T11:00:00Z",
                "values": {
                    "temperature": 12.95,
                    "temperatureApparent": 12.95,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T12:00:00Z",
                "values": {
                    "temperature": 13.49,
                    "temperatureApparent": 13.49,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T13:00:00Z",
                "values": {
                    "temperature": 13.72,
                    "temperatureApparent": 13.72,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T14:00:00Z",
                "values": {
                    "temperature": 13.58,
                    "temperatureApparent": 13.58,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T15:00:00Z",
                "values": {
                    "temperature": 12.78,
                    "temperatureApparent": 12.78,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T16:00:00Z",
                "values": {
                    "temperature": 10.35,
                    "temperatureApparent": 10.35,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T17:00:00Z",
                "values": {
                    "temperature": 7.07,
                    "temperatureApparent": 7.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T18:00:00Z",
                "values": {
                    "temperature": 6.29,
                    "temperatureApparent": 6.29,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T19:00:00Z",
                "values": {
                    "temperature": 6.16,
                    "temperatureApparent": 6.16,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T20:00:00Z",
                "values": {
                    "temperature": 6.01,
                    "temperatureApparent": 6.01,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T21:00:00Z",
                "values": {
                    "temperature": 5.82,
                    "temperatureApparent": 5.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T22:00:00Z",
                "values": {
                    "temperature": 5.69,
                    "temperatureApparent": 5.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T23:00:00Z",
                "values": {
                    "temperature": 5.62,
                    "temperatureApparent": 5.62,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T00:00:00Z",
                "values": {
                    "temperature": 5.52,
                    "temperatureApparent": 5.52,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T01:00:00Z",
                "values": {
                    "temperature": 5.45,
                    "temperatureApparent": 5.45,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T02:00:00Z",
                "values": {
                    "temperature": 5.45,
                    "temperatureApparent": 5.45,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T03:00:00Z",
                "values": {
                    "temperature": 5.45,
                    "temperatureApparent": 5.45,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T04:00:00Z",
                "values": {
                    "temperature": 5.44,
                    "temperatureApparent": 5.44,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T05:00:00Z",
                "values": {
                    "temperature": 5.44,
                    "temperatureApparent": 5.44,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T06:00:00Z",
                "values": {
                    "temperature": 5.34,
                    "temperatureApparent": 5.34,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T07:00:00Z",
                "values": {
                    "temperature": 5.35,
                    "temperatureApparent": 5.35,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T08:00:00Z",
                "values": {
                    "temperature": 6.03,
                    "temperatureApparent": 6.03,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T09:00:00Z",
                "values": {
                    "temperature": 9.01,
                    "temperatureApparent": 9.01,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T10:00:00Z",
                "values": {
                    "temperature": 12.07,
                    "temperatureApparent": 12.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T11:00:00Z",
                "values": {
                    "temperature": 13.72,
                    "temperatureApparent": 13.72,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T12:00:00Z",
                "values": {
                    "temperature": 14.49,
                    "temperatureApparent": 14.49,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T13:00:00Z",
                "values": {
                    "temperature": 14.63,
                    "temperatureApparent": 14.63,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T14:00:00Z",
                "values": {
                    "temperature": 14.03,
                    "temperatureApparent": 14.03,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-25T15:00:00Z",
                "values": {
                    "temperature": 12.8,
                    "temperatureApparent": 12.8,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-25T16:00:00Z",
                "values": {
                    "temperature": 9.51,
                    "temperatureApparent": 9.51,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-25T17:00:00Z",
                "values": {
                    "temperature": 6.55,
                    "temperatureApparent": 6.55,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T18:00:00Z",
                "values": {
                    "temperature": 6.08,
                    "temperatureApparent": 6.08,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T19:00:00Z",
                "values": {
                    "temperature": 6.22,
                    "temperatureApparent": 6.22,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T20:00:00Z",
                "values": {
                    "temperature": 6.17,
                    "temperatureApparent": 6.17,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T21:00:00Z",
                "values": {
                    "temperature": 6.03,
                    "temperatureApparent": 6.03,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T22:00:00Z",
                "values": {
                    "temperature": 5.88,
                    "temperatureApparent": 5.88,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T23:00:00Z",
                "values": {
                    "temperature": 5.51,
                    "temperatureApparent": 5.51,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T00:00:00Z",
                "values": {
                    "temperature": 5.31,
                    "temperatureApparent": 5.31,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T01:00:00Z",
                "values": {
                    "temperature": 5.09,
                    "temperatureApparent": 5.09,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T02:00:00Z",
                "values": {
                    "temperature": 4.71,
                    "temperatureApparent": 4.71,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T03:00:00Z",
                "values": {
                    "temperature": 4.41,
                    "temperatureApparent": 1.67,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T04:00:00Z",
                "values": {
                    "temperature": 4.16,
                    "temperatureApparent": 1.26,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperature": 4.03,
                    "temperatureApparent": 1.04,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T06:00:00Z",
                "values": {
                    "temperature": 3.83,
                    "temperatureApparent": 0.7,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T07:00:00Z",
                "values": {
                    "temperature": 4.82,
                    "temperatureApparent": 4.82,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T08:00:00Z",
                "values": {
                    "temperature": 5.81,
                    "temperatureApparent": 5.81,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T09:00:00Z",
                "values": {
                    "temperature": 6.8,
                    "temperatureApparent": 6.8,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T10:00:00Z",
                "values": {
                    "temperature": 8.32,
                    "temperatureApparent": 8.32,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-26T11:00:00Z",
                "values": {
                    "temperature": 9.84,
                    "temperatureApparent": 9.84,
                    "weatherCode": 1001
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -0.86,
                    "temperatureApparentMax": 4.44,
                    "temperatureApparentMin": -8.51,
                    "temperatureAvg": -0.01,
                    "temperatureMax": 4.44,
                    "temperatureMin": -5.19,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 3.52,
                    "temperatureApparentMax": 9.97,
                    "temperatureApparentMin": -2.26,
                    "temperatureAvg": 4.79,
                    "temperatureMax": 9.97,
                    "temperatureMin": 0.58,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 2.17,
                    "temperatureApparentMax": 7.39,
                    "temperatureApparentMin": -3.52,
                    "temperatureAvg": 3.78,
                    "temperatureMax": 7.39,
                    "temperatureMin": -0.01,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 7.46,
                    "temperatureApparentMax": 13.72,
                    "temperatureApparentMin": 0.96,
                    "temperatureAvg": 7.68,
                    "temperatureMax": 13.72,
                    "temperatureMin": 2.78,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-25T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 7.72,
                    "temperatureApparentMax": 14.63,
                    "temperatureApparentMin": 1.26,
                    "temperatureAvg": 7.96,
                    "temperatureMax": 14.63,
                    "temperatureMin": 4.16,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 6.36,
                    "temperatureApparentMax": 11.36,
                    "temperatureApparentMin": 0.7,
                    "temperatureAvg": 7.25,
                    "temperatureMax": 11.36,
                    "temperatureMin": 3.83,
                    "weatherCodeMax": 1102,
                    "weatherCodeMin": 1102
                }
            }
        ]
    },
    "location": {
        "lat": 42.5055,
        "lon": 1.5243
    }
}