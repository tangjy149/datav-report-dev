import {
  ElCard, ElRow, ElCol,
  ElMenu, ElMenuItem, ElRadioButton, ElRadioGroup, ElDatePicker,
  ElTable, ElPagination, ElTableColumn,
  ElButton
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElCard)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElRadioButton)
  app.use(ElRadioGroup)
  app.use(ElDatePicker)
  app.use(ElTable)
  app.use(ElPagination)
  app.use(ElTableColumn)
  app.use(ElButton)
}
