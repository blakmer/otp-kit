const GetFillFromExt = ext => {
  switch (ext) {
    case 'PDF':
      return 'error'
    case 'DOC':
    case 'DOCX':
      return 'blue'
    case 'XLS':
    case 'XLSX':
      return 'primary'
    case 'ZIP':
    case 'RAR':
      return 'highlighted'
    case 'JPG':
    case 'JPEG':
    case 'PNG':
    case 'BMP':
      return 'highlighted-hover'
    case 'MPG':
    case 'MPEG':
    case 'AVI':
    case 'MP4':
      return 'chart-purple'
    default:
      return 'text-disabled'
  }
}
export default GetFillFromExt
