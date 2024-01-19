import { ForecastWeatherData } from "~/models/Forecast"
import { HistoryData } from "~/models/History"
import { RealTimeData } from "~/models/RealTime"
import { WeatherLocation } from "~/models/WeatherLocation"


export const defaultLocation: WeatherLocation = {
    "lat": 40.71272659301758,
    "lon": -74.00601196289062,
    "name": "City of New York, New York, United States",
    "type": "administrative"
  }
  
export const defaultRealTime : RealTimeData= {
    "data": {
        "time": "2024-01-19T17:17:00Z",
        "values": {
            "temperature": -1.81,
            "temperatureApparent": -1.81,
            "weatherCode": 5001
        }
    },
    "location": {
        "lat": 42.50693893432617,
        "lon": 1.5212466716766357,
        "name": "Andorra la Vella, AD500, Andorra",
        "type": "town"
    }
}

export const defaultHistory: HistoryData = {
    "timelines": {
        "hourly": [
            {
                "time": "2024-01-18T18:00:00Z",
                "values": {
                    "temperature": -0.19,
                    "temperatureApparent": -2.84,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-18T19:00:00Z",
                "values": {
                    "temperature": -0.63,
                    "temperatureApparent": -3.43,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-18T20:00:00Z",
                "values": {
                    "temperature": -0.38,
                    "temperatureApparent": -3.48,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-18T21:00:00Z",
                "values": {
                    "temperature": -0.5,
                    "temperatureApparent": -3.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-18T22:00:00Z",
                "values": {
                    "temperature": -0.81,
                    "temperatureApparent": -4.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-18T23:00:00Z",
                "values": {
                    "temperature": -0.81,
                    "temperatureApparent": -3.58,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T00:00:00Z",
                "values": {
                    "temperature": -0.69,
                    "temperatureApparent": -3.5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T01:00:00Z",
                "values": {
                    "temperature": 1,
                    "temperatureApparent": 1,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T02:00:00Z",
                "values": {
                    "temperature": 0.31,
                    "temperatureApparent": 0.31,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T03:00:00Z",
                "values": {
                    "temperature": -0.69,
                    "temperatureApparent": -2.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T04:00:00Z",
                "values": {
                    "temperature": -0.63,
                    "temperatureApparent": -2.48,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T05:00:00Z",
                "values": {
                    "temperature": -1.38,
                    "temperatureApparent": -3.54,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T06:00:00Z",
                "values": {
                    "temperature": -1.31,
                    "temperatureApparent": -3.47,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T07:00:00Z",
                "values": {
                    "temperature": 0.88,
                    "temperatureApparent": -0.57,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T08:00:00Z",
                "values": {
                    "temperature": -1.13,
                    "temperatureApparent": -3.25,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T09:00:00Z",
                "values": {
                    "temperature": -0.38,
                    "temperatureApparent": -0.38,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T10:00:00Z",
                "values": {
                    "temperature": 1.81,
                    "temperatureApparent": 1.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T11:00:00Z",
                "values": {
                    "temperature": 2.88,
                    "temperatureApparent": 2.88,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T12:00:00Z",
                "values": {
                    "temperature": 3.69,
                    "temperatureApparent": 2.43,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T13:00:00Z",
                "values": {
                    "temperature": 4,
                    "temperatureApparent": 4,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T14:00:00Z",
                "values": {
                    "temperature": 4.13,
                    "temperatureApparent": 4.13,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T15:00:00Z",
                "values": {
                    "temperature": 3.69,
                    "temperatureApparent": 3.69,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T16:00:00Z",
                "values": {
                    "temperature": 3.19,
                    "temperatureApparent": 3.19,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-19T17:00:00Z",
                "values": {
                    "temperature": 2.19,
                    "temperatureApparent": 2.19,
                    "weatherCode": 1000
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-18T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -1.33,
                    "temperatureApparentMax": 4.63,
                    "temperatureApparentMin": -4.13,
                    "temperatureAvg": 1.54,
                    "temperatureMax": 4.63,
                    "temperatureMin": -0.81,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-19T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 1.39,
                    "temperatureApparentMax": 4.13,
                    "temperatureApparentMin": -3.47,
                    "temperatureAvg": 1.97,
                    "temperatureMax": 4.13,
                    "temperatureMin": -1.31,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            }
        ]
    },
    "location": {
        "lat": 48.393829345703125,
        "lon": -2.0359063148498535,
        "name": "Le Pont Récent, La Noë, Calorguen, Dinan, Côtes-d'Armor, Bretagne, France métropolitaine, 22100, France",
        "type": "locality"
    }
}

export const defaultForecast= {
    "timelines": {
        "minutely": [
            {
                "time": "2024-01-19T17:19:00Z",
                "values": {
                    "temperature": -1.81,
                    "temperatureApparent": -1.81,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:20:00Z",
                "values": {
                    "temperature": -1.82,
                    "temperatureApparent": -1.82,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:21:00Z",
                "values": {
                    "temperature": -1.83,
                    "temperatureApparent": -1.83,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:22:00Z",
                "values": {
                    "temperature": -1.84,
                    "temperatureApparent": -1.84,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:23:00Z",
                "values": {
                    "temperature": -1.85,
                    "temperatureApparent": -1.85,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:24:00Z",
                "values": {
                    "temperature": -1.86,
                    "temperatureApparent": -1.86,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:25:00Z",
                "values": {
                    "temperature": -1.87,
                    "temperatureApparent": -1.87,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:26:00Z",
                "values": {
                    "temperature": -1.88,
                    "temperatureApparent": -1.88,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:27:00Z",
                "values": {
                    "temperature": -1.89,
                    "temperatureApparent": -1.89,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:28:00Z",
                "values": {
                    "temperature": -1.9,
                    "temperatureApparent": -1.9,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:29:00Z",
                "values": {
                    "temperature": -1.91,
                    "temperatureApparent": -1.91,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:30:00Z",
                "values": {
                    "temperature": -1.92,
                    "temperatureApparent": -1.92,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:31:00Z",
                "values": {
                    "temperature": -1.93,
                    "temperatureApparent": -1.93,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:32:00Z",
                "values": {
                    "temperature": -1.94,
                    "temperatureApparent": -1.94,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:33:00Z",
                "values": {
                    "temperature": -1.95,
                    "temperatureApparent": -1.95,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:34:00Z",
                "values": {
                    "temperature": -1.95,
                    "temperatureApparent": -1.95,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:35:00Z",
                "values": {
                    "temperature": -1.96,
                    "temperatureApparent": -1.96,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:36:00Z",
                "values": {
                    "temperature": -1.97,
                    "temperatureApparent": -1.97,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:37:00Z",
                "values": {
                    "temperature": -1.98,
                    "temperatureApparent": -1.98,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:38:00Z",
                "values": {
                    "temperature": -1.99,
                    "temperatureApparent": -3.77,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:39:00Z",
                "values": {
                    "temperature": -2,
                    "temperatureApparent": -3.8,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:40:00Z",
                "values": {
                    "temperature": -2.01,
                    "temperatureApparent": -3.82,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:41:00Z",
                "values": {
                    "temperature": -2.02,
                    "temperatureApparent": -3.85,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:42:00Z",
                "values": {
                    "temperature": -2.03,
                    "temperatureApparent": -3.87,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:43:00Z",
                "values": {
                    "temperature": -2.04,
                    "temperatureApparent": -3.9,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:44:00Z",
                "values": {
                    "temperature": -2.05,
                    "temperatureApparent": -3.93,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:45:00Z",
                "values": {
                    "temperature": -2.06,
                    "temperatureApparent": -3.95,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:46:00Z",
                "values": {
                    "temperature": -2.07,
                    "temperatureApparent": -3.98,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:47:00Z",
                "values": {
                    "temperature": -2.08,
                    "temperatureApparent": -4,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T17:48:00Z",
                "values": {
                    "temperature": -2.09,
                    "temperatureApparent": -4.03,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:49:00Z",
                "values": {
                    "temperature": -2.1,
                    "temperatureApparent": -4.05,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:50:00Z",
                "values": {
                    "temperature": -2.11,
                    "temperatureApparent": -4.08,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:51:00Z",
                "values": {
                    "temperature": -2.12,
                    "temperatureApparent": -4.11,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:52:00Z",
                "values": {
                    "temperature": -2.13,
                    "temperatureApparent": -4.13,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:53:00Z",
                "values": {
                    "temperature": -2.14,
                    "temperatureApparent": -4.16,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:54:00Z",
                "values": {
                    "temperature": -2.14,
                    "temperatureApparent": -4.18,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:55:00Z",
                "values": {
                    "temperature": -2.15,
                    "temperatureApparent": -4.21,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:56:00Z",
                "values": {
                    "temperature": -2.16,
                    "temperatureApparent": -4.23,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:57:00Z",
                "values": {
                    "temperature": -2.17,
                    "temperatureApparent": -4.26,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:58:00Z",
                "values": {
                    "temperature": -2.18,
                    "temperatureApparent": -4.28,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T17:59:00Z",
                "values": {
                    "temperature": -2.19,
                    "temperatureApparent": -4.31,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:00:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.33,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:01:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.35,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:02:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.36,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:03:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.38,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:04:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.39,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:05:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.41,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:06:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.42,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:07:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.44,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:08:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.45,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:09:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.47,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:10:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.48,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:11:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.49,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:12:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.51,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:13:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.52,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:14:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.54,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:15:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.55,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:16:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.57,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:17:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.58,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:18:00Z",
                "values": {
                    "temperature": -2.21,
                    "temperatureApparent": -4.59,
                    "weatherCode": 5001
                }
            }
        ],
        "hourly": [
            {
                "time": "2024-01-19T17:00:00Z",
                "values": {
                    "temperature": -1.81,
                    "temperatureApparent": -1.81,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T18:00:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -4.33,
                    "weatherCode": 5001
                }
            },
            {
                "time": "2024-01-19T19:00:00Z",
                "values": {
                    "temperature": -2.22,
                    "temperatureApparent": -5.14,
                    "weatherCode": 5100
                }
            },
            {
                "time": "2024-01-19T20:00:00Z",
                "values": {
                    "temperature": -2.57,
                    "temperatureApparent": -5.1,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-19T21:00:00Z",
                "values": {
                    "temperature": -3.64,
                    "temperatureApparent": -6.6,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-19T22:00:00Z",
                "values": {
                    "temperature": -3.37,
                    "temperatureApparent": -6.72,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-19T23:00:00Z",
                "values": {
                    "temperature": -4.99,
                    "temperatureApparent": -8.92,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-20T00:00:00Z",
                "values": {
                    "temperature": -6.97,
                    "temperatureApparent": -11.61,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T01:00:00Z",
                "values": {
                    "temperature": -7.96,
                    "temperatureApparent": -13.26,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T02:00:00Z",
                "values": {
                    "temperature": -8.78,
                    "temperatureApparent": -14.44,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T03:00:00Z",
                "values": {
                    "temperature": -8.93,
                    "temperatureApparent": -14.6,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T04:00:00Z",
                "values": {
                    "temperature": -9.01,
                    "temperatureApparent": -14.5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T05:00:00Z",
                "values": {
                    "temperature": -9.22,
                    "temperatureApparent": -14.57,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T06:00:00Z",
                "values": {
                    "temperature": -9.93,
                    "temperatureApparent": -14.97,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T07:00:00Z",
                "values": {
                    "temperature": -10.76,
                    "temperatureApparent": -15.07,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T08:00:00Z",
                "values": {
                    "temperature": -9.81,
                    "temperatureApparent": -12.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T09:00:00Z",
                "values": {
                    "temperature": -4.76,
                    "temperatureApparent": -4.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T10:00:00Z",
                "values": {
                    "temperature": 0.1,
                    "temperatureApparent": 0.1,
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
                    "temperature": -0.23,
                    "temperatureApparent": -0.23,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T13:00:00Z",
                "values": {
                    "temperature": -0.46,
                    "temperatureApparent": -0.46,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T14:00:00Z",
                "values": {
                    "temperature": -0.76,
                    "temperatureApparent": -0.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T15:00:00Z",
                "values": {
                    "temperature": -2.01,
                    "temperatureApparent": -2.01,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T16:00:00Z",
                "values": {
                    "temperature": -2.2,
                    "temperatureApparent": -2.2,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T17:00:00Z",
                "values": {
                    "temperature": -3.28,
                    "temperatureApparent": -3.28,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T18:00:00Z",
                "values": {
                    "temperature": -4.47,
                    "temperatureApparent": -4.47,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T19:00:00Z",
                "values": {
                    "temperature": -4.52,
                    "temperatureApparent": -4.52,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T20:00:00Z",
                "values": {
                    "temperature": -5.33,
                    "temperatureApparent": -5.33,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T21:00:00Z",
                "values": {
                    "temperature": -5,
                    "temperatureApparent": -5,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T22:00:00Z",
                "values": {
                    "temperature": -5.1,
                    "temperatureApparent": -5.1,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-20T23:00:00Z",
                "values": {
                    "temperature": -5.76,
                    "temperatureApparent": -5.76,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T00:00:00Z",
                "values": {
                    "temperature": -6.16,
                    "temperatureApparent": -6.16,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T01:00:00Z",
                "values": {
                    "temperature": -5.67,
                    "temperatureApparent": -8.45,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T02:00:00Z",
                "values": {
                    "temperature": -6.16,
                    "temperatureApparent": -9.14,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T03:00:00Z",
                "values": {
                    "temperature": -5.88,
                    "temperatureApparent": -8.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T04:00:00Z",
                "values": {
                    "temperature": -7.91,
                    "temperatureApparent": -11.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperature": -8.41,
                    "temperatureApparent": -12.42,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-21T06:00:00Z",
                "values": {
                    "temperature": -7.73,
                    "temperatureApparent": -11.75,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-21T07:00:00Z",
                "values": {
                    "temperature": -6.98,
                    "temperatureApparent": -10.89,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-21T08:00:00Z",
                "values": {
                    "temperature": -5.75,
                    "temperatureApparent": -9.16,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-21T09:00:00Z",
                "values": {
                    "temperature": -2.17,
                    "temperatureApparent": -4.8,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-21T10:00:00Z",
                "values": {
                    "temperature": 4.48,
                    "temperatureApparent": 4.48,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-21T11:00:00Z",
                "values": {
                    "temperature": 5.3,
                    "temperatureApparent": 5.3,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T12:00:00Z",
                "values": {
                    "temperature": 5.6,
                    "temperatureApparent": 5.6,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T13:00:00Z",
                "values": {
                    "temperature": 5.81,
                    "temperatureApparent": 5.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T14:00:00Z",
                "values": {
                    "temperature": 5.75,
                    "temperatureApparent": 5.75,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T15:00:00Z",
                "values": {
                    "temperature": 4.96,
                    "temperatureApparent": 4.96,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-21T16:00:00Z",
                "values": {
                    "temperature": 3.39,
                    "temperatureApparent": 3.39,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T17:00:00Z",
                "values": {
                    "temperature": -1.37,
                    "temperatureApparent": -1.37,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-21T18:00:00Z",
                "values": {
                    "temperature": -2.49,
                    "temperatureApparent": -2.49,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T19:00:00Z",
                "values": {
                    "temperature": -1.44,
                    "temperatureApparent": -1.44,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-21T20:00:00Z",
                "values": {
                    "temperature": -0.76,
                    "temperatureApparent": -0.76,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-21T21:00:00Z",
                "values": {
                    "temperature": 0.81,
                    "temperatureApparent": 0.81,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T22:00:00Z",
                "values": {
                    "temperature": 1.85,
                    "temperatureApparent": 1.85,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-21T23:00:00Z",
                "values": {
                    "temperature": 2.06,
                    "temperatureApparent": 2.06,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T00:00:00Z",
                "values": {
                    "temperature": 4.84,
                    "temperatureApparent": 4.84,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T01:00:00Z",
                "values": {
                    "temperature": 3.26,
                    "temperatureApparent": 3.26,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T02:00:00Z",
                "values": {
                    "temperature": 2.55,
                    "temperatureApparent": 2.55,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T03:00:00Z",
                "values": {
                    "temperature": 1.2,
                    "temperatureApparent": 1.2,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-22T04:00:00Z",
                "values": {
                    "temperature": 0.15,
                    "temperatureApparent": 0.15,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperature": 0.51,
                    "temperatureApparent": -1.05,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-22T06:00:00Z",
                "values": {
                    "temperature": 2.22,
                    "temperatureApparent": 2.22,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T07:00:00Z",
                "values": {
                    "temperature": 2.48,
                    "temperatureApparent": 2.48,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T08:00:00Z",
                "values": {
                    "temperature": 0.64,
                    "temperatureApparent": -1.14,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T09:00:00Z",
                "values": {
                    "temperature": 6.15,
                    "temperatureApparent": 6.15,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-22T10:00:00Z",
                "values": {
                    "temperature": 9.39,
                    "temperatureApparent": 9.39,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-22T11:00:00Z",
                "values": {
                    "temperature": 9.91,
                    "temperatureApparent": 9.91,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T12:00:00Z",
                "values": {
                    "temperature": 10.23,
                    "temperatureApparent": 10.23,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T13:00:00Z",
                "values": {
                    "temperature": 10.44,
                    "temperatureApparent": 10.44,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T14:00:00Z",
                "values": {
                    "temperature": 9.91,
                    "temperatureApparent": 9.91,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T15:00:00Z",
                "values": {
                    "temperature": 8.39,
                    "temperatureApparent": 8.39,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T16:00:00Z",
                "values": {
                    "temperature": 4.33,
                    "temperatureApparent": 2.27,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T17:00:00Z",
                "values": {
                    "temperature": 3.01,
                    "temperatureApparent": 0.77,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T18:00:00Z",
                "values": {
                    "temperature": 2.48,
                    "temperatureApparent": -0.11,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T19:00:00Z",
                "values": {
                    "temperature": 2.61,
                    "temperatureApparent": 0.05,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T20:00:00Z",
                "values": {
                    "temperature": 1.75,
                    "temperatureApparent": -1.1,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-22T21:00:00Z",
                "values": {
                    "temperature": 1.65,
                    "temperatureApparent": -1.07,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-22T22:00:00Z",
                "values": {
                    "temperature": 1.53,
                    "temperatureApparent": -1.42,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-22T23:00:00Z",
                "values": {
                    "temperature": 1.06,
                    "temperatureApparent": -2.04,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T00:00:00Z",
                "values": {
                    "temperature": 0.69,
                    "temperatureApparent": -2.47,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-23T01:00:00Z",
                "values": {
                    "temperature": 0.19,
                    "temperatureApparent": -3.33,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T02:00:00Z",
                "values": {
                    "temperature": 0.5,
                    "temperatureApparent": -3.19,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T03:00:00Z",
                "values": {
                    "temperature": 0.45,
                    "temperatureApparent": -3.06,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T04:00:00Z",
                "values": {
                    "temperature": 0.94,
                    "temperatureApparent": -2.4,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperature": 1.06,
                    "temperatureApparent": -2.72,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T06:00:00Z",
                "values": {
                    "temperature": 0.78,
                    "temperatureApparent": -3.21,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T07:00:00Z",
                "values": {
                    "temperature": 1.12,
                    "temperatureApparent": -2.97,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T08:00:00Z",
                "values": {
                    "temperature": 1.99,
                    "temperatureApparent": -1.63,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T09:00:00Z",
                "values": {
                    "temperature": 4.77,
                    "temperatureApparent": 4.77,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T10:00:00Z",
                "values": {
                    "temperature": 7.35,
                    "temperatureApparent": 7.35,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T11:00:00Z",
                "values": {
                    "temperature": 9.12,
                    "temperatureApparent": 9.12,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T12:00:00Z",
                "values": {
                    "temperature": 9.73,
                    "temperatureApparent": 9.73,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T13:00:00Z",
                "values": {
                    "temperature": 10.04,
                    "temperatureApparent": 10.04,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T14:00:00Z",
                "values": {
                    "temperature": 9.21,
                    "temperatureApparent": 9.21,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T15:00:00Z",
                "values": {
                    "temperature": 7.8,
                    "temperatureApparent": 7.8,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T16:00:00Z",
                "values": {
                    "temperature": 5.67,
                    "temperatureApparent": 5.67,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T17:00:00Z",
                "values": {
                    "temperature": 3.91,
                    "temperatureApparent": 0.81,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T18:00:00Z",
                "values": {
                    "temperature": 3.67,
                    "temperatureApparent": 0.47,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T19:00:00Z",
                "values": {
                    "temperature": 3.64,
                    "temperatureApparent": 0.48,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T20:00:00Z",
                "values": {
                    "temperature": 3.51,
                    "temperatureApparent": 0.41,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T21:00:00Z",
                "values": {
                    "temperature": 3.71,
                    "temperatureApparent": 0.68,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T22:00:00Z",
                "values": {
                    "temperature": 3.84,
                    "temperatureApparent": 0.94,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-23T23:00:00Z",
                "values": {
                    "temperature": 3.93,
                    "temperatureApparent": 1.15,
                    "weatherCode": 1001
                }
            },
            {
                "time": "2024-01-24T00:00:00Z",
                "values": {
                    "temperature": 4.2,
                    "temperatureApparent": 1.45,
                    "weatherCode": 1102
                }
            },
            {
                "time": "2024-01-24T01:00:00Z",
                "values": {
                    "temperature": 4.29,
                    "temperatureApparent": 1.53,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T02:00:00Z",
                "values": {
                    "temperature": 4.1,
                    "temperatureApparent": 1.12,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T03:00:00Z",
                "values": {
                    "temperature": 3.84,
                    "temperatureApparent": 0.82,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T04:00:00Z",
                "values": {
                    "temperature": 3.73,
                    "temperatureApparent": 0.74,
                    "weatherCode": 1101
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperature": 3.77,
                    "temperatureApparent": 0.83,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T06:00:00Z",
                "values": {
                    "temperature": 3.79,
                    "temperatureApparent": 0.79,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T07:00:00Z",
                "values": {
                    "temperature": 3.64,
                    "temperatureApparent": 0.56,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T08:00:00Z",
                "values": {
                    "temperature": 4.27,
                    "temperatureApparent": 1.39,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T09:00:00Z",
                "values": {
                    "temperature": 7.25,
                    "temperatureApparent": 7.25,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T10:00:00Z",
                "values": {
                    "temperature": 10.32,
                    "temperatureApparent": 10.32,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T11:00:00Z",
                "values": {
                    "temperature": 12.15,
                    "temperatureApparent": 12.15,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T12:00:00Z",
                "values": {
                    "temperature": 12.99,
                    "temperatureApparent": 12.99,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T13:00:00Z",
                "values": {
                    "temperature": 12.68,
                    "temperatureApparent": 12.68,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T14:00:00Z",
                "values": {
                    "temperature": 12.36,
                    "temperatureApparent": 12.36,
                    "weatherCode": 1000
                }
            },
            {
                "time": "2024-01-24T15:00:00Z",
                "values": {
                    "temperature": 12.04,
                    "temperatureApparent": 12.04,
                    "weatherCode": 1100
                }
            },
            {
                "time": "2024-01-24T16:00:00Z",
                "values": {
                    "temperature": 9.58,
                    "temperatureApparent": 9.58,
                    "weatherCode": 1100
                }
            }
        ],
        "daily": [
            {
                "time": "2024-01-19T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -5.82,
                    "temperatureApparentMax": 0,
                    "temperatureApparentMin": -14.6,
                    "temperatureAvg": -3.31,
                    "temperatureMax": 0,
                    "temperatureMin": -9.01,
                    "weatherCodeMax": 5001,
                    "weatherCodeMin": 5001
                }
            },
            {
                "time": "2024-01-20T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": -5.72,
                    "temperatureApparentMax": 0.1,
                    "temperatureApparentMin": -15.07,
                    "temperatureAvg": -4.64,
                    "temperatureMax": 0.1,
                    "temperatureMin": -10.76,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-21T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 0.41,
                    "temperatureApparentMax": 5.81,
                    "temperatureApparentMin": -11.75,
                    "temperatureAvg": 1.01,
                    "temperatureMax": 5.81,
                    "temperatureMin": -7.73,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            },
            {
                "time": "2024-01-22T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 2.21,
                    "temperatureApparentMax": 10.44,
                    "temperatureApparentMin": -3.33,
                    "temperatureAvg": 3.95,
                    "temperatureMax": 10.44,
                    "temperatureMin": 0.19,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-23T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 2.89,
                    "temperatureApparentMax": 10.04,
                    "temperatureApparentMin": -3.21,
                    "temperatureAvg": 4.95,
                    "temperatureMax": 10.04,
                    "temperatureMin": 0.78,
                    "weatherCodeMax": 1001,
                    "weatherCodeMin": 1001
                }
            },
            {
                "time": "2024-01-24T05:00:00Z",
                "values": {
                    "temperatureApparentAvg": 8.27,
                    "temperatureApparentMax": 12.99,
                    "temperatureApparentMin": 0.56,
                    "temperatureAvg": 9.02,
                    "temperatureMax": 12.99,
                    "temperatureMin": 3.64,
                    "weatherCodeMax": 1000,
                    "weatherCodeMin": 1000
                }
            }
        ]
    },
    "location": {
        "lat": 42.50693893432617,
        "lon": 1.5212466716766357,
        "name": "Andorra la Vella, AD500, Andorra",
        "type": "town"
    }
}