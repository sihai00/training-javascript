/*
* 目标：html符号转实体
* 解释：将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体
* 例如：convert("Dolce & Gabbana") 应该返回 Dolce &​amp; Gabbana
* 
* */

function convert(str) {
  if (typeof str !== 'string') return 

  str = str.replace(/[&<>\"\']/g, (math) => {
    switch(math){
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '\"':
        return '&quot;'
      case '\'':
        return '&apos;'
      default:
        break
    }
  })

  return str;
}

convert("Dolce & &<>\"' Gabbana");