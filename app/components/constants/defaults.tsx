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
        "time": "2024-01-23T20:17:00Z",
        "values": {
            "temperature": 3.5,
            "temperatureApparent": 0.99,
            "weatherCode": 1001
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
                "time": "2024-01-22T21:00:00Z",
                "values": {
                    "temperature": 2.69,
                    "temperatureApparent": 1.29,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T22:00:00Z",
                "values": {
                    "temperature": 2.81,
                    "temperatureApparent": 1.26,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T23:00:00Z",
                "values": {
                    "temperature": 2.63,
                    "temperatureApparent": 1.22,
                    "weatherCode": 2100
                }
            },
            {
                "time": "2024-01-23T00:00:00Z",
                "values": {
                    "temperature": 2.5,
                    "temperatureApparent": 0.82,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T01:00:00Z",
                "values": {
                    "temperature": 2,
                    "temperatureApparent": 0.25,
                    "weatherCode": 2100
                }
            },
            {
                "time": "2024-01-23T02:00:00Z",
                "values": {
                    "temperature": 1.19,
                    "temperatureApparent": -0.69,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T03:00:00Z",
                "values": {
                    "temperature": 0.38,
                    "temperatureApparent": -1.62,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T04:00:00Z",
                "values": {
                    "temperature": 0.19,
                    "temperatureApparent": -2.1,
                    "weatherCode": 2100
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperature": 0.5,
                    "temperatureApparent": -2.11,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T06:00:00Z",
                "values": {
                    "temperature": 1.19,
                    "temperatureApparent": -1.63,
                    "weatherCode": 2000
                }
            },
            {
                "time": "2024-01-23T07:00:00Z",
                "values": {
                    "temperature": 1.13,
                    "temperatureApparent": -1.38,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T08:00:00Z",
                "values": {
                    "temperature": 1.69,
                    "temperatureApparent": -0.85,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-23T09:00:00Z",
                "values": {
                    "temperature": 4.38,
                    "temperatureApparent": 2.49,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-23T10:00:00Z",
                "values": {
                    "temperature": 6.31,
                    "temperatureApparent": 6.31,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T11:00:00Z",
                "values": {
                    "temperature": 7.88,
                    "temperatureApparent": 7.88,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T12:00:00Z",
                "values": {
                    "temperature": 9.13,
                    "temperatureApparent": 9.13,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T13:00:00Z",
                "values": {
                    "temperature": 9.13,
                    "temperatureApparent": 9.13,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-23T14:00:00Z",
                "values": {
                    "temperature": 8.88,
                    "temperatureApparent": 8.88,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T15:00:00Z",
                "values": {
                    "temperature": 8.31,
                    "temperatureApparent": 8.31,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T16:00:00Z",
                "values": {
                    "temperature": 6.5,
                    "temperatureApparent": 6.5,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T17:00:00Z",
                "values": {
                    "temperature": 3.81,
                    "temperatureApparent": 1.97,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T18:00:00Z",
                "values": {
                    "temperature": 3.69,
                    "temperatureApparent": 1.82,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T19:00:00Z",
                "values": {
                    "temperature": 3.88,
                    "temperatureApparent": 1.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:00:00Z",
                "values": {
                    "temperature": 3.5,
                    "temperatureApparent": 0.99,
                    "weatherCode": 1001
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 3.47,
                    "temperatureApparentMax": 9.88,
                    "temperatureApparentMin": -2.1,
                    "temperatureAvg": 4.45,
                    "temperatureMax": 9.88,
                    "temperatureMin": 0.19,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 4.06,
                    "temperatureApparentMax": 9.13,
                    "temperatureApparentMin": -1.63,
                    "temperatureAvg": 5.29,
                    "temperatureMax": 9.13,
                    "temperatureMin": 1.13,
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
export const defaultForecast : ForecastWeatherData={
    "timelines": {
        "minutely": [
            {
                "time": "2024-01-23T20:17:00Z",
                "values": {
                    "temperature": 3.5,
                    "temperatureApparent": 0.99,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:18:00Z",
                "values": {
                    "temperature": 3.49,
                    "temperatureApparent": 0.98,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:19:00Z",
                "values": {
                    "temperature": 3.48,
                    "temperatureApparent": 0.97,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:20:00Z",
                "values": {
                    "temperature": 3.47,
                    "temperatureApparent": 0.96,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:21:00Z",
                "values": {
                    "temperature": 3.45,
                    "temperatureApparent": 0.95,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:22:00Z",
                "values": {
                    "temperature": 3.44,
                    "temperatureApparent": 0.94,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:23:00Z",
                "values": {
                    "temperature": 3.43,
                    "temperatureApparent": 0.93,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:24:00Z",
                "values": {
                    "temperature": 3.42,
                    "temperatureApparent": 0.92,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:25:00Z",
                "values": {
                    "temperature": 3.41,
                    "temperatureApparent": 0.91,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:26:00Z",
                "values": {
                    "temperature": 3.4,
                    "temperatureApparent": 0.9,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:27:00Z",
                "values": {
                    "temperature": 3.39,
                    "temperatureApparent": 0.89,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:28:00Z",
                "values": {
                    "temperature": 3.38,
                    "temperatureApparent": 0.87,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:29:00Z",
                "values": {
                    "temperature": 3.36,
                    "temperatureApparent": 0.86,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:30:00Z",
                "values": {
                    "temperature": 3.35,
                    "temperatureApparent": 0.85,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:31:00Z",
                "values": {
                    "temperature": 3.34,
                    "temperatureApparent": 0.84,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:32:00Z",
                "values": {
                    "temperature": 3.33,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:33:00Z",
                "values": {
                    "temperature": 3.32,
                    "temperatureApparent": 0.82,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:34:00Z",
                "values": {
                    "temperature": 3.31,
                    "temperatureApparent": 0.81,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:35:00Z",
                "values": {
                    "temperature": 3.3,
                    "temperatureApparent": 0.8,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:36:00Z",
                "values": {
                    "temperature": 3.29,
                    "temperatureApparent": 0.79,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:37:00Z",
                "values": {
                    "temperature": 3.27,
                    "temperatureApparent": 0.78,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:38:00Z",
                "values": {
                    "temperature": 3.26,
                    "temperatureApparent": 0.77,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:39:00Z",
                "values": {
                    "temperature": 3.25,
                    "temperatureApparent": 0.76,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:40:00Z",
                "values": {
                    "temperature": 3.24,
                    "temperatureApparent": 0.74,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:41:00Z",
                "values": {
                    "temperature": 3.23,
                    "temperatureApparent": 0.73,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:42:00Z",
                "values": {
                    "temperature": 3.22,
                    "temperatureApparent": 0.72,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:43:00Z",
                "values": {
                    "temperature": 3.21,
                    "temperatureApparent": 0.71,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:44:00Z",
                "values": {
                    "temperature": 3.19,
                    "temperatureApparent": 0.7,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:45:00Z",
                "values": {
                    "temperature": 3.18,
                    "temperatureApparent": 0.69,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:46:00Z",
                "values": {
                    "temperature": 3.17,
                    "temperatureApparent": 0.68,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:47:00Z",
                "values": {
                    "temperature": 3.16,
                    "temperatureApparent": 0.67,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:48:00Z",
                "values": {
                    "temperature": 3.15,
                    "temperatureApparent": 0.66,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:49:00Z",
                "values": {
                    "temperature": 3.14,
                    "temperatureApparent": 0.65,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:50:00Z",
                "values": {
                    "temperature": 3.13,
                    "temperatureApparent": 0.64,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:51:00Z",
                "values": {
                    "temperature": 3.12,
                    "temperatureApparent": 0.63,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:52:00Z",
                "values": {
                    "temperature": 3.1,
                    "temperatureApparent": 0.61,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:53:00Z",
                "values": {
                    "temperature": 3.09,
                    "temperatureApparent": 0.6,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:54:00Z",
                "values": {
                    "temperature": 3.08,
                    "temperatureApparent": 0.59,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:55:00Z",
                "values": {
                    "temperature": 3.07,
                    "temperatureApparent": 0.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:56:00Z",
                "values": {
                    "temperature": 3.06,
                    "temperatureApparent": 0.57,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:57:00Z",
                "values": {
                    "temperature": 3.05,
                    "temperatureApparent": 0.56,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:58:00Z",
                "values": {
                    "temperature": 3.04,
                    "temperatureApparent": 0.55,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:59:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.54,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:00:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.53,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:01:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.54,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:02:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.54,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:03:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.55,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:04:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.56,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:05:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.57,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:06:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.57,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:07:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:08:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.59,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:09:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.6,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:10:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.61,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:11:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.61,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:12:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.62,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:13:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.63,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:14:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.64,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:15:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.64,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:16:00Z",
                "values": {
                    "temperature": 3.02,
                    "temperatureApparent": 0.65,
                    "weatherCode": 1001
                }
            }
        ],
        "hourly": [
            {
                "time": "2024-01-23T20:00:00Z",
                "values": {
                    "temperature": 3.5,
                    "temperatureApparent": 0.99,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:00:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.53,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T22:00:00Z",
                "values": {
                    "temperature": 3.03,
                    "temperatureApparent": 1.02,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T23:00:00Z",
                "values": {
                    "temperature": 3.92,
                    "temperatureApparent": 2.54,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T00:00:00Z",
                "values": {
                    "temperature": 3.85,
                    "temperatureApparent": 3.85,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T01:00:00Z",
                "values": {
                    "temperature": 5.98,
                    "temperatureApparent": 5.98,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T02:00:00Z",
                "values": {
                    "temperature": 5.84,
                    "temperatureApparent": 5.84,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T03:00:00Z",
                "values": {
                    "temperature": 5.3,
                    "temperatureApparent": 5.3,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T04:00:00Z",
                "values": {
                    "temperature": 4.34,
                    "temperatureApparent": 4.34,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperature": 3.97,
                    "temperatureApparent": 2.91,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T06:00:00Z",
                "values": {
                    "temperature": 4.13,
                    "temperatureApparent": 4.13,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T07:00:00Z",
                "values": {
                    "temperature": 4.52,
                    "temperatureApparent": 4.52,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T08:00:00Z",
                "values": {
                    "temperature": 6.72,
                    "temperatureApparent": 6.72,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T09:00:00Z",
                "values": {
                    "temperature": 11.25,
                    "temperatureApparent": 11.25,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T10:00:00Z",
                "values": {
                    "temperature": 13.12,
                    "temperatureApparent": 13.12,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T11:00:00Z",
                "values": {
                    "temperature": 13.49,
                    "temperatureApparent": 13.49,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T12:00:00Z",
                "values": {
                    "temperature": 13.75,
                    "temperatureApparent": 13.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T13:00:00Z",
                "values": {
                    "temperature": 13.8,
                    "temperatureApparent": 13.8,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T14:00:00Z",
                "values": {
                    "temperature": 13.62,
                    "temperatureApparent": 13.62,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T15:00:00Z",
                "values": {
                    "temperature": 12.82,
                    "temperatureApparent": 12.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T16:00:00Z",
                "values": {
                    "temperature": 10.81,
                    "temperatureApparent": 10.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T17:00:00Z",
                "values": {
                    "temperature": 7.35,
                    "temperatureApparent": 7.35,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T18:00:00Z",
                "values": {
                    "temperature": 5.82,
                    "temperatureApparent": 5.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T19:00:00Z",
                "values": {
                    "temperature": 5.44,
                    "temperatureApparent": 5.44,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T20:00:00Z",
                "values": {
                    "temperature": 5.31,
                    "temperatureApparent": 5.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T21:00:00Z",
                "values": {
                    "temperature": 5.62,
                    "temperatureApparent": 5.62,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T22:00:00Z",
                "values": {
                    "temperature": 6.68,
                    "temperatureApparent": 6.68,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T23:00:00Z",
                "values": {
                    "temperature": 7.28,
                    "temperatureApparent": 7.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T00:00:00Z",
                "values": {
                    "temperature": 7.13,
                    "temperatureApparent": 7.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T01:00:00Z",
                "values": {
                    "temperature": 6.89,
                    "temperatureApparent": 6.89,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T02:00:00Z",
                "values": {
                    "temperature": 6.48,
                    "temperatureApparent": 6.48,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T03:00:00Z",
                "values": {
                    "temperature": 6.14,
                    "temperatureApparent": 6.14,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T04:00:00Z",
                "values": {
                    "temperature": 6.15,
                    "temperatureApparent": 6.15,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T05:00:00Z",
                "values": {
                    "temperature": 6.45,
                    "temperatureApparent": 6.45,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T06:00:00Z",
                "values": {
                    "temperature": 6.69,
                    "temperatureApparent": 6.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T07:00:00Z",
                "values": {
                    "temperature": 7.18,
                    "temperatureApparent": 7.18,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T08:00:00Z",
                "values": {
                    "temperature": 7.84,
                    "temperatureApparent": 7.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T09:00:00Z",
                "values": {
                    "temperature": 11.08,
                    "temperatureApparent": 11.08,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T10:00:00Z",
                "values": {
                    "temperature": 13.82,
                    "temperatureApparent": 13.82,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T11:00:00Z",
                "values": {
                    "temperature": 14.41,
                    "temperatureApparent": 14.41,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T12:00:00Z",
                "values": {
                    "temperature": 14.74,
                    "temperatureApparent": 14.74,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T13:00:00Z",
                "values": {
                    "temperature": 14.88,
                    "temperatureApparent": 14.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T14:00:00Z",
                "values": {
                    "temperature": 14.64,
                    "temperatureApparent": 14.64,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T15:00:00Z",
                "values": {
                    "temperature": 13.73,
                    "temperatureApparent": 13.73,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-25T16:00:00Z",
                "values": {
                    "temperature": 11.08,
                    "temperatureApparent": 11.08,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-25T17:00:00Z",
                "values": {
                    "temperature": 8.56,
                    "temperatureApparent": 8.56,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-25T18:00:00Z",
                "values": {
                    "temperature": 8.58,
                    "temperatureApparent": 8.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-25T19:00:00Z",
                "values": {
                    "temperature": 8.52,
                    "temperatureApparent": 8.52,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-25T20:00:00Z",
                "values": {
                    "temperature": 8.33,
                    "temperatureApparent": 8.33,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-25T21:00:00Z",
                "values": {
                    "temperature": 7.98,
                    "temperatureApparent": 7.98,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T22:00:00Z",
                "values": {
                    "temperature": 7.47,
                    "temperatureApparent": 7.47,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-25T23:00:00Z",
                "values": {
                    "temperature": 7.3,
                    "temperatureApparent": 7.3,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T00:00:00Z",
                "values": {
                    "temperature": 6.98,
                    "temperatureApparent": 6.98,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T01:00:00Z",
                "values": {
                    "temperature": 5.83,
                    "temperatureApparent": 5.83,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T02:00:00Z",
                "values": {
                    "temperature": 4.7,
                    "temperatureApparent": 4.7,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T03:00:00Z",
                "values": {
                    "temperature": 3.7,
                    "temperatureApparent": 1.59,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T04:00:00Z",
                "values": {
                    "temperature": 3.29,
                    "temperatureApparent": 0.96,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperature": 3.04,
                    "temperatureApparent": 0.47,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T06:00:00Z",
                "values": {
                    "temperature": 2.93,
                    "temperatureApparent": 0.21,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T07:00:00Z",
                "values": {
                    "temperature": 2.71,
                    "temperatureApparent": 0,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T08:00:00Z",
                "values": {
                    "temperature": 3.87,
                    "temperatureApparent": 1.51,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T09:00:00Z",
                "values": {
                    "temperature": 7.9,
                    "temperatureApparent": 7.9,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-26T10:00:00Z",
                "values": {
                    "temperature": 11.31,
                    "temperatureApparent": 11.31,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-26T11:00:00Z",
                "values": {
                    "temperature": 12.05,
                    "temperatureApparent": 12.05,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T12:00:00Z",
                "values": {
                    "temperature": 12.36,
                    "temperatureApparent": 12.36,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T13:00:00Z",
                "values": {
                    "temperature": 12.26,
                    "temperatureApparent": 12.26,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T14:00:00Z",
                "values": {
                    "temperature": 12.19,
                    "temperatureApparent": 12.19,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T15:00:00Z",
                "values": {
                    "temperature": 11.49,
                    "temperatureApparent": 11.49,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T16:00:00Z",
                "values": {
                    "temperature": 8.99,
                    "temperatureApparent": 8.99,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T17:00:00Z",
                "values": {
                    "temperature": 5.4,
                    "temperatureApparent": 5.4,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T18:00:00Z",
                "values": {
                    "temperature": 5.57,
                    "temperatureApparent": 5.57,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T19:00:00Z",
                "values": {
                    "temperature": 5.74,
                    "temperatureApparent": 5.74,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T20:00:00Z",
                "values": {
                    "temperature": 5.19,
                    "temperatureApparent": 5.19,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T21:00:00Z",
                "values": {
                    "temperature": 4.58,
                    "temperatureApparent": 4.58,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-26T22:00:00Z",
                "values": {
                    "temperature": 4.01,
                    "temperatureApparent": 4.01,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-26T23:00:00Z",
                "values": {
                    "temperature": 4.1,
                    "temperatureApparent": 4.1,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-27T00:00:00Z",
                "values": {
                    "temperature": 4.07,
                    "temperatureApparent": 3.09,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-27T01:00:00Z",
                "values": {
                    "temperature": 3.14,
                    "temperatureApparent": 1.81,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-27T02:00:00Z",
                "values": {
                    "temperature": 2.85,
                    "temperatureApparent": 1.19,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-27T03:00:00Z",
                "values": {
                    "temperature": 2.58,
                    "temperatureApparent": 0.51,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-27T04:00:00Z",
                "values": {
                    "temperature": 2.56,
                    "temperatureApparent": 0.34,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-27T05:00:00Z",
                "values": {
                    "temperature": 2.66,
                    "temperatureApparent": 0.26,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-27T06:00:00Z",
                "values": {
                    "temperature": 2.78,
                    "temperatureApparent": 0.19,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-27T07:00:00Z",
                "values": {
                    "temperature": 2.81,
                    "temperatureApparent": 0.16,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T08:00:00Z",
                "values": {
                    "temperature": 3.83,
                    "temperatureApparent": 1.61,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T09:00:00Z",
                "values": {
                    "temperature": 7.41,
                    "temperatureApparent": 7.41,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T10:00:00Z",
                "values": {
                    "temperature": 10.07,
                    "temperatureApparent": 10.07,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T11:00:00Z",
                "values": {
                    "temperature": 11.33,
                    "temperatureApparent": 11.33,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T12:00:00Z",
                "values": {
                    "temperature": 11.98,
                    "temperatureApparent": 11.98,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T13:00:00Z",
                "values": {
                    "temperature": 12.26,
                    "temperatureApparent": 12.26,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T14:00:00Z",
                "values": {
                    "temperature": 12.21,
                    "temperatureApparent": 12.21,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T15:00:00Z",
                "values": {
                    "temperature": 11.38,
                    "temperatureApparent": 11.38,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T16:00:00Z",
                "values": {
                    "temperature": 8.83,
                    "temperatureApparent": 8.83,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T17:00:00Z",
                "values": {
                    "temperature": 5.36,
                    "temperatureApparent": 5.36,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-27T18:00:00Z",
                "values": {
                    "temperature": 4.76,
                    "temperatureApparent": 4.76,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-27T19:00:00Z",
                "values": {
                    "temperature": 4.76,
                    "temperatureApparent": 4.76,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-27T20:00:00Z",
                "values": {
                    "temperature": 5.03,
                    "temperatureApparent": 5.03,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-27T21:00:00Z",
                "values": {
                    "temperature": 5.15,
                    "temperatureApparent": 5.15,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-27T22:00:00Z",
                "values": {
                    "temperature": 5.05,
                    "temperatureApparent": 5.05,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-27T23:00:00Z",
                "values": {
                    "temperature": 4.84,
                    "temperatureApparent": 4.84,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T00:00:00Z",
                "values": {
                    "temperature": 4.73,
                    "temperatureApparent": 4.73,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T01:00:00Z",
                "values": {
                    "temperature": 4.72,
                    "temperatureApparent": 4.72,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T02:00:00Z",
                "values": {
                    "temperature": 4.55,
                    "temperatureApparent": 4.55,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T03:00:00Z",
                "values": {
                    "temperature": 4.14,
                    "temperatureApparent": 2.76,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T04:00:00Z",
                "values": {
                    "temperature": 3.86,
                    "temperatureApparent": 2.31,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T05:00:00Z",
                "values": {
                    "temperature": 4.11,
                    "temperatureApparent": 2.81,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T06:00:00Z",
                "values": {
                    "temperature": 4.25,
                    "temperatureApparent": 3.11,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T07:00:00Z",
                "values": {
                    "temperature": 4.22,
                    "temperatureApparent": 3.2,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T08:00:00Z",
                "values": {
                    "temperature": 4.65,
                    "temperatureApparent": 4.65,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T09:00:00Z",
                "values": {
                    "temperature": 7.1,
                    "temperatureApparent": 7.1,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-28T10:00:00Z",
                "values": {
                    "temperature": 8.92,
                    "temperatureApparent": 8.92,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-28T11:00:00Z",
                "values": {
                    "temperature": 9.92,
                    "temperatureApparent": 9.92,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-28T12:00:00Z",
                "values": {
                    "temperature": 10.63,
                    "temperatureApparent": 10.63,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-28T13:00:00Z",
                "values": {
                    "temperature": 10.36,
                    "temperatureApparent": 10.36,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-28T14:00:00Z",
                "values": {
                    "temperature": 10.1,
                    "temperatureApparent": 10.1,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-28T15:00:00Z",
                "values": {
                    "temperature": 9.84,
                    "temperatureApparent": 9.84,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-28T16:00:00Z",
                "values": {
                    "temperature": 7.91,
                    "temperatureApparent": 7.91,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-28T17:00:00Z",
                "values": {
                    "temperature": 5.98,
                    "temperatureApparent": 5.98,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-28T18:00:00Z",
                "values": {
                    "temperature": 4.06,
                    "temperatureApparent": 4.06,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-28T19:00:00Z",
                "values": {
                    "temperature": 3.98,
                    "temperatureApparent": 3.98,
                    "weatherCode": 1102
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 3.93,
                    "temperatureApparentMax": 9.13,
                    "temperatureApparentMin": -1.63,
                    "temperatureAvg": 4.98,
                    "temperatureMax": 9.13,
                    "temperatureMin": 1.13,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 8.45,
                    "temperatureApparentMax": 13.8,
                    "temperatureApparentMin": 4.13,
                    "temperatureAvg": 8.45,
                    "temperatureMax": 13.8,
                    "temperatureMin": 4.13,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-25T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 9,
                    "temperatureApparentMax": 14.88,
                    "temperatureApparentMin": 0.96,
                    "temperatureAvg": 9.19,
                    "temperatureMax": 14.88,
                    "temperatureMin": 3.29,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-26T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 5.73,
                    "temperatureApparentMax": 12.36,
                    "temperatureApparentMin": 0,
                    "temperatureAvg": 6.43,
                    "temperatureMax": 12.36,
                    "temperatureMin": 2.56,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-27T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 6.15,
                    "temperatureApparentMax": 12.26,
                    "temperatureApparentMin": 0.16,
                    "temperatureAvg": 6.6,
                    "temperatureMax": 12.26,
                    "temperatureMin": 2.78,
                    "weatherCodeMax": 1100,
                    "weatherCodeMin": 1100
                }
            },
            {
                "time": "2024-01-28T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 6.91,
                    "temperatureApparentMax": 10.63,
                    "temperatureApparentMin": 3.11,
                    "temperatureAvg": 7.05,
                    "temperatureMax": 10.63,
                    "temperatureMin": 3.83,
                    "weatherCodeMax": 1101,
                    "weatherCodeMin": 1101
                }
            }
        ]
    },
    "location": {
        "lat": 42.5055,
        "lon": 1.5243
    }
}