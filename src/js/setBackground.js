import '../assets/backgrounds/fog_mist.png'
import '../assets/backgrounds/heavy_rain.png'
import '../assets/backgrounds/heavy_snow.png'
import '../assets/backgrounds/light_rain.png'
import '../assets/backgrounds/light_snow.png'
import '../assets/backgrounds/overcast.png'
import '../assets/backgrounds/storm.png'
import '../assets/backgrounds/sunny.png'

export function setBackground(cond_code) {
  const code = cond_code

  switch (code) {
    case 1030:
    case 1135:
    case 1147:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/fog_mist.png')"
      break
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1201:
    case 1243:
    case 1246:
    case 1252:
    case 1264:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/heavy_rain.png')"
      break
    case 1114:
    case 1117:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1258:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/heavy_snow.png')"
      break
    case 1063:
    case 1072:
    case 1150:
    case 1153:
    case 1168:
    case 1171:
    case 1180:
    case 1183:
    case 1198:
    case 1240:
    case 1249:
    case 1261:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/light_rain.png')"
      break
    case 1066:
    case 1069:
    case 1204:
    case 1207:
    case 1210:
    case 1213:
    case 1255:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/light_snow.png')"
      break
    case 1006:
    case 1009:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/overcast.png')"
      break
    case 1087:
    case 1237:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/storm.png')"
      break
    case 1000:
    case 1003:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/sunny.png')"
      break
    default:
      document.body.style.backgroundImage =
        "url('./assets/backgrounds/sunny.png')"
  }
}
