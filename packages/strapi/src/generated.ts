// noinspection ES6UnusedImports
import type {} from 'graphql'
import type { GraphQLClient } from 'graphql-request'
import type * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: string; output: string }
  I18NLocaleCode: { input: string; output: string }
  JSON: { input: any; output: any }
  PostSectionsDynamicZoneInput: { input: any; output: any }
  Upload: { input: any; output: any }
}

export interface Author {
  __typename?: 'Author'
  avatar?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  firstname?: Maybe<Scalars['String']['output']>
  lastname?: Maybe<Scalars['String']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<AuthorRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  seo?: Maybe<ComponentSharedSeo>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface AuthorLocalizationsArgs {
  filters?: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface AuthorEntity {
  __typename?: 'AuthorEntity'
  attributes?: Maybe<Author>
  id?: Maybe<Scalars['ID']['output']>
}

export interface AuthorEntityResponse {
  __typename?: 'AuthorEntityResponse'
  data?: Maybe<AuthorEntity>
}

export interface AuthorEntityResponseCollection {
  __typename?: 'AuthorEntityResponseCollection'
  data: Array<AuthorEntity>
  meta: ResponseCollectionMeta
}

export interface AuthorFiltersInput {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  firstname?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  lastname?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<AuthorFiltersInput>
  not?: InputMaybe<AuthorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export interface AuthorInput {
  avatar?: InputMaybe<Scalars['ID']['input']>
  firstname?: InputMaybe<Scalars['String']['input']>
  lastname?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  seo?: InputMaybe<ComponentSharedSeoInput>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export interface AuthorRelationResponseCollection {
  __typename?: 'AuthorRelationResponseCollection'
  data: Array<AuthorEntity>
}

export interface BooleanFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export interface ComponentSectionImages {
  __typename?: 'ComponentSectionImages'
  Gallery?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  medias: UploadFileRelationResponseCollection
}

export interface ComponentSectionImagesMediasArgs {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface ComponentSectionRichtext {
  __typename?: 'ComponentSectionRichtext'
  content?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export interface ComponentSharedSeo {
  __typename?: 'ComponentSharedSeo'
  canonicalURL?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  keywords?: Maybe<Scalars['String']['output']>
  metaDescription?: Maybe<Scalars['String']['output']>
  metaRobots?: Maybe<Scalars['String']['output']>
  metaTitle?: Maybe<Scalars['String']['output']>
}

export interface ComponentSharedSeoFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  canonicalURL?: InputMaybe<StringFilterInput>
  keywords?: InputMaybe<StringFilterInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaRobots?: InputMaybe<StringFilterInput>
  metaTitle?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedSeoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
}

export interface ComponentSharedSeoInput {
  canonicalURL?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  keywords?: InputMaybe<Scalars['String']['input']>
  metaDescription?: InputMaybe<Scalars['String']['input']>
  metaRobots?: InputMaybe<Scalars['String']['input']>
  metaTitle?: InputMaybe<Scalars['String']['input']>
}

export interface DateTimeFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export interface Error {
  __typename?: 'Error'
  code: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
}

export interface FileInfoInput {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export interface FloatFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type GenericMorph = Author | ComponentSectionImages | ComponentSectionRichtext | ComponentSharedSeo | Home | I18NLocale | Label | Post | PostTag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser

export interface Home {
  __typename?: 'Home'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<HomeRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  seo?: Maybe<ComponentSharedSeo>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface HomeLocalizationsArgs {
  publicationState?: InputMaybe<PublicationState>
}

export interface HomeEntity {
  __typename?: 'HomeEntity'
  attributes?: Maybe<Home>
  id?: Maybe<Scalars['ID']['output']>
}

export interface HomeEntityResponse {
  __typename?: 'HomeEntityResponse'
  data?: Maybe<HomeEntity>
}

export interface HomeInput {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  seo?: InputMaybe<ComponentSharedSeoInput>
}

export interface HomeRelationResponseCollection {
  __typename?: 'HomeRelationResponseCollection'
  data: Array<HomeEntity>
}

export interface I18NLocale {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface I18NLocaleEntity {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']['output']>
}

export interface I18NLocaleEntityResponse {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export interface I18NLocaleEntityResponseCollection {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export interface I18NLocaleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export interface IdFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export interface IntFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export interface JsonFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export interface Label {
  __typename?: 'Label'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  key?: Maybe<Scalars['String']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<LabelRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export interface LabelLocalizationsArgs {
  filters?: InputMaybe<LabelFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface LabelEntity {
  __typename?: 'LabelEntity'
  attributes?: Maybe<Label>
  id?: Maybe<Scalars['ID']['output']>
}

export interface LabelEntityResponse {
  __typename?: 'LabelEntityResponse'
  data?: Maybe<LabelEntity>
}

export interface LabelEntityResponseCollection {
  __typename?: 'LabelEntityResponseCollection'
  data: Array<LabelEntity>
  meta: ResponseCollectionMeta
}

export interface LabelFiltersInput {
  and?: InputMaybe<Array<InputMaybe<LabelFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  key?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<LabelFiltersInput>
  not?: InputMaybe<LabelFiltersInput>
  or?: InputMaybe<Array<InputMaybe<LabelFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  value?: InputMaybe<StringFilterInput>
}

export interface LabelInput {
  key?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

export interface LabelRelationResponseCollection {
  __typename?: 'LabelRelationResponseCollection'
  data: Array<LabelEntity>
}

export interface Mutation {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createAuthor?: Maybe<AuthorEntityResponse>
  createAuthorLocalization?: Maybe<AuthorEntityResponse>
  createHomeLocalization?: Maybe<HomeEntityResponse>
  createLabel?: Maybe<LabelEntityResponse>
  createLabelLocalization?: Maybe<LabelEntityResponse>
  createPost?: Maybe<PostEntityResponse>
  createPostLocalization?: Maybe<PostEntityResponse>
  createPostTag?: Maybe<PostTagEntityResponse>
  createPostTagLocalization?: Maybe<PostTagEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteAuthor?: Maybe<AuthorEntityResponse>
  deleteHome?: Maybe<HomeEntityResponse>
  deleteLabel?: Maybe<LabelEntityResponse>
  deletePost?: Maybe<PostEntityResponse>
  deletePostTag?: Maybe<PostTagEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateAuthor?: Maybe<AuthorEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateHome?: Maybe<HomeEntityResponse>
  updateLabel?: Maybe<LabelEntityResponse>
  updatePost?: Maybe<PostEntityResponse>
  updatePostTag?: Maybe<PostTagEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export interface MutationChangePasswordArgs {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export interface MutationCreateAuthorArgs {
  data: AuthorInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreateAuthorLocalizationArgs {
  data?: InputMaybe<AuthorInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreateHomeLocalizationArgs {
  data?: InputMaybe<HomeInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreateLabelArgs {
  data: LabelInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreateLabelLocalizationArgs {
  data?: InputMaybe<LabelInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreatePostArgs {
  data: PostInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreatePostLocalizationArgs {
  data?: InputMaybe<PostInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreatePostTagArgs {
  data: PostTagInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreatePostTagLocalizationArgs {
  data?: InputMaybe<PostTagInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationCreateUploadFileArgs {
  data: UploadFileInput
}

export interface MutationCreateUploadFolderArgs {
  data: UploadFolderInput
}

export interface MutationCreateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput
}

export interface MutationCreateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput
}

export interface MutationDeleteAuthorArgs {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationDeleteHomeArgs {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationDeleteLabelArgs {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationDeletePostArgs {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationDeletePostTagArgs {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationDeleteUploadFileArgs {
  id: Scalars['ID']['input']
}

export interface MutationDeleteUploadFolderArgs {
  id: Scalars['ID']['input']
}

export interface MutationDeleteUsersPermissionsRoleArgs {
  id: Scalars['ID']['input']
}

export interface MutationDeleteUsersPermissionsUserArgs {
  id: Scalars['ID']['input']
}

export interface MutationEmailConfirmationArgs {
  confirmation: Scalars['String']['input']
}

export interface MutationForgotPasswordArgs {
  email: Scalars['String']['input']
}

export interface MutationLoginArgs {
  input: UsersPermissionsLoginInput
}

export interface MutationMultipleUploadArgs {
  field?: InputMaybe<Scalars['String']['input']>
  files: Array<InputMaybe<Scalars['Upload']['input']>>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export interface MutationRegisterArgs {
  input: UsersPermissionsRegisterInput
}

export interface MutationRemoveFileArgs {
  id: Scalars['ID']['input']
}

export interface MutationResetPasswordArgs {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export interface MutationUpdateAuthorArgs {
  data: AuthorInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationUpdateFileInfoArgs {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export interface MutationUpdateHomeArgs {
  data: HomeInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationUpdateLabelArgs {
  data: LabelInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationUpdatePostArgs {
  data: PostInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationUpdatePostTagArgs {
  data: PostTagInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface MutationUpdateUploadFileArgs {
  data: UploadFileInput
  id: Scalars['ID']['input']
}

export interface MutationUpdateUploadFolderArgs {
  data: UploadFolderInput
  id: Scalars['ID']['input']
}

export interface MutationUpdateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export interface MutationUpdateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export interface MutationUploadArgs {
  field?: InputMaybe<Scalars['String']['input']>
  file: Scalars['Upload']['input']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export interface Pagination {
  __typename?: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export interface PaginationArg {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export interface Post {
  __typename?: 'Post'
  author?: Maybe<AuthorEntityResponse>
  cover?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<PostRelationResponseCollection>
  post_tags?: Maybe<PostTagRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sections?: Maybe<Array<Maybe<PostSectionsDynamicZone>>>
  seo?: Maybe<ComponentSharedSeo>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface PostLocalizationsArgs {
  filters?: InputMaybe<PostFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface PostPost_TagsArgs {
  filters?: InputMaybe<PostTagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface PostEntity {
  __typename?: 'PostEntity'
  attributes?: Maybe<Post>
  id?: Maybe<Scalars['ID']['output']>
}

export interface PostEntityResponse {
  __typename?: 'PostEntityResponse'
  data?: Maybe<PostEntity>
}

export interface PostEntityResponseCollection {
  __typename?: 'PostEntityResponseCollection'
  data: Array<PostEntity>
  meta: ResponseCollectionMeta
}

export interface PostFiltersInput {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>
  author?: InputMaybe<AuthorFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<PostFiltersInput>
  not?: InputMaybe<PostFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>
  post_tags?: InputMaybe<PostTagFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export interface PostInput {
  author?: InputMaybe<Scalars['ID']['input']>
  cover?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  post_tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<Array<Scalars['PostSectionsDynamicZoneInput']['input']>>
  seo?: InputMaybe<ComponentSharedSeoInput>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export interface PostRelationResponseCollection {
  __typename?: 'PostRelationResponseCollection'
  data: Array<PostEntity>
}

export type PostSectionsDynamicZone = ComponentSectionImages | ComponentSectionRichtext | Error

export interface PostTag {
  __typename?: 'PostTag'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<PostTagRelationResponseCollection>
  name?: Maybe<Scalars['String']['output']>
  posts?: Maybe<PostRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface PostTagLocalizationsArgs {
  filters?: InputMaybe<PostTagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface PostTagPostsArgs {
  filters?: InputMaybe<PostFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface PostTagEntity {
  __typename?: 'PostTagEntity'
  attributes?: Maybe<PostTag>
  id?: Maybe<Scalars['ID']['output']>
}

export interface PostTagEntityResponse {
  __typename?: 'PostTagEntityResponse'
  data?: Maybe<PostTagEntity>
}

export interface PostTagEntityResponseCollection {
  __typename?: 'PostTagEntityResponseCollection'
  data: Array<PostTagEntity>
  meta: ResponseCollectionMeta
}

export interface PostTagFiltersInput {
  and?: InputMaybe<Array<InputMaybe<PostTagFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<PostTagFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PostTagFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PostTagFiltersInput>>>
  posts?: InputMaybe<PostFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export interface PostTagInput {
  name?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export interface PostTagRelationResponseCollection {
  __typename?: 'PostTagRelationResponseCollection'
  data: Array<PostTagEntity>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export interface Query {
  __typename?: 'Query'
  author?: Maybe<AuthorEntityResponse>
  authors?: Maybe<AuthorEntityResponseCollection>
  home?: Maybe<HomeEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  label?: Maybe<LabelEntityResponse>
  labels?: Maybe<LabelEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  post?: Maybe<PostEntityResponse>
  postTag?: Maybe<PostTagEntityResponse>
  postTags?: Maybe<PostTagEntityResponseCollection>
  posts?: Maybe<PostEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export interface QueryAuthorArgs {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface QueryAuthorsArgs {
  filters?: InputMaybe<AuthorFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryHomeArgs {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  publicationState?: InputMaybe<PublicationState>
}

export interface QueryI18NLocaleArgs {
  id?: InputMaybe<Scalars['ID']['input']>
}

export interface QueryI18NLocalesArgs {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryLabelArgs {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface QueryLabelsArgs {
  filters?: InputMaybe<LabelFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryPostArgs {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface QueryPostTagArgs {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export interface QueryPostTagsArgs {
  filters?: InputMaybe<PostTagFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryPostsArgs {
  filters?: InputMaybe<PostFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryUploadFileArgs {
  id?: InputMaybe<Scalars['ID']['input']>
}

export interface QueryUploadFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryUploadFolderArgs {
  id?: InputMaybe<Scalars['ID']['input']>
}

export interface QueryUploadFoldersArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryUsersPermissionsRoleArgs {
  id?: InputMaybe<Scalars['ID']['input']>
}

export interface QueryUsersPermissionsRolesArgs {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface QueryUsersPermissionsUserArgs {
  id?: InputMaybe<Scalars['ID']['input']>
}

export interface QueryUsersPermissionsUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface ResponseCollectionMeta {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export interface StringFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export interface UploadFile {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']['output']>
  caption?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  ext?: Maybe<Scalars['String']['output']>
  formats?: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height?: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl?: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata?: Maybe<Scalars['JSON']['output']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export interface UploadFileEntity {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']['output']>
}

export interface UploadFileEntityResponse {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export interface UploadFileEntityResponseCollection {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export interface UploadFileFiltersInput {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export interface UploadFileInput {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  ext?: InputMaybe<Scalars['String']['input']>
  folder?: InputMaybe<Scalars['ID']['input']>
  folderPath?: InputMaybe<Scalars['String']['input']>
  formats?: InputMaybe<Scalars['JSON']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  mime?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  previewUrl?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export interface UploadFileRelationResponseCollection {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export interface UploadFolder {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']['output']
  pathId: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface UploadFolderChildrenArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface UploadFolderFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface UploadFolderEntity {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']['output']>
}

export interface UploadFolderEntityResponse {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export interface UploadFolderEntityResponseCollection {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export interface UploadFolderFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export interface UploadFolderInput {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Scalars['ID']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  pathId?: InputMaybe<Scalars['Int']['input']>
}

export interface UploadFolderRelationResponseCollection {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export interface UsersPermissionsCreateRolePayload {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export interface UsersPermissionsDeleteRolePayload {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export interface UsersPermissionsLoginInput {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export interface UsersPermissionsLoginPayload {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export interface UsersPermissionsMe {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export interface UsersPermissionsMeRole {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export interface UsersPermissionsPasswordPayload {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']['output']
}

export interface UsersPermissionsPermission {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export interface UsersPermissionsPermissionEntity {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']['output']>
}

export interface UsersPermissionsPermissionFiltersInput {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export interface UsersPermissionsPermissionRelationResponseCollection {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export interface UsersPermissionsRegisterInput {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export interface UsersPermissionsRole {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export interface UsersPermissionsRolePermissionsArgs {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface UsersPermissionsRoleUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export interface UsersPermissionsRoleEntity {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']['output']>
}

export interface UsersPermissionsRoleEntityResponse {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export interface UsersPermissionsRoleEntityResponseCollection {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export interface UsersPermissionsRoleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export interface UsersPermissionsRoleInput {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export interface UsersPermissionsUpdateRolePayload {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export interface UsersPermissionsUser {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export interface UsersPermissionsUserEntity {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']['output']>
}

export interface UsersPermissionsUserEntityResponse {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export interface UsersPermissionsUserEntityResponseCollection {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export interface UsersPermissionsUserFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export interface UsersPermissionsUserInput {
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export interface UsersPermissionsUserRelationResponseCollection {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type UpdateHomeMutationVariables = Exact<{ [key: string]: never }>

export interface UpdateHomeMutation { __typename?: 'Mutation'; updateHome?: { __typename?: 'HomeEntityResponse'; data?: { __typename?: 'HomeEntity'; id?: string | null } | null } | null }

export interface ImageFragment { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null }

export interface PostTagFragment { __typename?: 'PostTagEntity'; id?: string | null; attributes?: { __typename?: 'PostTag'; name?: string | null } | null }

export interface SeoFragment { __typename?: 'ComponentSharedSeo'; metaDescription?: string | null; metaTitle?: string | null; metaRobots?: string | null; keywords?: string | null; canonicalURL?: string | null }

export interface AuthorFragment { __typename?: 'Author'; firstname?: string | null; lastname?: string | null; title?: string | null; slug?: string | null; avatar?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null }

export interface PostFragment { __typename?: 'Post'; updatedAt?: string | null; publishedAt?: string | null; title?: string | null; slug?: string | null; description?: string | null; cover?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null; post_tags?: { __typename?: 'PostTagRelationResponseCollection'; data: Array<{ __typename?: 'PostTagEntity'; id?: string | null; attributes?: { __typename?: 'PostTag'; name?: string | null } | null }> } | null; author?: { __typename?: 'AuthorEntityResponse'; data?: { __typename?: 'AuthorEntity'; attributes?: { __typename?: 'Author'; firstname?: string | null; lastname?: string | null; title?: string | null; slug?: string | null; avatar?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null } | null } | null } | null; sections?: Array<{ __typename: 'ComponentSectionImages'; Gallery?: boolean | null; medias: { __typename?: 'UploadFileRelationResponseCollection'; data: Array<{ __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null }> } } | { __typename: 'ComponentSectionRichtext'; content?: string | null } | { __typename: 'Error' } | null> | null }

export type GetLabelsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
}>

export interface GetLabelsQuery { __typename?: 'Query'; content?: { __typename?: 'LabelEntityResponseCollection'; data: Array<{ __typename?: 'LabelEntity'; id?: string | null; attributes?: { __typename?: 'Label'; key?: string | null; value?: string | null } | null }>; meta: { __typename?: 'ResponseCollectionMeta'; pagination: { __typename?: 'Pagination'; pageCount: number } } } | null }

export type GetPostsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}>

export interface GetPostsQuery { __typename?: 'Query'; content?: { __typename?: 'PostEntityResponseCollection'; data: Array<{ __typename?: 'PostEntity'; id?: string | null; attributes?: { __typename?: 'Post'; updatedAt?: string | null; publishedAt?: string | null; title?: string | null; slug?: string | null; description?: string | null; cover?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null; post_tags?: { __typename?: 'PostTagRelationResponseCollection'; data: Array<{ __typename?: 'PostTagEntity'; id?: string | null; attributes?: { __typename?: 'PostTag'; name?: string | null } | null }> } | null; author?: { __typename?: 'AuthorEntityResponse'; data?: { __typename?: 'AuthorEntity'; attributes?: { __typename?: 'Author'; firstname?: string | null; lastname?: string | null; title?: string | null; slug?: string | null; avatar?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null } | null } | null } | null; sections?: Array<{ __typename: 'ComponentSectionImages'; Gallery?: boolean | null; medias: { __typename?: 'UploadFileRelationResponseCollection'; data: Array<{ __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null }> } } | { __typename: 'ComponentSectionRichtext'; content?: string | null } | { __typename: 'Error' } | null> | null } | null }> } | null }

export type GetPostQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}>

export interface GetPostQuery { __typename?: 'Query'; content?: { __typename?: 'PostEntityResponseCollection'; data: Array<{ __typename?: 'PostEntity'; id?: string | null; attributes?: { __typename?: 'Post'; updatedAt?: string | null; publishedAt?: string | null; title?: string | null; slug?: string | null; description?: string | null; seo?: { __typename?: 'ComponentSharedSeo'; metaDescription?: string | null; metaTitle?: string | null; metaRobots?: string | null; keywords?: string | null; canonicalURL?: string | null } | null; localizations?: { __typename?: 'PostRelationResponseCollection'; data: Array<{ __typename?: 'PostEntity'; attributes?: { __typename?: 'Post'; slug?: string | null; locale?: string | null } | null }> } | null; cover?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null; post_tags?: { __typename?: 'PostTagRelationResponseCollection'; data: Array<{ __typename?: 'PostTagEntity'; id?: string | null; attributes?: { __typename?: 'PostTag'; name?: string | null } | null }> } | null; author?: { __typename?: 'AuthorEntityResponse'; data?: { __typename?: 'AuthorEntity'; attributes?: { __typename?: 'Author'; firstname?: string | null; lastname?: string | null; title?: string | null; slug?: string | null; avatar?: { __typename?: 'UploadFileEntityResponse'; data?: { __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null } | null } | null } | null } | null } | null; sections?: Array<{ __typename: 'ComponentSectionImages'; Gallery?: boolean | null; medias: { __typename?: 'UploadFileRelationResponseCollection'; data: Array<{ __typename?: 'UploadFileEntity'; id?: string | null; attributes?: { __typename?: 'UploadFile'; url: string; height?: number | null; width?: number | null } | null }> } } | { __typename: 'ComponentSectionRichtext'; content?: string | null } | { __typename: 'Error' } | null> | null } | null }> } | null }

export const SeoFragmentDoc = gql`
    fragment Seo on ComponentSharedSeo {
  metaDescription
  metaTitle
  metaRobots
  keywords
  canonicalURL
}
    `
export const ImageFragmentDoc = gql`
    fragment Image on UploadFileEntity {
  id
  attributes {
    url
    height
    width
  }
}
    `
export const PostTagFragmentDoc = gql`
    fragment PostTag on PostTagEntity {
  id
  attributes {
    name
  }
}
    `
export const AuthorFragmentDoc = gql`
    fragment Author on Author {
  firstname
  lastname
  title
  slug
  avatar {
    data {
      ...Image
    }
  }
}
    ${ImageFragmentDoc}`
export const PostFragmentDoc = gql`
    fragment Post on Post {
  updatedAt
  publishedAt
  title
  slug
  description
  cover {
    data {
      ...Image
    }
  }
  post_tags {
    data {
      ...PostTag
    }
  }
  author {
    data {
      attributes {
        ...Author
      }
    }
  }
  sections {
    __typename
    ... on ComponentSectionRichtext {
      content
    }
    ... on ComponentSectionImages {
      Gallery
      medias {
        data {
          ...Image
        }
      }
    }
  }
}
    ${ImageFragmentDoc}
${PostTagFragmentDoc}
${AuthorFragmentDoc}`
export const UpdateHomeDocument = gql`
    mutation updateHome {
  updateHome(data: {seo: {keywords: "a"}}) {
    data {
      id
    }
  }
}
    `
export const GetLabelsDocument = gql`
    query getLabels($locale: I18NLocaleCode, $pagination: PaginationArg) {
  content: labels(locale: $locale, pagination: $pagination) {
    data {
      id
      attributes {
        key
        value
      }
    }
    meta {
      pagination {
        pageCount
      }
    }
  }
}
    `
export const GetPostsDocument = gql`
    query getPosts($locale: I18NLocaleCode) {
  content: posts(locale: $locale) {
    data {
      id
      attributes {
        ...Post
      }
    }
  }
}
    ${PostFragmentDoc}`
export const GetPostDocument = gql`
    query getPost($slug: String, $locale: I18NLocaleCode) {
  content: posts(
    locale: $locale
    filters: {slug: {eq: $slug}}
    pagination: {limit: 1}
  ) {
    data {
      id
      attributes {
        ...Post
        seo {
          ...Seo
        }
        localizations {
          data {
            attributes {
              slug
              locale
            }
          }
        }
      }
    }
  }
}
    ${PostFragmentDoc}
${SeoFragmentDoc}`

export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updateHome(variables?: UpdateHomeMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateHomeMutation> {
      return withWrapper(wrappedRequestHeaders => client.request<UpdateHomeMutation>(UpdateHomeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateHome', 'mutation')
    },
    getLabels(variables?: GetLabelsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetLabelsQuery> {
      return withWrapper(wrappedRequestHeaders => client.request<GetLabelsQuery>(GetLabelsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getLabels', 'query')
    },
    getPosts(variables?: GetPostsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPostsQuery> {
      return withWrapper(wrappedRequestHeaders => client.request<GetPostsQuery>(GetPostsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getPosts', 'query')
    },
    getPost(variables?: GetPostQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPostQuery> {
      return withWrapper(wrappedRequestHeaders => client.request<GetPostQuery>(GetPostDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getPost', 'query')
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
