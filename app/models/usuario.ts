import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column({ serializeAs: null }) // Não retorna no JSON
  public senha: string

  @column.dateTime({ autoCreate: true })
  public dataCadastro: DateTime

  @column.dateTime()
  public ultimoAcesso: DateTime | null

  @column()
  public ativo: boolean
}
