
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PortalStudent
 * 
 */
export type PortalStudent = $Result.DefaultSelection<Prisma.$PortalStudentPayload>
/**
 * Model PortalFaculty
 * 
 */
export type PortalFaculty = $Result.DefaultSelection<Prisma.$PortalFacultyPayload>
/**
 * Model FacultyStudentMap
 * 
 */
export type FacultyStudentMap = $Result.DefaultSelection<Prisma.$FacultyStudentMapPayload>
/**
 * Model PortalMessage
 * 
 */
export type PortalMessage = $Result.DefaultSelection<Prisma.$PortalMessagePayload>
/**
 * Model PortalDocument
 * 
 */
export type PortalDocument = $Result.DefaultSelection<Prisma.$PortalDocumentPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model StudentAnnouncement
 * 
 */
export type StudentAnnouncement = $Result.DefaultSelection<Prisma.$StudentAnnouncementPayload>
/**
 * Model AttendanceRecord
 * 
 */
export type AttendanceRecord = $Result.DefaultSelection<Prisma.$AttendanceRecordPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model AssignmentSubmission
 * 
 */
export type AssignmentSubmission = $Result.DefaultSelection<Prisma.$AssignmentSubmissionPayload>
/**
 * Model PortalRefreshToken
 * 
 */
export type PortalRefreshToken = $Result.DefaultSelection<Prisma.$PortalRefreshTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PortalStudents
 * const portalStudents = await prisma.portalStudent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PortalStudents
   * const portalStudents = await prisma.portalStudent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList | "$transaction">) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.portalStudent`: Exposes CRUD operations for the **PortalStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalStudents
    * const portalStudents = await prisma.portalStudent.findMany()
    * ```
    */
  get portalStudent(): Prisma.PortalStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portalFaculty`: Exposes CRUD operations for the **PortalFaculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalFaculties
    * const portalFaculties = await prisma.portalFaculty.findMany()
    * ```
    */
  get portalFaculty(): Prisma.PortalFacultyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultyStudentMap`: Exposes CRUD operations for the **FacultyStudentMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyStudentMaps
    * const facultyStudentMaps = await prisma.facultyStudentMap.findMany()
    * ```
    */
  get facultyStudentMap(): Prisma.FacultyStudentMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portalMessage`: Exposes CRUD operations for the **PortalMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalMessages
    * const portalMessages = await prisma.portalMessage.findMany()
    * ```
    */
  get portalMessage(): Prisma.PortalMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portalDocument`: Exposes CRUD operations for the **PortalDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalDocuments
    * const portalDocuments = await prisma.portalDocument.findMany()
    * ```
    */
  get portalDocument(): Prisma.PortalDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAnnouncement`: Exposes CRUD operations for the **StudentAnnouncement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAnnouncements
    * const studentAnnouncements = await prisma.studentAnnouncement.findMany()
    * ```
    */
  get studentAnnouncement(): Prisma.StudentAnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceRecord`: Exposes CRUD operations for the **AttendanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRecords
    * const attendanceRecords = await prisma.attendanceRecord.findMany()
    * ```
    */
  get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentSubmission`: Exposes CRUD operations for the **AssignmentSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentSubmissions
    * const assignmentSubmissions = await prisma.assignmentSubmission.findMany()
    * ```
    */
  get assignmentSubmission(): Prisma.AssignmentSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portalRefreshToken`: Exposes CRUD operations for the **PortalRefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalRefreshTokens
    * const portalRefreshTokens = await prisma.portalRefreshToken.findMany()
    * ```
    */
  get portalRefreshToken(): Prisma.PortalRefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PortalStudent: 'PortalStudent',
    PortalFaculty: 'PortalFaculty',
    FacultyStudentMap: 'FacultyStudentMap',
    PortalMessage: 'PortalMessage',
    PortalDocument: 'PortalDocument',
    Announcement: 'Announcement',
    StudentAnnouncement: 'StudentAnnouncement',
    AttendanceRecord: 'AttendanceRecord',
    Assignment: 'Assignment',
    AssignmentSubmission: 'AssignmentSubmission',
    PortalRefreshToken: 'PortalRefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "portalStudent" | "portalFaculty" | "facultyStudentMap" | "portalMessage" | "portalDocument" | "announcement" | "studentAnnouncement" | "attendanceRecord" | "assignment" | "assignmentSubmission" | "portalRefreshToken"
      txIsolationLevel: never
    }
    model: {
      PortalStudent: {
        payload: Prisma.$PortalStudentPayload<ExtArgs>
        fields: Prisma.PortalStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>
          }
          findFirst: {
            args: Prisma.PortalStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>
          }
          findMany: {
            args: Prisma.PortalStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>[]
          }
          create: {
            args: Prisma.PortalStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>
          }
          createMany: {
            args: Prisma.PortalStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortalStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>
          }
          update: {
            args: Prisma.PortalStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>
          }
          deleteMany: {
            args: Prisma.PortalStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortalStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortalStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalStudentPayload>
          }
          aggregate: {
            args: Prisma.PortalStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortalStudent>
          }
          groupBy: {
            args: Prisma.PortalStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortalStudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortalStudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortalStudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortalStudentCountArgs<ExtArgs>
            result: $Utils.Optional<PortalStudentCountAggregateOutputType> | number
          }
        }
      }
      PortalFaculty: {
        payload: Prisma.$PortalFacultyPayload<ExtArgs>
        fields: Prisma.PortalFacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalFacultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalFacultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>
          }
          findFirst: {
            args: Prisma.PortalFacultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalFacultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>
          }
          findMany: {
            args: Prisma.PortalFacultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>[]
          }
          create: {
            args: Prisma.PortalFacultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>
          }
          createMany: {
            args: Prisma.PortalFacultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortalFacultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>
          }
          update: {
            args: Prisma.PortalFacultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>
          }
          deleteMany: {
            args: Prisma.PortalFacultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortalFacultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortalFacultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalFacultyPayload>
          }
          aggregate: {
            args: Prisma.PortalFacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortalFaculty>
          }
          groupBy: {
            args: Prisma.PortalFacultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortalFacultyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortalFacultyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortalFacultyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortalFacultyCountArgs<ExtArgs>
            result: $Utils.Optional<PortalFacultyCountAggregateOutputType> | number
          }
        }
      }
      FacultyStudentMap: {
        payload: Prisma.$FacultyStudentMapPayload<ExtArgs>
        fields: Prisma.FacultyStudentMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyStudentMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyStudentMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>
          }
          findFirst: {
            args: Prisma.FacultyStudentMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyStudentMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>
          }
          findMany: {
            args: Prisma.FacultyStudentMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>[]
          }
          create: {
            args: Prisma.FacultyStudentMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>
          }
          createMany: {
            args: Prisma.FacultyStudentMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacultyStudentMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>
          }
          update: {
            args: Prisma.FacultyStudentMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>
          }
          deleteMany: {
            args: Prisma.FacultyStudentMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyStudentMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyStudentMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyStudentMapPayload>
          }
          aggregate: {
            args: Prisma.FacultyStudentMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyStudentMap>
          }
          groupBy: {
            args: Prisma.FacultyStudentMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyStudentMapGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FacultyStudentMapFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FacultyStudentMapAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FacultyStudentMapCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyStudentMapCountAggregateOutputType> | number
          }
        }
      }
      PortalMessage: {
        payload: Prisma.$PortalMessagePayload<ExtArgs>
        fields: Prisma.PortalMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>
          }
          findFirst: {
            args: Prisma.PortalMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>
          }
          findMany: {
            args: Prisma.PortalMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>[]
          }
          create: {
            args: Prisma.PortalMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>
          }
          createMany: {
            args: Prisma.PortalMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortalMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>
          }
          update: {
            args: Prisma.PortalMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>
          }
          deleteMany: {
            args: Prisma.PortalMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortalMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortalMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalMessagePayload>
          }
          aggregate: {
            args: Prisma.PortalMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortalMessage>
          }
          groupBy: {
            args: Prisma.PortalMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortalMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortalMessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortalMessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortalMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PortalMessageCountAggregateOutputType> | number
          }
        }
      }
      PortalDocument: {
        payload: Prisma.$PortalDocumentPayload<ExtArgs>
        fields: Prisma.PortalDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>
          }
          findFirst: {
            args: Prisma.PortalDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>
          }
          findMany: {
            args: Prisma.PortalDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>[]
          }
          create: {
            args: Prisma.PortalDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>
          }
          createMany: {
            args: Prisma.PortalDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortalDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>
          }
          update: {
            args: Prisma.PortalDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>
          }
          deleteMany: {
            args: Prisma.PortalDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortalDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortalDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalDocumentPayload>
          }
          aggregate: {
            args: Prisma.PortalDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortalDocument>
          }
          groupBy: {
            args: Prisma.PortalDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortalDocumentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortalDocumentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortalDocumentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortalDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<PortalDocumentCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AnnouncementFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AnnouncementAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      StudentAnnouncement: {
        payload: Prisma.$StudentAnnouncementPayload<ExtArgs>
        fields: Prisma.StudentAnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>
          }
          findFirst: {
            args: Prisma.StudentAnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>
          }
          findMany: {
            args: Prisma.StudentAnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>[]
          }
          create: {
            args: Prisma.StudentAnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>
          }
          createMany: {
            args: Prisma.StudentAnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentAnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>
          }
          update: {
            args: Prisma.StudentAnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.StudentAnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentAnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnnouncementPayload>
          }
          aggregate: {
            args: Prisma.StudentAnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAnnouncement>
          }
          groupBy: {
            args: Prisma.StudentAnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAnnouncementGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentAnnouncementFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAnnouncementAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentAnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAnnouncementCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRecord: {
        payload: Prisma.$AttendanceRecordPayload<ExtArgs>
        fields: Prisma.AttendanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findMany: {
            args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          create: {
            args: Prisma.AttendanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          createMany: {
            args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          update: {
            args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRecord>
          }
          groupBy: {
            args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AttendanceRecordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AttendanceRecordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AttendanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AssignmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AssignmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      AssignmentSubmission: {
        payload: Prisma.$AssignmentSubmissionPayload<ExtArgs>
        fields: Prisma.AssignmentSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          findFirst: {
            args: Prisma.AssignmentSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          findMany: {
            args: Prisma.AssignmentSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[]
          }
          create: {
            args: Prisma.AssignmentSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          createMany: {
            args: Prisma.AssignmentSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssignmentSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          update: {
            args: Prisma.AssignmentSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>
          }
          aggregate: {
            args: Prisma.AssignmentSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentSubmission>
          }
          groupBy: {
            args: Prisma.AssignmentSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentSubmissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AssignmentSubmissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AssignmentSubmissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AssignmentSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentSubmissionCountAggregateOutputType> | number
          }
        }
      }
      PortalRefreshToken: {
        payload: Prisma.$PortalRefreshTokenPayload<ExtArgs>
        fields: Prisma.PortalRefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalRefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalRefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.PortalRefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalRefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>
          }
          findMany: {
            args: Prisma.PortalRefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>[]
          }
          create: {
            args: Prisma.PortalRefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>
          }
          createMany: {
            args: Prisma.PortalRefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortalRefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>
          }
          update: {
            args: Prisma.PortalRefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.PortalRefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortalRefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortalRefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalRefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.PortalRefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortalRefreshToken>
          }
          groupBy: {
            args: Prisma.PortalRefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortalRefreshTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortalRefreshTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortalRefreshTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortalRefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PortalRefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    portalStudent?: PortalStudentOmit
    portalFaculty?: PortalFacultyOmit
    facultyStudentMap?: FacultyStudentMapOmit
    portalMessage?: PortalMessageOmit
    portalDocument?: PortalDocumentOmit
    announcement?: AnnouncementOmit
    studentAnnouncement?: StudentAnnouncementOmit
    attendanceRecord?: AttendanceRecordOmit
    assignment?: AssignmentOmit
    assignmentSubmission?: AssignmentSubmissionOmit
    portalRefreshToken?: PortalRefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList | '$transaction'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PortalStudentCountOutputType
   */

  export type PortalStudentCountOutputType = {
    sentMessages: number
    documents: number
    mappings: number
    announcements: number
    attendance: number
    submissions: number
  }

  export type PortalStudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | PortalStudentCountOutputTypeCountSentMessagesArgs
    documents?: boolean | PortalStudentCountOutputTypeCountDocumentsArgs
    mappings?: boolean | PortalStudentCountOutputTypeCountMappingsArgs
    announcements?: boolean | PortalStudentCountOutputTypeCountAnnouncementsArgs
    attendance?: boolean | PortalStudentCountOutputTypeCountAttendanceArgs
    submissions?: boolean | PortalStudentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudentCountOutputType
     */
    select?: PortalStudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalMessageWhereInput
  }

  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalDocumentWhereInput
  }

  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyStudentMapWhereInput
  }

  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnnouncementWhereInput
  }

  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }

  /**
   * PortalStudentCountOutputType without action
   */
  export type PortalStudentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSubmissionWhereInput
  }


  /**
   * Count Type PortalFacultyCountOutputType
   */

  export type PortalFacultyCountOutputType = {
    sentMessages: number
    documents: number
    mappings: number
    announcements: number
    attendanceMarked: number
    assignments: number
  }

  export type PortalFacultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | PortalFacultyCountOutputTypeCountSentMessagesArgs
    documents?: boolean | PortalFacultyCountOutputTypeCountDocumentsArgs
    mappings?: boolean | PortalFacultyCountOutputTypeCountMappingsArgs
    announcements?: boolean | PortalFacultyCountOutputTypeCountAnnouncementsArgs
    attendanceMarked?: boolean | PortalFacultyCountOutputTypeCountAttendanceMarkedArgs
    assignments?: boolean | PortalFacultyCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFacultyCountOutputType
     */
    select?: PortalFacultyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalMessageWhereInput
  }

  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalDocumentWhereInput
  }

  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyStudentMapWhereInput
  }

  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeCountAttendanceMarkedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }

  /**
   * PortalFacultyCountOutputType without action
   */
  export type PortalFacultyCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type AnnouncementCountOutputType
   */

  export type AnnouncementCountOutputType = {
    studentAnnouncements: number
  }

  export type AnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentAnnouncements?: boolean | AnnouncementCountOutputTypeCountStudentAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCountOutputType
     */
    select?: AnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountStudentAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnnouncementWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submissions: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PortalStudent
   */

  export type AggregatePortalStudent = {
    _count: PortalStudentCountAggregateOutputType | null
    _avg: PortalStudentAvgAggregateOutputType | null
    _sum: PortalStudentSumAggregateOutputType | null
    _min: PortalStudentMinAggregateOutputType | null
    _max: PortalStudentMaxAggregateOutputType | null
  }

  export type PortalStudentAvgAggregateOutputType = {
    year: number | null
    loginAttempts: number | null
  }

  export type PortalStudentSumAggregateOutputType = {
    year: number | null
    loginAttempts: number | null
  }

  export type PortalStudentMinAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    enrollmentNo: string | null
    year: number | null
    branch: string | null
    collegeName: string | null
    profilePhotoUrl: string | null
    bio: string | null
    googleId: string | null
    status: string | null
    assignedFacultyId: string | null
    lastLoginAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalStudentMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    enrollmentNo: string | null
    year: number | null
    branch: string | null
    collegeName: string | null
    profilePhotoUrl: string | null
    bio: string | null
    googleId: string | null
    status: string | null
    assignedFacultyId: string | null
    lastLoginAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalStudentCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    email: number
    passwordHash: number
    phone: number
    enrollmentNo: number
    year: number
    branch: number
    collegeName: number
    profilePhotoUrl: number
    bio: number
    googleId: number
    status: number
    assignedFacultyId: number
    lastLoginAt: number
    loginAttempts: number
    lockedUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortalStudentAvgAggregateInputType = {
    year?: true
    loginAttempts?: true
  }

  export type PortalStudentSumAggregateInputType = {
    year?: true
    loginAttempts?: true
  }

  export type PortalStudentMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    passwordHash?: true
    phone?: true
    enrollmentNo?: true
    year?: true
    branch?: true
    collegeName?: true
    profilePhotoUrl?: true
    bio?: true
    googleId?: true
    status?: true
    assignedFacultyId?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalStudentMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    passwordHash?: true
    phone?: true
    enrollmentNo?: true
    year?: true
    branch?: true
    collegeName?: true
    profilePhotoUrl?: true
    bio?: true
    googleId?: true
    status?: true
    assignedFacultyId?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalStudentCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    passwordHash?: true
    phone?: true
    enrollmentNo?: true
    year?: true
    branch?: true
    collegeName?: true
    profilePhotoUrl?: true
    bio?: true
    googleId?: true
    status?: true
    assignedFacultyId?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortalStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalStudent to aggregate.
     */
    where?: PortalStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalStudents to fetch.
     */
    orderBy?: PortalStudentOrderByWithRelationInput | PortalStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalStudents
    **/
    _count?: true | PortalStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalStudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalStudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalStudentMaxAggregateInputType
  }

  export type GetPortalStudentAggregateType<T extends PortalStudentAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalStudent[P]>
      : GetScalarType<T[P], AggregatePortalStudent[P]>
  }




  export type PortalStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalStudentWhereInput
    orderBy?: PortalStudentOrderByWithAggregationInput | PortalStudentOrderByWithAggregationInput[]
    by: PortalStudentScalarFieldEnum[] | PortalStudentScalarFieldEnum
    having?: PortalStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalStudentCountAggregateInputType | true
    _avg?: PortalStudentAvgAggregateInputType
    _sum?: PortalStudentSumAggregateInputType
    _min?: PortalStudentMinAggregateInputType
    _max?: PortalStudentMaxAggregateInputType
  }

  export type PortalStudentGroupByOutputType = {
    id: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName: string
    profilePhotoUrl: string | null
    bio: string | null
    googleId: string | null
    status: string
    assignedFacultyId: string | null
    lastLoginAt: Date | null
    loginAttempts: number
    lockedUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PortalStudentCountAggregateOutputType | null
    _avg: PortalStudentAvgAggregateOutputType | null
    _sum: PortalStudentSumAggregateOutputType | null
    _min: PortalStudentMinAggregateOutputType | null
    _max: PortalStudentMaxAggregateOutputType | null
  }

  type GetPortalStudentGroupByPayload<T extends PortalStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalStudentGroupByOutputType[P]>
            : GetScalarType<T[P], PortalStudentGroupByOutputType[P]>
        }
      >
    >


  export type PortalStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    enrollmentNo?: boolean
    year?: boolean
    branch?: boolean
    collegeName?: boolean
    profilePhotoUrl?: boolean
    bio?: boolean
    googleId?: boolean
    status?: boolean
    assignedFacultyId?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentMessages?: boolean | PortalStudent$sentMessagesArgs<ExtArgs>
    documents?: boolean | PortalStudent$documentsArgs<ExtArgs>
    mappings?: boolean | PortalStudent$mappingsArgs<ExtArgs>
    announcements?: boolean | PortalStudent$announcementsArgs<ExtArgs>
    attendance?: boolean | PortalStudent$attendanceArgs<ExtArgs>
    submissions?: boolean | PortalStudent$submissionsArgs<ExtArgs>
    _count?: boolean | PortalStudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portalStudent"]>



  export type PortalStudentSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    enrollmentNo?: boolean
    year?: boolean
    branch?: boolean
    collegeName?: boolean
    profilePhotoUrl?: boolean
    bio?: boolean
    googleId?: boolean
    status?: boolean
    assignedFacultyId?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortalStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "email" | "passwordHash" | "phone" | "enrollmentNo" | "year" | "branch" | "collegeName" | "profilePhotoUrl" | "bio" | "googleId" | "status" | "assignedFacultyId" | "lastLoginAt" | "loginAttempts" | "lockedUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["portalStudent"]>
  export type PortalStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | PortalStudent$sentMessagesArgs<ExtArgs>
    documents?: boolean | PortalStudent$documentsArgs<ExtArgs>
    mappings?: boolean | PortalStudent$mappingsArgs<ExtArgs>
    announcements?: boolean | PortalStudent$announcementsArgs<ExtArgs>
    attendance?: boolean | PortalStudent$attendanceArgs<ExtArgs>
    submissions?: boolean | PortalStudent$submissionsArgs<ExtArgs>
    _count?: boolean | PortalStudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PortalStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortalStudent"
    objects: {
      sentMessages: Prisma.$PortalMessagePayload<ExtArgs>[]
      documents: Prisma.$PortalDocumentPayload<ExtArgs>[]
      mappings: Prisma.$FacultyStudentMapPayload<ExtArgs>[]
      announcements: Prisma.$StudentAnnouncementPayload<ExtArgs>[]
      attendance: Prisma.$AttendanceRecordPayload<ExtArgs>[]
      submissions: Prisma.$AssignmentSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullName: string
      email: string
      passwordHash: string
      phone: string | null
      enrollmentNo: string
      year: number
      branch: string
      collegeName: string
      profilePhotoUrl: string | null
      bio: string | null
      googleId: string | null
      status: string
      assignedFacultyId: string | null
      lastLoginAt: Date | null
      loginAttempts: number
      lockedUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portalStudent"]>
    composites: {}
  }

  type PortalStudentGetPayload<S extends boolean | null | undefined | PortalStudentDefaultArgs> = $Result.GetResult<Prisma.$PortalStudentPayload, S>

  type PortalStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortalStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortalStudentCountAggregateInputType | true
    }

  export interface PortalStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortalStudent'], meta: { name: 'PortalStudent' } }
    /**
     * Find zero or one PortalStudent that matches the filter.
     * @param {PortalStudentFindUniqueArgs} args - Arguments to find a PortalStudent
     * @example
     * // Get one PortalStudent
     * const portalStudent = await prisma.portalStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortalStudentFindUniqueArgs>(args: SelectSubset<T, PortalStudentFindUniqueArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortalStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortalStudentFindUniqueOrThrowArgs} args - Arguments to find a PortalStudent
     * @example
     * // Get one PortalStudent
     * const portalStudent = await prisma.portalStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortalStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, PortalStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentFindFirstArgs} args - Arguments to find a PortalStudent
     * @example
     * // Get one PortalStudent
     * const portalStudent = await prisma.portalStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortalStudentFindFirstArgs>(args?: SelectSubset<T, PortalStudentFindFirstArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentFindFirstOrThrowArgs} args - Arguments to find a PortalStudent
     * @example
     * // Get one PortalStudent
     * const portalStudent = await prisma.portalStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortalStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, PortalStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalStudents
     * const portalStudents = await prisma.portalStudent.findMany()
     * 
     * // Get first 10 PortalStudents
     * const portalStudents = await prisma.portalStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalStudentWithIdOnly = await prisma.portalStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortalStudentFindManyArgs>(args?: SelectSubset<T, PortalStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortalStudent.
     * @param {PortalStudentCreateArgs} args - Arguments to create a PortalStudent.
     * @example
     * // Create one PortalStudent
     * const PortalStudent = await prisma.portalStudent.create({
     *   data: {
     *     // ... data to create a PortalStudent
     *   }
     * })
     * 
     */
    create<T extends PortalStudentCreateArgs>(args: SelectSubset<T, PortalStudentCreateArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortalStudents.
     * @param {PortalStudentCreateManyArgs} args - Arguments to create many PortalStudents.
     * @example
     * // Create many PortalStudents
     * const portalStudent = await prisma.portalStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortalStudentCreateManyArgs>(args?: SelectSubset<T, PortalStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PortalStudent.
     * @param {PortalStudentDeleteArgs} args - Arguments to delete one PortalStudent.
     * @example
     * // Delete one PortalStudent
     * const PortalStudent = await prisma.portalStudent.delete({
     *   where: {
     *     // ... filter to delete one PortalStudent
     *   }
     * })
     * 
     */
    delete<T extends PortalStudentDeleteArgs>(args: SelectSubset<T, PortalStudentDeleteArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortalStudent.
     * @param {PortalStudentUpdateArgs} args - Arguments to update one PortalStudent.
     * @example
     * // Update one PortalStudent
     * const portalStudent = await prisma.portalStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortalStudentUpdateArgs>(args: SelectSubset<T, PortalStudentUpdateArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortalStudents.
     * @param {PortalStudentDeleteManyArgs} args - Arguments to filter PortalStudents to delete.
     * @example
     * // Delete a few PortalStudents
     * const { count } = await prisma.portalStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortalStudentDeleteManyArgs>(args?: SelectSubset<T, PortalStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalStudents
     * const portalStudent = await prisma.portalStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortalStudentUpdateManyArgs>(args: SelectSubset<T, PortalStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalStudent.
     * @param {PortalStudentUpsertArgs} args - Arguments to update or create a PortalStudent.
     * @example
     * // Update or create a PortalStudent
     * const portalStudent = await prisma.portalStudent.upsert({
     *   create: {
     *     // ... data to create a PortalStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalStudent we want to update
     *   }
     * })
     */
    upsert<T extends PortalStudentUpsertArgs>(args: SelectSubset<T, PortalStudentUpsertArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalStudents that matches the filter.
     * @param {PortalStudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const portalStudent = await prisma.portalStudent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortalStudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PortalStudent.
     * @param {PortalStudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const portalStudent = await prisma.portalStudent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortalStudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PortalStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentCountArgs} args - Arguments to filter PortalStudents to count.
     * @example
     * // Count the number of PortalStudents
     * const count = await prisma.portalStudent.count({
     *   where: {
     *     // ... the filter for the PortalStudents we want to count
     *   }
     * })
    **/
    count<T extends PortalStudentCountArgs>(
      args?: Subset<T, PortalStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalStudentAggregateArgs>(args: Subset<T, PortalStudentAggregateArgs>): Prisma.PrismaPromise<GetPortalStudentAggregateType<T>>

    /**
     * Group by PortalStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalStudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalStudentGroupByArgs['orderBy'] }
        : { orderBy?: PortalStudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortalStudent model
   */
  readonly fields: PortalStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentMessages<T extends PortalStudent$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudent$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends PortalStudent$documentsArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudent$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mappings<T extends PortalStudent$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudent$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends PortalStudent$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudent$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance<T extends PortalStudent$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudent$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends PortalStudent$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudent$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortalStudent model
   */
  interface PortalStudentFieldRefs {
    readonly id: FieldRef<"PortalStudent", 'String'>
    readonly username: FieldRef<"PortalStudent", 'String'>
    readonly fullName: FieldRef<"PortalStudent", 'String'>
    readonly email: FieldRef<"PortalStudent", 'String'>
    readonly passwordHash: FieldRef<"PortalStudent", 'String'>
    readonly phone: FieldRef<"PortalStudent", 'String'>
    readonly enrollmentNo: FieldRef<"PortalStudent", 'String'>
    readonly year: FieldRef<"PortalStudent", 'Int'>
    readonly branch: FieldRef<"PortalStudent", 'String'>
    readonly collegeName: FieldRef<"PortalStudent", 'String'>
    readonly profilePhotoUrl: FieldRef<"PortalStudent", 'String'>
    readonly bio: FieldRef<"PortalStudent", 'String'>
    readonly googleId: FieldRef<"PortalStudent", 'String'>
    readonly status: FieldRef<"PortalStudent", 'String'>
    readonly assignedFacultyId: FieldRef<"PortalStudent", 'String'>
    readonly lastLoginAt: FieldRef<"PortalStudent", 'DateTime'>
    readonly loginAttempts: FieldRef<"PortalStudent", 'Int'>
    readonly lockedUntil: FieldRef<"PortalStudent", 'DateTime'>
    readonly createdAt: FieldRef<"PortalStudent", 'DateTime'>
    readonly updatedAt: FieldRef<"PortalStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortalStudent findUnique
   */
  export type PortalStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * Filter, which PortalStudent to fetch.
     */
    where: PortalStudentWhereUniqueInput
  }

  /**
   * PortalStudent findUniqueOrThrow
   */
  export type PortalStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * Filter, which PortalStudent to fetch.
     */
    where: PortalStudentWhereUniqueInput
  }

  /**
   * PortalStudent findFirst
   */
  export type PortalStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * Filter, which PortalStudent to fetch.
     */
    where?: PortalStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalStudents to fetch.
     */
    orderBy?: PortalStudentOrderByWithRelationInput | PortalStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalStudents.
     */
    cursor?: PortalStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalStudents.
     */
    distinct?: PortalStudentScalarFieldEnum | PortalStudentScalarFieldEnum[]
  }

  /**
   * PortalStudent findFirstOrThrow
   */
  export type PortalStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * Filter, which PortalStudent to fetch.
     */
    where?: PortalStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalStudents to fetch.
     */
    orderBy?: PortalStudentOrderByWithRelationInput | PortalStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalStudents.
     */
    cursor?: PortalStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalStudents.
     */
    distinct?: PortalStudentScalarFieldEnum | PortalStudentScalarFieldEnum[]
  }

  /**
   * PortalStudent findMany
   */
  export type PortalStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * Filter, which PortalStudents to fetch.
     */
    where?: PortalStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalStudents to fetch.
     */
    orderBy?: PortalStudentOrderByWithRelationInput | PortalStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalStudents.
     */
    cursor?: PortalStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalStudents.
     */
    distinct?: PortalStudentScalarFieldEnum | PortalStudentScalarFieldEnum[]
  }

  /**
   * PortalStudent create
   */
  export type PortalStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a PortalStudent.
     */
    data: XOR<PortalStudentCreateInput, PortalStudentUncheckedCreateInput>
  }

  /**
   * PortalStudent createMany
   */
  export type PortalStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortalStudents.
     */
    data: PortalStudentCreateManyInput | PortalStudentCreateManyInput[]
  }

  /**
   * PortalStudent update
   */
  export type PortalStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a PortalStudent.
     */
    data: XOR<PortalStudentUpdateInput, PortalStudentUncheckedUpdateInput>
    /**
     * Choose, which PortalStudent to update.
     */
    where: PortalStudentWhereUniqueInput
  }

  /**
   * PortalStudent updateMany
   */
  export type PortalStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortalStudents.
     */
    data: XOR<PortalStudentUpdateManyMutationInput, PortalStudentUncheckedUpdateManyInput>
    /**
     * Filter which PortalStudents to update
     */
    where?: PortalStudentWhereInput
    /**
     * Limit how many PortalStudents to update.
     */
    limit?: number
  }

  /**
   * PortalStudent upsert
   */
  export type PortalStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the PortalStudent to update in case it exists.
     */
    where: PortalStudentWhereUniqueInput
    /**
     * In case the PortalStudent found by the `where` argument doesn't exist, create a new PortalStudent with this data.
     */
    create: XOR<PortalStudentCreateInput, PortalStudentUncheckedCreateInput>
    /**
     * In case the PortalStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalStudentUpdateInput, PortalStudentUncheckedUpdateInput>
  }

  /**
   * PortalStudent delete
   */
  export type PortalStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    /**
     * Filter which PortalStudent to delete.
     */
    where: PortalStudentWhereUniqueInput
  }

  /**
   * PortalStudent deleteMany
   */
  export type PortalStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalStudents to delete
     */
    where?: PortalStudentWhereInput
    /**
     * Limit how many PortalStudents to delete.
     */
    limit?: number
  }

  /**
   * PortalStudent findRaw
   */
  export type PortalStudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalStudent aggregateRaw
   */
  export type PortalStudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalStudent.sentMessages
   */
  export type PortalStudent$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    where?: PortalMessageWhereInput
    orderBy?: PortalMessageOrderByWithRelationInput | PortalMessageOrderByWithRelationInput[]
    cursor?: PortalMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortalMessageScalarFieldEnum | PortalMessageScalarFieldEnum[]
  }

  /**
   * PortalStudent.documents
   */
  export type PortalStudent$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    where?: PortalDocumentWhereInput
    orderBy?: PortalDocumentOrderByWithRelationInput | PortalDocumentOrderByWithRelationInput[]
    cursor?: PortalDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortalDocumentScalarFieldEnum | PortalDocumentScalarFieldEnum[]
  }

  /**
   * PortalStudent.mappings
   */
  export type PortalStudent$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    where?: FacultyStudentMapWhereInput
    orderBy?: FacultyStudentMapOrderByWithRelationInput | FacultyStudentMapOrderByWithRelationInput[]
    cursor?: FacultyStudentMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyStudentMapScalarFieldEnum | FacultyStudentMapScalarFieldEnum[]
  }

  /**
   * PortalStudent.announcements
   */
  export type PortalStudent$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    where?: StudentAnnouncementWhereInput
    orderBy?: StudentAnnouncementOrderByWithRelationInput | StudentAnnouncementOrderByWithRelationInput[]
    cursor?: StudentAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAnnouncementScalarFieldEnum | StudentAnnouncementScalarFieldEnum[]
  }

  /**
   * PortalStudent.attendance
   */
  export type PortalStudent$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * PortalStudent.submissions
   */
  export type PortalStudent$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    where?: AssignmentSubmissionWhereInput
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    cursor?: AssignmentSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * PortalStudent without action
   */
  export type PortalStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
  }


  /**
   * Model PortalFaculty
   */

  export type AggregatePortalFaculty = {
    _count: PortalFacultyCountAggregateOutputType | null
    _avg: PortalFacultyAvgAggregateOutputType | null
    _sum: PortalFacultySumAggregateOutputType | null
    _min: PortalFacultyMinAggregateOutputType | null
    _max: PortalFacultyMaxAggregateOutputType | null
  }

  export type PortalFacultyAvgAggregateOutputType = {
    loginAttempts: number | null
  }

  export type PortalFacultySumAggregateOutputType = {
    loginAttempts: number | null
  }

  export type PortalFacultyMinAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    workEmail: string | null
    passwordHash: string | null
    phone: string | null
    designation: string | null
    department: string | null
    collegeName: string | null
    profilePhotoUrl: string | null
    bio: string | null
    googleId: string | null
    status: string | null
    lastLoginAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalFacultyMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    workEmail: string | null
    passwordHash: string | null
    phone: string | null
    designation: string | null
    department: string | null
    collegeName: string | null
    profilePhotoUrl: string | null
    bio: string | null
    googleId: string | null
    status: string | null
    lastLoginAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalFacultyCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    workEmail: number
    passwordHash: number
    phone: number
    designation: number
    department: number
    collegeName: number
    profilePhotoUrl: number
    bio: number
    googleId: number
    status: number
    lastLoginAt: number
    loginAttempts: number
    lockedUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortalFacultyAvgAggregateInputType = {
    loginAttempts?: true
  }

  export type PortalFacultySumAggregateInputType = {
    loginAttempts?: true
  }

  export type PortalFacultyMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    workEmail?: true
    passwordHash?: true
    phone?: true
    designation?: true
    department?: true
    collegeName?: true
    profilePhotoUrl?: true
    bio?: true
    googleId?: true
    status?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalFacultyMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    workEmail?: true
    passwordHash?: true
    phone?: true
    designation?: true
    department?: true
    collegeName?: true
    profilePhotoUrl?: true
    bio?: true
    googleId?: true
    status?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalFacultyCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    workEmail?: true
    passwordHash?: true
    phone?: true
    designation?: true
    department?: true
    collegeName?: true
    profilePhotoUrl?: true
    bio?: true
    googleId?: true
    status?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortalFacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalFaculty to aggregate.
     */
    where?: PortalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalFaculties to fetch.
     */
    orderBy?: PortalFacultyOrderByWithRelationInput | PortalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalFaculties
    **/
    _count?: true | PortalFacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalFacultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalFacultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalFacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalFacultyMaxAggregateInputType
  }

  export type GetPortalFacultyAggregateType<T extends PortalFacultyAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalFaculty[P]>
      : GetScalarType<T[P], AggregatePortalFaculty[P]>
  }




  export type PortalFacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalFacultyWhereInput
    orderBy?: PortalFacultyOrderByWithAggregationInput | PortalFacultyOrderByWithAggregationInput[]
    by: PortalFacultyScalarFieldEnum[] | PortalFacultyScalarFieldEnum
    having?: PortalFacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalFacultyCountAggregateInputType | true
    _avg?: PortalFacultyAvgAggregateInputType
    _sum?: PortalFacultySumAggregateInputType
    _min?: PortalFacultyMinAggregateInputType
    _max?: PortalFacultyMaxAggregateInputType
  }

  export type PortalFacultyGroupByOutputType = {
    id: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone: string | null
    designation: string
    department: string
    collegeName: string
    profilePhotoUrl: string | null
    bio: string | null
    googleId: string | null
    status: string
    lastLoginAt: Date | null
    loginAttempts: number
    lockedUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PortalFacultyCountAggregateOutputType | null
    _avg: PortalFacultyAvgAggregateOutputType | null
    _sum: PortalFacultySumAggregateOutputType | null
    _min: PortalFacultyMinAggregateOutputType | null
    _max: PortalFacultyMaxAggregateOutputType | null
  }

  type GetPortalFacultyGroupByPayload<T extends PortalFacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalFacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalFacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalFacultyGroupByOutputType[P]>
            : GetScalarType<T[P], PortalFacultyGroupByOutputType[P]>
        }
      >
    >


  export type PortalFacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    workEmail?: boolean
    passwordHash?: boolean
    phone?: boolean
    designation?: boolean
    department?: boolean
    collegeName?: boolean
    profilePhotoUrl?: boolean
    bio?: boolean
    googleId?: boolean
    status?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentMessages?: boolean | PortalFaculty$sentMessagesArgs<ExtArgs>
    documents?: boolean | PortalFaculty$documentsArgs<ExtArgs>
    mappings?: boolean | PortalFaculty$mappingsArgs<ExtArgs>
    announcements?: boolean | PortalFaculty$announcementsArgs<ExtArgs>
    attendanceMarked?: boolean | PortalFaculty$attendanceMarkedArgs<ExtArgs>
    assignments?: boolean | PortalFaculty$assignmentsArgs<ExtArgs>
    _count?: boolean | PortalFacultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portalFaculty"]>



  export type PortalFacultySelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    workEmail?: boolean
    passwordHash?: boolean
    phone?: boolean
    designation?: boolean
    department?: boolean
    collegeName?: boolean
    profilePhotoUrl?: boolean
    bio?: boolean
    googleId?: boolean
    status?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortalFacultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "workEmail" | "passwordHash" | "phone" | "designation" | "department" | "collegeName" | "profilePhotoUrl" | "bio" | "googleId" | "status" | "lastLoginAt" | "loginAttempts" | "lockedUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["portalFaculty"]>
  export type PortalFacultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | PortalFaculty$sentMessagesArgs<ExtArgs>
    documents?: boolean | PortalFaculty$documentsArgs<ExtArgs>
    mappings?: boolean | PortalFaculty$mappingsArgs<ExtArgs>
    announcements?: boolean | PortalFaculty$announcementsArgs<ExtArgs>
    attendanceMarked?: boolean | PortalFaculty$attendanceMarkedArgs<ExtArgs>
    assignments?: boolean | PortalFaculty$assignmentsArgs<ExtArgs>
    _count?: boolean | PortalFacultyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PortalFacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortalFaculty"
    objects: {
      sentMessages: Prisma.$PortalMessagePayload<ExtArgs>[]
      documents: Prisma.$PortalDocumentPayload<ExtArgs>[]
      mappings: Prisma.$FacultyStudentMapPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
      attendanceMarked: Prisma.$AttendanceRecordPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullName: string
      workEmail: string
      passwordHash: string
      phone: string | null
      designation: string
      department: string
      collegeName: string
      profilePhotoUrl: string | null
      bio: string | null
      googleId: string | null
      status: string
      lastLoginAt: Date | null
      loginAttempts: number
      lockedUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portalFaculty"]>
    composites: {}
  }

  type PortalFacultyGetPayload<S extends boolean | null | undefined | PortalFacultyDefaultArgs> = $Result.GetResult<Prisma.$PortalFacultyPayload, S>

  type PortalFacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortalFacultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortalFacultyCountAggregateInputType | true
    }

  export interface PortalFacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortalFaculty'], meta: { name: 'PortalFaculty' } }
    /**
     * Find zero or one PortalFaculty that matches the filter.
     * @param {PortalFacultyFindUniqueArgs} args - Arguments to find a PortalFaculty
     * @example
     * // Get one PortalFaculty
     * const portalFaculty = await prisma.portalFaculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortalFacultyFindUniqueArgs>(args: SelectSubset<T, PortalFacultyFindUniqueArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortalFaculty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortalFacultyFindUniqueOrThrowArgs} args - Arguments to find a PortalFaculty
     * @example
     * // Get one PortalFaculty
     * const portalFaculty = await prisma.portalFaculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortalFacultyFindUniqueOrThrowArgs>(args: SelectSubset<T, PortalFacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalFaculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyFindFirstArgs} args - Arguments to find a PortalFaculty
     * @example
     * // Get one PortalFaculty
     * const portalFaculty = await prisma.portalFaculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortalFacultyFindFirstArgs>(args?: SelectSubset<T, PortalFacultyFindFirstArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalFaculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyFindFirstOrThrowArgs} args - Arguments to find a PortalFaculty
     * @example
     * // Get one PortalFaculty
     * const portalFaculty = await prisma.portalFaculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortalFacultyFindFirstOrThrowArgs>(args?: SelectSubset<T, PortalFacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalFaculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalFaculties
     * const portalFaculties = await prisma.portalFaculty.findMany()
     * 
     * // Get first 10 PortalFaculties
     * const portalFaculties = await prisma.portalFaculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalFacultyWithIdOnly = await prisma.portalFaculty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortalFacultyFindManyArgs>(args?: SelectSubset<T, PortalFacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortalFaculty.
     * @param {PortalFacultyCreateArgs} args - Arguments to create a PortalFaculty.
     * @example
     * // Create one PortalFaculty
     * const PortalFaculty = await prisma.portalFaculty.create({
     *   data: {
     *     // ... data to create a PortalFaculty
     *   }
     * })
     * 
     */
    create<T extends PortalFacultyCreateArgs>(args: SelectSubset<T, PortalFacultyCreateArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortalFaculties.
     * @param {PortalFacultyCreateManyArgs} args - Arguments to create many PortalFaculties.
     * @example
     * // Create many PortalFaculties
     * const portalFaculty = await prisma.portalFaculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortalFacultyCreateManyArgs>(args?: SelectSubset<T, PortalFacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PortalFaculty.
     * @param {PortalFacultyDeleteArgs} args - Arguments to delete one PortalFaculty.
     * @example
     * // Delete one PortalFaculty
     * const PortalFaculty = await prisma.portalFaculty.delete({
     *   where: {
     *     // ... filter to delete one PortalFaculty
     *   }
     * })
     * 
     */
    delete<T extends PortalFacultyDeleteArgs>(args: SelectSubset<T, PortalFacultyDeleteArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortalFaculty.
     * @param {PortalFacultyUpdateArgs} args - Arguments to update one PortalFaculty.
     * @example
     * // Update one PortalFaculty
     * const portalFaculty = await prisma.portalFaculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortalFacultyUpdateArgs>(args: SelectSubset<T, PortalFacultyUpdateArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortalFaculties.
     * @param {PortalFacultyDeleteManyArgs} args - Arguments to filter PortalFaculties to delete.
     * @example
     * // Delete a few PortalFaculties
     * const { count } = await prisma.portalFaculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortalFacultyDeleteManyArgs>(args?: SelectSubset<T, PortalFacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalFaculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalFaculties
     * const portalFaculty = await prisma.portalFaculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortalFacultyUpdateManyArgs>(args: SelectSubset<T, PortalFacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalFaculty.
     * @param {PortalFacultyUpsertArgs} args - Arguments to update or create a PortalFaculty.
     * @example
     * // Update or create a PortalFaculty
     * const portalFaculty = await prisma.portalFaculty.upsert({
     *   create: {
     *     // ... data to create a PortalFaculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalFaculty we want to update
     *   }
     * })
     */
    upsert<T extends PortalFacultyUpsertArgs>(args: SelectSubset<T, PortalFacultyUpsertArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalFaculties that matches the filter.
     * @param {PortalFacultyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const portalFaculty = await prisma.portalFaculty.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortalFacultyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PortalFaculty.
     * @param {PortalFacultyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const portalFaculty = await prisma.portalFaculty.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortalFacultyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PortalFaculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyCountArgs} args - Arguments to filter PortalFaculties to count.
     * @example
     * // Count the number of PortalFaculties
     * const count = await prisma.portalFaculty.count({
     *   where: {
     *     // ... the filter for the PortalFaculties we want to count
     *   }
     * })
    **/
    count<T extends PortalFacultyCountArgs>(
      args?: Subset<T, PortalFacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalFacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalFaculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalFacultyAggregateArgs>(args: Subset<T, PortalFacultyAggregateArgs>): Prisma.PrismaPromise<GetPortalFacultyAggregateType<T>>

    /**
     * Group by PortalFaculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFacultyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalFacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalFacultyGroupByArgs['orderBy'] }
        : { orderBy?: PortalFacultyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalFacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortalFaculty model
   */
  readonly fields: PortalFacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalFaculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalFacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentMessages<T extends PortalFaculty$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, PortalFaculty$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends PortalFaculty$documentsArgs<ExtArgs> = {}>(args?: Subset<T, PortalFaculty$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mappings<T extends PortalFaculty$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, PortalFaculty$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends PortalFaculty$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, PortalFaculty$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendanceMarked<T extends PortalFaculty$attendanceMarkedArgs<ExtArgs> = {}>(args?: Subset<T, PortalFaculty$attendanceMarkedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends PortalFaculty$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, PortalFaculty$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortalFaculty model
   */
  interface PortalFacultyFieldRefs {
    readonly id: FieldRef<"PortalFaculty", 'String'>
    readonly username: FieldRef<"PortalFaculty", 'String'>
    readonly fullName: FieldRef<"PortalFaculty", 'String'>
    readonly workEmail: FieldRef<"PortalFaculty", 'String'>
    readonly passwordHash: FieldRef<"PortalFaculty", 'String'>
    readonly phone: FieldRef<"PortalFaculty", 'String'>
    readonly designation: FieldRef<"PortalFaculty", 'String'>
    readonly department: FieldRef<"PortalFaculty", 'String'>
    readonly collegeName: FieldRef<"PortalFaculty", 'String'>
    readonly profilePhotoUrl: FieldRef<"PortalFaculty", 'String'>
    readonly bio: FieldRef<"PortalFaculty", 'String'>
    readonly googleId: FieldRef<"PortalFaculty", 'String'>
    readonly status: FieldRef<"PortalFaculty", 'String'>
    readonly lastLoginAt: FieldRef<"PortalFaculty", 'DateTime'>
    readonly loginAttempts: FieldRef<"PortalFaculty", 'Int'>
    readonly lockedUntil: FieldRef<"PortalFaculty", 'DateTime'>
    readonly createdAt: FieldRef<"PortalFaculty", 'DateTime'>
    readonly updatedAt: FieldRef<"PortalFaculty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortalFaculty findUnique
   */
  export type PortalFacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * Filter, which PortalFaculty to fetch.
     */
    where: PortalFacultyWhereUniqueInput
  }

  /**
   * PortalFaculty findUniqueOrThrow
   */
  export type PortalFacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * Filter, which PortalFaculty to fetch.
     */
    where: PortalFacultyWhereUniqueInput
  }

  /**
   * PortalFaculty findFirst
   */
  export type PortalFacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * Filter, which PortalFaculty to fetch.
     */
    where?: PortalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalFaculties to fetch.
     */
    orderBy?: PortalFacultyOrderByWithRelationInput | PortalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalFaculties.
     */
    cursor?: PortalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalFaculties.
     */
    distinct?: PortalFacultyScalarFieldEnum | PortalFacultyScalarFieldEnum[]
  }

  /**
   * PortalFaculty findFirstOrThrow
   */
  export type PortalFacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * Filter, which PortalFaculty to fetch.
     */
    where?: PortalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalFaculties to fetch.
     */
    orderBy?: PortalFacultyOrderByWithRelationInput | PortalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalFaculties.
     */
    cursor?: PortalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalFaculties.
     */
    distinct?: PortalFacultyScalarFieldEnum | PortalFacultyScalarFieldEnum[]
  }

  /**
   * PortalFaculty findMany
   */
  export type PortalFacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * Filter, which PortalFaculties to fetch.
     */
    where?: PortalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalFaculties to fetch.
     */
    orderBy?: PortalFacultyOrderByWithRelationInput | PortalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalFaculties.
     */
    cursor?: PortalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalFaculties.
     */
    distinct?: PortalFacultyScalarFieldEnum | PortalFacultyScalarFieldEnum[]
  }

  /**
   * PortalFaculty create
   */
  export type PortalFacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * The data needed to create a PortalFaculty.
     */
    data: XOR<PortalFacultyCreateInput, PortalFacultyUncheckedCreateInput>
  }

  /**
   * PortalFaculty createMany
   */
  export type PortalFacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortalFaculties.
     */
    data: PortalFacultyCreateManyInput | PortalFacultyCreateManyInput[]
  }

  /**
   * PortalFaculty update
   */
  export type PortalFacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * The data needed to update a PortalFaculty.
     */
    data: XOR<PortalFacultyUpdateInput, PortalFacultyUncheckedUpdateInput>
    /**
     * Choose, which PortalFaculty to update.
     */
    where: PortalFacultyWhereUniqueInput
  }

  /**
   * PortalFaculty updateMany
   */
  export type PortalFacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortalFaculties.
     */
    data: XOR<PortalFacultyUpdateManyMutationInput, PortalFacultyUncheckedUpdateManyInput>
    /**
     * Filter which PortalFaculties to update
     */
    where?: PortalFacultyWhereInput
    /**
     * Limit how many PortalFaculties to update.
     */
    limit?: number
  }

  /**
   * PortalFaculty upsert
   */
  export type PortalFacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * The filter to search for the PortalFaculty to update in case it exists.
     */
    where: PortalFacultyWhereUniqueInput
    /**
     * In case the PortalFaculty found by the `where` argument doesn't exist, create a new PortalFaculty with this data.
     */
    create: XOR<PortalFacultyCreateInput, PortalFacultyUncheckedCreateInput>
    /**
     * In case the PortalFaculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalFacultyUpdateInput, PortalFacultyUncheckedUpdateInput>
  }

  /**
   * PortalFaculty delete
   */
  export type PortalFacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    /**
     * Filter which PortalFaculty to delete.
     */
    where: PortalFacultyWhereUniqueInput
  }

  /**
   * PortalFaculty deleteMany
   */
  export type PortalFacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalFaculties to delete
     */
    where?: PortalFacultyWhereInput
    /**
     * Limit how many PortalFaculties to delete.
     */
    limit?: number
  }

  /**
   * PortalFaculty findRaw
   */
  export type PortalFacultyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalFaculty aggregateRaw
   */
  export type PortalFacultyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalFaculty.sentMessages
   */
  export type PortalFaculty$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    where?: PortalMessageWhereInput
    orderBy?: PortalMessageOrderByWithRelationInput | PortalMessageOrderByWithRelationInput[]
    cursor?: PortalMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortalMessageScalarFieldEnum | PortalMessageScalarFieldEnum[]
  }

  /**
   * PortalFaculty.documents
   */
  export type PortalFaculty$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    where?: PortalDocumentWhereInput
    orderBy?: PortalDocumentOrderByWithRelationInput | PortalDocumentOrderByWithRelationInput[]
    cursor?: PortalDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortalDocumentScalarFieldEnum | PortalDocumentScalarFieldEnum[]
  }

  /**
   * PortalFaculty.mappings
   */
  export type PortalFaculty$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    where?: FacultyStudentMapWhereInput
    orderBy?: FacultyStudentMapOrderByWithRelationInput | FacultyStudentMapOrderByWithRelationInput[]
    cursor?: FacultyStudentMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyStudentMapScalarFieldEnum | FacultyStudentMapScalarFieldEnum[]
  }

  /**
   * PortalFaculty.announcements
   */
  export type PortalFaculty$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * PortalFaculty.attendanceMarked
   */
  export type PortalFaculty$attendanceMarkedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * PortalFaculty.assignments
   */
  export type PortalFaculty$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * PortalFaculty without action
   */
  export type PortalFacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
  }


  /**
   * Model FacultyStudentMap
   */

  export type AggregateFacultyStudentMap = {
    _count: FacultyStudentMapCountAggregateOutputType | null
    _min: FacultyStudentMapMinAggregateOutputType | null
    _max: FacultyStudentMapMaxAggregateOutputType | null
  }

  export type FacultyStudentMapMinAggregateOutputType = {
    id: string | null
    facultyId: string | null
    studentId: string | null
    adminNote: string | null
    assignedBy: string | null
    isActive: boolean | null
    assignedAt: Date | null
  }

  export type FacultyStudentMapMaxAggregateOutputType = {
    id: string | null
    facultyId: string | null
    studentId: string | null
    adminNote: string | null
    assignedBy: string | null
    isActive: boolean | null
    assignedAt: Date | null
  }

  export type FacultyStudentMapCountAggregateOutputType = {
    id: number
    facultyId: number
    studentId: number
    adminNote: number
    assignedBy: number
    isActive: number
    assignedAt: number
    _all: number
  }


  export type FacultyStudentMapMinAggregateInputType = {
    id?: true
    facultyId?: true
    studentId?: true
    adminNote?: true
    assignedBy?: true
    isActive?: true
    assignedAt?: true
  }

  export type FacultyStudentMapMaxAggregateInputType = {
    id?: true
    facultyId?: true
    studentId?: true
    adminNote?: true
    assignedBy?: true
    isActive?: true
    assignedAt?: true
  }

  export type FacultyStudentMapCountAggregateInputType = {
    id?: true
    facultyId?: true
    studentId?: true
    adminNote?: true
    assignedBy?: true
    isActive?: true
    assignedAt?: true
    _all?: true
  }

  export type FacultyStudentMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyStudentMap to aggregate.
     */
    where?: FacultyStudentMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyStudentMaps to fetch.
     */
    orderBy?: FacultyStudentMapOrderByWithRelationInput | FacultyStudentMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyStudentMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyStudentMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyStudentMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyStudentMaps
    **/
    _count?: true | FacultyStudentMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyStudentMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyStudentMapMaxAggregateInputType
  }

  export type GetFacultyStudentMapAggregateType<T extends FacultyStudentMapAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyStudentMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyStudentMap[P]>
      : GetScalarType<T[P], AggregateFacultyStudentMap[P]>
  }




  export type FacultyStudentMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyStudentMapWhereInput
    orderBy?: FacultyStudentMapOrderByWithAggregationInput | FacultyStudentMapOrderByWithAggregationInput[]
    by: FacultyStudentMapScalarFieldEnum[] | FacultyStudentMapScalarFieldEnum
    having?: FacultyStudentMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyStudentMapCountAggregateInputType | true
    _min?: FacultyStudentMapMinAggregateInputType
    _max?: FacultyStudentMapMaxAggregateInputType
  }

  export type FacultyStudentMapGroupByOutputType = {
    id: string
    facultyId: string
    studentId: string
    adminNote: string | null
    assignedBy: string
    isActive: boolean
    assignedAt: Date
    _count: FacultyStudentMapCountAggregateOutputType | null
    _min: FacultyStudentMapMinAggregateOutputType | null
    _max: FacultyStudentMapMaxAggregateOutputType | null
  }

  type GetFacultyStudentMapGroupByPayload<T extends FacultyStudentMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyStudentMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyStudentMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyStudentMapGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyStudentMapGroupByOutputType[P]>
        }
      >
    >


  export type FacultyStudentMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultyId?: boolean
    studentId?: boolean
    adminNote?: boolean
    assignedBy?: boolean
    isActive?: boolean
    assignedAt?: boolean
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyStudentMap"]>



  export type FacultyStudentMapSelectScalar = {
    id?: boolean
    facultyId?: boolean
    studentId?: boolean
    adminNote?: boolean
    assignedBy?: boolean
    isActive?: boolean
    assignedAt?: boolean
  }

  export type FacultyStudentMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facultyId" | "studentId" | "adminNote" | "assignedBy" | "isActive" | "assignedAt", ExtArgs["result"]["facultyStudentMap"]>
  export type FacultyStudentMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
  }

  export type $FacultyStudentMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyStudentMap"
    objects: {
      faculty: Prisma.$PortalFacultyPayload<ExtArgs>
      student: Prisma.$PortalStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facultyId: string
      studentId: string
      adminNote: string | null
      assignedBy: string
      isActive: boolean
      assignedAt: Date
    }, ExtArgs["result"]["facultyStudentMap"]>
    composites: {}
  }

  type FacultyStudentMapGetPayload<S extends boolean | null | undefined | FacultyStudentMapDefaultArgs> = $Result.GetResult<Prisma.$FacultyStudentMapPayload, S>

  type FacultyStudentMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyStudentMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyStudentMapCountAggregateInputType | true
    }

  export interface FacultyStudentMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyStudentMap'], meta: { name: 'FacultyStudentMap' } }
    /**
     * Find zero or one FacultyStudentMap that matches the filter.
     * @param {FacultyStudentMapFindUniqueArgs} args - Arguments to find a FacultyStudentMap
     * @example
     * // Get one FacultyStudentMap
     * const facultyStudentMap = await prisma.facultyStudentMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyStudentMapFindUniqueArgs>(args: SelectSubset<T, FacultyStudentMapFindUniqueArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacultyStudentMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyStudentMapFindUniqueOrThrowArgs} args - Arguments to find a FacultyStudentMap
     * @example
     * // Get one FacultyStudentMap
     * const facultyStudentMap = await prisma.facultyStudentMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyStudentMapFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyStudentMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyStudentMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapFindFirstArgs} args - Arguments to find a FacultyStudentMap
     * @example
     * // Get one FacultyStudentMap
     * const facultyStudentMap = await prisma.facultyStudentMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyStudentMapFindFirstArgs>(args?: SelectSubset<T, FacultyStudentMapFindFirstArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyStudentMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapFindFirstOrThrowArgs} args - Arguments to find a FacultyStudentMap
     * @example
     * // Get one FacultyStudentMap
     * const facultyStudentMap = await prisma.facultyStudentMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyStudentMapFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyStudentMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultyStudentMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyStudentMaps
     * const facultyStudentMaps = await prisma.facultyStudentMap.findMany()
     * 
     * // Get first 10 FacultyStudentMaps
     * const facultyStudentMaps = await prisma.facultyStudentMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyStudentMapWithIdOnly = await prisma.facultyStudentMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyStudentMapFindManyArgs>(args?: SelectSubset<T, FacultyStudentMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacultyStudentMap.
     * @param {FacultyStudentMapCreateArgs} args - Arguments to create a FacultyStudentMap.
     * @example
     * // Create one FacultyStudentMap
     * const FacultyStudentMap = await prisma.facultyStudentMap.create({
     *   data: {
     *     // ... data to create a FacultyStudentMap
     *   }
     * })
     * 
     */
    create<T extends FacultyStudentMapCreateArgs>(args: SelectSubset<T, FacultyStudentMapCreateArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacultyStudentMaps.
     * @param {FacultyStudentMapCreateManyArgs} args - Arguments to create many FacultyStudentMaps.
     * @example
     * // Create many FacultyStudentMaps
     * const facultyStudentMap = await prisma.facultyStudentMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyStudentMapCreateManyArgs>(args?: SelectSubset<T, FacultyStudentMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacultyStudentMap.
     * @param {FacultyStudentMapDeleteArgs} args - Arguments to delete one FacultyStudentMap.
     * @example
     * // Delete one FacultyStudentMap
     * const FacultyStudentMap = await prisma.facultyStudentMap.delete({
     *   where: {
     *     // ... filter to delete one FacultyStudentMap
     *   }
     * })
     * 
     */
    delete<T extends FacultyStudentMapDeleteArgs>(args: SelectSubset<T, FacultyStudentMapDeleteArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacultyStudentMap.
     * @param {FacultyStudentMapUpdateArgs} args - Arguments to update one FacultyStudentMap.
     * @example
     * // Update one FacultyStudentMap
     * const facultyStudentMap = await prisma.facultyStudentMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyStudentMapUpdateArgs>(args: SelectSubset<T, FacultyStudentMapUpdateArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacultyStudentMaps.
     * @param {FacultyStudentMapDeleteManyArgs} args - Arguments to filter FacultyStudentMaps to delete.
     * @example
     * // Delete a few FacultyStudentMaps
     * const { count } = await prisma.facultyStudentMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyStudentMapDeleteManyArgs>(args?: SelectSubset<T, FacultyStudentMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyStudentMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyStudentMaps
     * const facultyStudentMap = await prisma.facultyStudentMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyStudentMapUpdateManyArgs>(args: SelectSubset<T, FacultyStudentMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyStudentMap.
     * @param {FacultyStudentMapUpsertArgs} args - Arguments to update or create a FacultyStudentMap.
     * @example
     * // Update or create a FacultyStudentMap
     * const facultyStudentMap = await prisma.facultyStudentMap.upsert({
     *   create: {
     *     // ... data to create a FacultyStudentMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyStudentMap we want to update
     *   }
     * })
     */
    upsert<T extends FacultyStudentMapUpsertArgs>(args: SelectSubset<T, FacultyStudentMapUpsertArgs<ExtArgs>>): Prisma__FacultyStudentMapClient<$Result.GetResult<Prisma.$FacultyStudentMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultyStudentMaps that matches the filter.
     * @param {FacultyStudentMapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const facultyStudentMap = await prisma.facultyStudentMap.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FacultyStudentMapFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FacultyStudentMap.
     * @param {FacultyStudentMapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const facultyStudentMap = await prisma.facultyStudentMap.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FacultyStudentMapAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FacultyStudentMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapCountArgs} args - Arguments to filter FacultyStudentMaps to count.
     * @example
     * // Count the number of FacultyStudentMaps
     * const count = await prisma.facultyStudentMap.count({
     *   where: {
     *     // ... the filter for the FacultyStudentMaps we want to count
     *   }
     * })
    **/
    count<T extends FacultyStudentMapCountArgs>(
      args?: Subset<T, FacultyStudentMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyStudentMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyStudentMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyStudentMapAggregateArgs>(args: Subset<T, FacultyStudentMapAggregateArgs>): Prisma.PrismaPromise<GetFacultyStudentMapAggregateType<T>>

    /**
     * Group by FacultyStudentMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyStudentMapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacultyStudentMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyStudentMapGroupByArgs['orderBy'] }
        : { orderBy?: FacultyStudentMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacultyStudentMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyStudentMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyStudentMap model
   */
  readonly fields: FacultyStudentMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyStudentMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyStudentMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends PortalFacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalFacultyDefaultArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends PortalStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudentDefaultArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacultyStudentMap model
   */
  interface FacultyStudentMapFieldRefs {
    readonly id: FieldRef<"FacultyStudentMap", 'String'>
    readonly facultyId: FieldRef<"FacultyStudentMap", 'String'>
    readonly studentId: FieldRef<"FacultyStudentMap", 'String'>
    readonly adminNote: FieldRef<"FacultyStudentMap", 'String'>
    readonly assignedBy: FieldRef<"FacultyStudentMap", 'String'>
    readonly isActive: FieldRef<"FacultyStudentMap", 'Boolean'>
    readonly assignedAt: FieldRef<"FacultyStudentMap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyStudentMap findUnique
   */
  export type FacultyStudentMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * Filter, which FacultyStudentMap to fetch.
     */
    where: FacultyStudentMapWhereUniqueInput
  }

  /**
   * FacultyStudentMap findUniqueOrThrow
   */
  export type FacultyStudentMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * Filter, which FacultyStudentMap to fetch.
     */
    where: FacultyStudentMapWhereUniqueInput
  }

  /**
   * FacultyStudentMap findFirst
   */
  export type FacultyStudentMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * Filter, which FacultyStudentMap to fetch.
     */
    where?: FacultyStudentMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyStudentMaps to fetch.
     */
    orderBy?: FacultyStudentMapOrderByWithRelationInput | FacultyStudentMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyStudentMaps.
     */
    cursor?: FacultyStudentMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyStudentMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyStudentMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyStudentMaps.
     */
    distinct?: FacultyStudentMapScalarFieldEnum | FacultyStudentMapScalarFieldEnum[]
  }

  /**
   * FacultyStudentMap findFirstOrThrow
   */
  export type FacultyStudentMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * Filter, which FacultyStudentMap to fetch.
     */
    where?: FacultyStudentMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyStudentMaps to fetch.
     */
    orderBy?: FacultyStudentMapOrderByWithRelationInput | FacultyStudentMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyStudentMaps.
     */
    cursor?: FacultyStudentMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyStudentMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyStudentMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyStudentMaps.
     */
    distinct?: FacultyStudentMapScalarFieldEnum | FacultyStudentMapScalarFieldEnum[]
  }

  /**
   * FacultyStudentMap findMany
   */
  export type FacultyStudentMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * Filter, which FacultyStudentMaps to fetch.
     */
    where?: FacultyStudentMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyStudentMaps to fetch.
     */
    orderBy?: FacultyStudentMapOrderByWithRelationInput | FacultyStudentMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyStudentMaps.
     */
    cursor?: FacultyStudentMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyStudentMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyStudentMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyStudentMaps.
     */
    distinct?: FacultyStudentMapScalarFieldEnum | FacultyStudentMapScalarFieldEnum[]
  }

  /**
   * FacultyStudentMap create
   */
  export type FacultyStudentMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyStudentMap.
     */
    data: XOR<FacultyStudentMapCreateInput, FacultyStudentMapUncheckedCreateInput>
  }

  /**
   * FacultyStudentMap createMany
   */
  export type FacultyStudentMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyStudentMaps.
     */
    data: FacultyStudentMapCreateManyInput | FacultyStudentMapCreateManyInput[]
  }

  /**
   * FacultyStudentMap update
   */
  export type FacultyStudentMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyStudentMap.
     */
    data: XOR<FacultyStudentMapUpdateInput, FacultyStudentMapUncheckedUpdateInput>
    /**
     * Choose, which FacultyStudentMap to update.
     */
    where: FacultyStudentMapWhereUniqueInput
  }

  /**
   * FacultyStudentMap updateMany
   */
  export type FacultyStudentMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyStudentMaps.
     */
    data: XOR<FacultyStudentMapUpdateManyMutationInput, FacultyStudentMapUncheckedUpdateManyInput>
    /**
     * Filter which FacultyStudentMaps to update
     */
    where?: FacultyStudentMapWhereInput
    /**
     * Limit how many FacultyStudentMaps to update.
     */
    limit?: number
  }

  /**
   * FacultyStudentMap upsert
   */
  export type FacultyStudentMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyStudentMap to update in case it exists.
     */
    where: FacultyStudentMapWhereUniqueInput
    /**
     * In case the FacultyStudentMap found by the `where` argument doesn't exist, create a new FacultyStudentMap with this data.
     */
    create: XOR<FacultyStudentMapCreateInput, FacultyStudentMapUncheckedCreateInput>
    /**
     * In case the FacultyStudentMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyStudentMapUpdateInput, FacultyStudentMapUncheckedUpdateInput>
  }

  /**
   * FacultyStudentMap delete
   */
  export type FacultyStudentMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
    /**
     * Filter which FacultyStudentMap to delete.
     */
    where: FacultyStudentMapWhereUniqueInput
  }

  /**
   * FacultyStudentMap deleteMany
   */
  export type FacultyStudentMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyStudentMaps to delete
     */
    where?: FacultyStudentMapWhereInput
    /**
     * Limit how many FacultyStudentMaps to delete.
     */
    limit?: number
  }

  /**
   * FacultyStudentMap findRaw
   */
  export type FacultyStudentMapFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FacultyStudentMap aggregateRaw
   */
  export type FacultyStudentMapAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FacultyStudentMap without action
   */
  export type FacultyStudentMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyStudentMap
     */
    select?: FacultyStudentMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyStudentMap
     */
    omit?: FacultyStudentMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyStudentMapInclude<ExtArgs> | null
  }


  /**
   * Model PortalMessage
   */

  export type AggregatePortalMessage = {
    _count: PortalMessageCountAggregateOutputType | null
    _min: PortalMessageMinAggregateOutputType | null
    _max: PortalMessageMaxAggregateOutputType | null
  }

  export type PortalMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    isRead: boolean | null
    attachmentUrl: string | null
    attachmentName: string | null
    senderStudentId: string | null
    senderFacultyId: string | null
    receiverStudentId: string | null
    receiverFacultyId: string | null
    createdAt: Date | null
  }

  export type PortalMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    isRead: boolean | null
    attachmentUrl: string | null
    attachmentName: string | null
    senderStudentId: string | null
    senderFacultyId: string | null
    receiverStudentId: string | null
    receiverFacultyId: string | null
    createdAt: Date | null
  }

  export type PortalMessageCountAggregateOutputType = {
    id: number
    content: number
    isRead: number
    attachmentUrl: number
    attachmentName: number
    senderStudentId: number
    senderFacultyId: number
    receiverStudentId: number
    receiverFacultyId: number
    createdAt: number
    _all: number
  }


  export type PortalMessageMinAggregateInputType = {
    id?: true
    content?: true
    isRead?: true
    attachmentUrl?: true
    attachmentName?: true
    senderStudentId?: true
    senderFacultyId?: true
    receiverStudentId?: true
    receiverFacultyId?: true
    createdAt?: true
  }

  export type PortalMessageMaxAggregateInputType = {
    id?: true
    content?: true
    isRead?: true
    attachmentUrl?: true
    attachmentName?: true
    senderStudentId?: true
    senderFacultyId?: true
    receiverStudentId?: true
    receiverFacultyId?: true
    createdAt?: true
  }

  export type PortalMessageCountAggregateInputType = {
    id?: true
    content?: true
    isRead?: true
    attachmentUrl?: true
    attachmentName?: true
    senderStudentId?: true
    senderFacultyId?: true
    receiverStudentId?: true
    receiverFacultyId?: true
    createdAt?: true
    _all?: true
  }

  export type PortalMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalMessage to aggregate.
     */
    where?: PortalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalMessages to fetch.
     */
    orderBy?: PortalMessageOrderByWithRelationInput | PortalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalMessages
    **/
    _count?: true | PortalMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalMessageMaxAggregateInputType
  }

  export type GetPortalMessageAggregateType<T extends PortalMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalMessage[P]>
      : GetScalarType<T[P], AggregatePortalMessage[P]>
  }




  export type PortalMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalMessageWhereInput
    orderBy?: PortalMessageOrderByWithAggregationInput | PortalMessageOrderByWithAggregationInput[]
    by: PortalMessageScalarFieldEnum[] | PortalMessageScalarFieldEnum
    having?: PortalMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalMessageCountAggregateInputType | true
    _min?: PortalMessageMinAggregateInputType
    _max?: PortalMessageMaxAggregateInputType
  }

  export type PortalMessageGroupByOutputType = {
    id: string
    content: string
    isRead: boolean
    attachmentUrl: string | null
    attachmentName: string | null
    senderStudentId: string | null
    senderFacultyId: string | null
    receiverStudentId: string | null
    receiverFacultyId: string | null
    createdAt: Date
    _count: PortalMessageCountAggregateOutputType | null
    _min: PortalMessageMinAggregateOutputType | null
    _max: PortalMessageMaxAggregateOutputType | null
  }

  type GetPortalMessageGroupByPayload<T extends PortalMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PortalMessageGroupByOutputType[P]>
        }
      >
    >


  export type PortalMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isRead?: boolean
    attachmentUrl?: boolean
    attachmentName?: boolean
    senderStudentId?: boolean
    senderFacultyId?: boolean
    receiverStudentId?: boolean
    receiverFacultyId?: boolean
    createdAt?: boolean
    senderStudent?: boolean | PortalMessage$senderStudentArgs<ExtArgs>
    senderFaculty?: boolean | PortalMessage$senderFacultyArgs<ExtArgs>
  }, ExtArgs["result"]["portalMessage"]>



  export type PortalMessageSelectScalar = {
    id?: boolean
    content?: boolean
    isRead?: boolean
    attachmentUrl?: boolean
    attachmentName?: boolean
    senderStudentId?: boolean
    senderFacultyId?: boolean
    receiverStudentId?: boolean
    receiverFacultyId?: boolean
    createdAt?: boolean
  }

  export type PortalMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isRead" | "attachmentUrl" | "attachmentName" | "senderStudentId" | "senderFacultyId" | "receiverStudentId" | "receiverFacultyId" | "createdAt", ExtArgs["result"]["portalMessage"]>
  export type PortalMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderStudent?: boolean | PortalMessage$senderStudentArgs<ExtArgs>
    senderFaculty?: boolean | PortalMessage$senderFacultyArgs<ExtArgs>
  }

  export type $PortalMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortalMessage"
    objects: {
      senderStudent: Prisma.$PortalStudentPayload<ExtArgs> | null
      senderFaculty: Prisma.$PortalFacultyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      isRead: boolean
      attachmentUrl: string | null
      attachmentName: string | null
      senderStudentId: string | null
      senderFacultyId: string | null
      receiverStudentId: string | null
      receiverFacultyId: string | null
      createdAt: Date
    }, ExtArgs["result"]["portalMessage"]>
    composites: {}
  }

  type PortalMessageGetPayload<S extends boolean | null | undefined | PortalMessageDefaultArgs> = $Result.GetResult<Prisma.$PortalMessagePayload, S>

  type PortalMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortalMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortalMessageCountAggregateInputType | true
    }

  export interface PortalMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortalMessage'], meta: { name: 'PortalMessage' } }
    /**
     * Find zero or one PortalMessage that matches the filter.
     * @param {PortalMessageFindUniqueArgs} args - Arguments to find a PortalMessage
     * @example
     * // Get one PortalMessage
     * const portalMessage = await prisma.portalMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortalMessageFindUniqueArgs>(args: SelectSubset<T, PortalMessageFindUniqueArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortalMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortalMessageFindUniqueOrThrowArgs} args - Arguments to find a PortalMessage
     * @example
     * // Get one PortalMessage
     * const portalMessage = await prisma.portalMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortalMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PortalMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageFindFirstArgs} args - Arguments to find a PortalMessage
     * @example
     * // Get one PortalMessage
     * const portalMessage = await prisma.portalMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortalMessageFindFirstArgs>(args?: SelectSubset<T, PortalMessageFindFirstArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageFindFirstOrThrowArgs} args - Arguments to find a PortalMessage
     * @example
     * // Get one PortalMessage
     * const portalMessage = await prisma.portalMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortalMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PortalMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalMessages
     * const portalMessages = await prisma.portalMessage.findMany()
     * 
     * // Get first 10 PortalMessages
     * const portalMessages = await prisma.portalMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalMessageWithIdOnly = await prisma.portalMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortalMessageFindManyArgs>(args?: SelectSubset<T, PortalMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortalMessage.
     * @param {PortalMessageCreateArgs} args - Arguments to create a PortalMessage.
     * @example
     * // Create one PortalMessage
     * const PortalMessage = await prisma.portalMessage.create({
     *   data: {
     *     // ... data to create a PortalMessage
     *   }
     * })
     * 
     */
    create<T extends PortalMessageCreateArgs>(args: SelectSubset<T, PortalMessageCreateArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortalMessages.
     * @param {PortalMessageCreateManyArgs} args - Arguments to create many PortalMessages.
     * @example
     * // Create many PortalMessages
     * const portalMessage = await prisma.portalMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortalMessageCreateManyArgs>(args?: SelectSubset<T, PortalMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PortalMessage.
     * @param {PortalMessageDeleteArgs} args - Arguments to delete one PortalMessage.
     * @example
     * // Delete one PortalMessage
     * const PortalMessage = await prisma.portalMessage.delete({
     *   where: {
     *     // ... filter to delete one PortalMessage
     *   }
     * })
     * 
     */
    delete<T extends PortalMessageDeleteArgs>(args: SelectSubset<T, PortalMessageDeleteArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortalMessage.
     * @param {PortalMessageUpdateArgs} args - Arguments to update one PortalMessage.
     * @example
     * // Update one PortalMessage
     * const portalMessage = await prisma.portalMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortalMessageUpdateArgs>(args: SelectSubset<T, PortalMessageUpdateArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortalMessages.
     * @param {PortalMessageDeleteManyArgs} args - Arguments to filter PortalMessages to delete.
     * @example
     * // Delete a few PortalMessages
     * const { count } = await prisma.portalMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortalMessageDeleteManyArgs>(args?: SelectSubset<T, PortalMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalMessages
     * const portalMessage = await prisma.portalMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortalMessageUpdateManyArgs>(args: SelectSubset<T, PortalMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalMessage.
     * @param {PortalMessageUpsertArgs} args - Arguments to update or create a PortalMessage.
     * @example
     * // Update or create a PortalMessage
     * const portalMessage = await prisma.portalMessage.upsert({
     *   create: {
     *     // ... data to create a PortalMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalMessage we want to update
     *   }
     * })
     */
    upsert<T extends PortalMessageUpsertArgs>(args: SelectSubset<T, PortalMessageUpsertArgs<ExtArgs>>): Prisma__PortalMessageClient<$Result.GetResult<Prisma.$PortalMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalMessages that matches the filter.
     * @param {PortalMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const portalMessage = await prisma.portalMessage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortalMessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PortalMessage.
     * @param {PortalMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const portalMessage = await prisma.portalMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortalMessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PortalMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageCountArgs} args - Arguments to filter PortalMessages to count.
     * @example
     * // Count the number of PortalMessages
     * const count = await prisma.portalMessage.count({
     *   where: {
     *     // ... the filter for the PortalMessages we want to count
     *   }
     * })
    **/
    count<T extends PortalMessageCountArgs>(
      args?: Subset<T, PortalMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalMessageAggregateArgs>(args: Subset<T, PortalMessageAggregateArgs>): Prisma.PrismaPromise<GetPortalMessageAggregateType<T>>

    /**
     * Group by PortalMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalMessageGroupByArgs['orderBy'] }
        : { orderBy?: PortalMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortalMessage model
   */
  readonly fields: PortalMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderStudent<T extends PortalMessage$senderStudentArgs<ExtArgs> = {}>(args?: Subset<T, PortalMessage$senderStudentArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    senderFaculty<T extends PortalMessage$senderFacultyArgs<ExtArgs> = {}>(args?: Subset<T, PortalMessage$senderFacultyArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortalMessage model
   */
  interface PortalMessageFieldRefs {
    readonly id: FieldRef<"PortalMessage", 'String'>
    readonly content: FieldRef<"PortalMessage", 'String'>
    readonly isRead: FieldRef<"PortalMessage", 'Boolean'>
    readonly attachmentUrl: FieldRef<"PortalMessage", 'String'>
    readonly attachmentName: FieldRef<"PortalMessage", 'String'>
    readonly senderStudentId: FieldRef<"PortalMessage", 'String'>
    readonly senderFacultyId: FieldRef<"PortalMessage", 'String'>
    readonly receiverStudentId: FieldRef<"PortalMessage", 'String'>
    readonly receiverFacultyId: FieldRef<"PortalMessage", 'String'>
    readonly createdAt: FieldRef<"PortalMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortalMessage findUnique
   */
  export type PortalMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PortalMessage to fetch.
     */
    where: PortalMessageWhereUniqueInput
  }

  /**
   * PortalMessage findUniqueOrThrow
   */
  export type PortalMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PortalMessage to fetch.
     */
    where: PortalMessageWhereUniqueInput
  }

  /**
   * PortalMessage findFirst
   */
  export type PortalMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PortalMessage to fetch.
     */
    where?: PortalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalMessages to fetch.
     */
    orderBy?: PortalMessageOrderByWithRelationInput | PortalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalMessages.
     */
    cursor?: PortalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalMessages.
     */
    distinct?: PortalMessageScalarFieldEnum | PortalMessageScalarFieldEnum[]
  }

  /**
   * PortalMessage findFirstOrThrow
   */
  export type PortalMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PortalMessage to fetch.
     */
    where?: PortalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalMessages to fetch.
     */
    orderBy?: PortalMessageOrderByWithRelationInput | PortalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalMessages.
     */
    cursor?: PortalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalMessages.
     */
    distinct?: PortalMessageScalarFieldEnum | PortalMessageScalarFieldEnum[]
  }

  /**
   * PortalMessage findMany
   */
  export type PortalMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PortalMessages to fetch.
     */
    where?: PortalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalMessages to fetch.
     */
    orderBy?: PortalMessageOrderByWithRelationInput | PortalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalMessages.
     */
    cursor?: PortalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalMessages.
     */
    distinct?: PortalMessageScalarFieldEnum | PortalMessageScalarFieldEnum[]
  }

  /**
   * PortalMessage create
   */
  export type PortalMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PortalMessage.
     */
    data: XOR<PortalMessageCreateInput, PortalMessageUncheckedCreateInput>
  }

  /**
   * PortalMessage createMany
   */
  export type PortalMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortalMessages.
     */
    data: PortalMessageCreateManyInput | PortalMessageCreateManyInput[]
  }

  /**
   * PortalMessage update
   */
  export type PortalMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PortalMessage.
     */
    data: XOR<PortalMessageUpdateInput, PortalMessageUncheckedUpdateInput>
    /**
     * Choose, which PortalMessage to update.
     */
    where: PortalMessageWhereUniqueInput
  }

  /**
   * PortalMessage updateMany
   */
  export type PortalMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortalMessages.
     */
    data: XOR<PortalMessageUpdateManyMutationInput, PortalMessageUncheckedUpdateManyInput>
    /**
     * Filter which PortalMessages to update
     */
    where?: PortalMessageWhereInput
    /**
     * Limit how many PortalMessages to update.
     */
    limit?: number
  }

  /**
   * PortalMessage upsert
   */
  export type PortalMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PortalMessage to update in case it exists.
     */
    where: PortalMessageWhereUniqueInput
    /**
     * In case the PortalMessage found by the `where` argument doesn't exist, create a new PortalMessage with this data.
     */
    create: XOR<PortalMessageCreateInput, PortalMessageUncheckedCreateInput>
    /**
     * In case the PortalMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalMessageUpdateInput, PortalMessageUncheckedUpdateInput>
  }

  /**
   * PortalMessage delete
   */
  export type PortalMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
    /**
     * Filter which PortalMessage to delete.
     */
    where: PortalMessageWhereUniqueInput
  }

  /**
   * PortalMessage deleteMany
   */
  export type PortalMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalMessages to delete
     */
    where?: PortalMessageWhereInput
    /**
     * Limit how many PortalMessages to delete.
     */
    limit?: number
  }

  /**
   * PortalMessage findRaw
   */
  export type PortalMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalMessage aggregateRaw
   */
  export type PortalMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalMessage.senderStudent
   */
  export type PortalMessage$senderStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    where?: PortalStudentWhereInput
  }

  /**
   * PortalMessage.senderFaculty
   */
  export type PortalMessage$senderFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    where?: PortalFacultyWhereInput
  }

  /**
   * PortalMessage without action
   */
  export type PortalMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalMessage
     */
    select?: PortalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalMessage
     */
    omit?: PortalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalMessageInclude<ExtArgs> | null
  }


  /**
   * Model PortalDocument
   */

  export type AggregatePortalDocument = {
    _count: PortalDocumentCountAggregateOutputType | null
    _avg: PortalDocumentAvgAggregateOutputType | null
    _sum: PortalDocumentSumAggregateOutputType | null
    _min: PortalDocumentMinAggregateOutputType | null
    _max: PortalDocumentMaxAggregateOutputType | null
  }

  export type PortalDocumentAvgAggregateOutputType = {
    fileSize: number | null
    year: number | null
    downloads: number | null
  }

  export type PortalDocumentSumAggregateOutputType = {
    fileSize: number | null
    year: number | null
    downloads: number | null
  }

  export type PortalDocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    fileUrl: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    category: string | null
    year: number | null
    branch: string | null
    collegeName: string | null
    isPublic: boolean | null
    uploaderStudentId: string | null
    uploaderFacultyId: string | null
    downloads: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalDocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    fileUrl: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    category: string | null
    year: number | null
    branch: string | null
    collegeName: string | null
    isPublic: boolean | null
    uploaderStudentId: string | null
    uploaderFacultyId: string | null
    downloads: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalDocumentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    fileUrl: number
    fileName: number
    fileSize: number
    mimeType: number
    category: number
    year: number
    branch: number
    collegeName: number
    isPublic: number
    sharedWith: number
    uploaderStudentId: number
    uploaderFacultyId: number
    downloads: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortalDocumentAvgAggregateInputType = {
    fileSize?: true
    year?: true
    downloads?: true
  }

  export type PortalDocumentSumAggregateInputType = {
    fileSize?: true
    year?: true
    downloads?: true
  }

  export type PortalDocumentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    category?: true
    year?: true
    branch?: true
    collegeName?: true
    isPublic?: true
    uploaderStudentId?: true
    uploaderFacultyId?: true
    downloads?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalDocumentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    category?: true
    year?: true
    branch?: true
    collegeName?: true
    isPublic?: true
    uploaderStudentId?: true
    uploaderFacultyId?: true
    downloads?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalDocumentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    category?: true
    year?: true
    branch?: true
    collegeName?: true
    isPublic?: true
    sharedWith?: true
    uploaderStudentId?: true
    uploaderFacultyId?: true
    downloads?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortalDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalDocument to aggregate.
     */
    where?: PortalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalDocuments to fetch.
     */
    orderBy?: PortalDocumentOrderByWithRelationInput | PortalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalDocuments
    **/
    _count?: true | PortalDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalDocumentMaxAggregateInputType
  }

  export type GetPortalDocumentAggregateType<T extends PortalDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalDocument[P]>
      : GetScalarType<T[P], AggregatePortalDocument[P]>
  }




  export type PortalDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalDocumentWhereInput
    orderBy?: PortalDocumentOrderByWithAggregationInput | PortalDocumentOrderByWithAggregationInput[]
    by: PortalDocumentScalarFieldEnum[] | PortalDocumentScalarFieldEnum
    having?: PortalDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalDocumentCountAggregateInputType | true
    _avg?: PortalDocumentAvgAggregateInputType
    _sum?: PortalDocumentSumAggregateInputType
    _min?: PortalDocumentMinAggregateInputType
    _max?: PortalDocumentMaxAggregateInputType
  }

  export type PortalDocumentGroupByOutputType = {
    id: string
    title: string
    description: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category: string | null
    year: number | null
    branch: string | null
    collegeName: string | null
    isPublic: boolean
    sharedWith: string[]
    uploaderStudentId: string | null
    uploaderFacultyId: string | null
    downloads: number
    createdAt: Date
    updatedAt: Date
    _count: PortalDocumentCountAggregateOutputType | null
    _avg: PortalDocumentAvgAggregateOutputType | null
    _sum: PortalDocumentSumAggregateOutputType | null
    _min: PortalDocumentMinAggregateOutputType | null
    _max: PortalDocumentMaxAggregateOutputType | null
  }

  type GetPortalDocumentGroupByPayload<T extends PortalDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], PortalDocumentGroupByOutputType[P]>
        }
      >
    >


  export type PortalDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    category?: boolean
    year?: boolean
    branch?: boolean
    collegeName?: boolean
    isPublic?: boolean
    sharedWith?: boolean
    uploaderStudentId?: boolean
    uploaderFacultyId?: boolean
    downloads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploaderStudent?: boolean | PortalDocument$uploaderStudentArgs<ExtArgs>
    uploaderFaculty?: boolean | PortalDocument$uploaderFacultyArgs<ExtArgs>
  }, ExtArgs["result"]["portalDocument"]>



  export type PortalDocumentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    category?: boolean
    year?: boolean
    branch?: boolean
    collegeName?: boolean
    isPublic?: boolean
    sharedWith?: boolean
    uploaderStudentId?: boolean
    uploaderFacultyId?: boolean
    downloads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortalDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "fileUrl" | "fileName" | "fileSize" | "mimeType" | "category" | "year" | "branch" | "collegeName" | "isPublic" | "sharedWith" | "uploaderStudentId" | "uploaderFacultyId" | "downloads" | "createdAt" | "updatedAt", ExtArgs["result"]["portalDocument"]>
  export type PortalDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploaderStudent?: boolean | PortalDocument$uploaderStudentArgs<ExtArgs>
    uploaderFaculty?: boolean | PortalDocument$uploaderFacultyArgs<ExtArgs>
  }

  export type $PortalDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortalDocument"
    objects: {
      uploaderStudent: Prisma.$PortalStudentPayload<ExtArgs> | null
      uploaderFaculty: Prisma.$PortalFacultyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      fileUrl: string
      fileName: string
      fileSize: number
      mimeType: string
      category: string | null
      year: number | null
      branch: string | null
      collegeName: string | null
      isPublic: boolean
      sharedWith: string[]
      uploaderStudentId: string | null
      uploaderFacultyId: string | null
      downloads: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portalDocument"]>
    composites: {}
  }

  type PortalDocumentGetPayload<S extends boolean | null | undefined | PortalDocumentDefaultArgs> = $Result.GetResult<Prisma.$PortalDocumentPayload, S>

  type PortalDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortalDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortalDocumentCountAggregateInputType | true
    }

  export interface PortalDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortalDocument'], meta: { name: 'PortalDocument' } }
    /**
     * Find zero or one PortalDocument that matches the filter.
     * @param {PortalDocumentFindUniqueArgs} args - Arguments to find a PortalDocument
     * @example
     * // Get one PortalDocument
     * const portalDocument = await prisma.portalDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortalDocumentFindUniqueArgs>(args: SelectSubset<T, PortalDocumentFindUniqueArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortalDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortalDocumentFindUniqueOrThrowArgs} args - Arguments to find a PortalDocument
     * @example
     * // Get one PortalDocument
     * const portalDocument = await prisma.portalDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortalDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, PortalDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentFindFirstArgs} args - Arguments to find a PortalDocument
     * @example
     * // Get one PortalDocument
     * const portalDocument = await prisma.portalDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortalDocumentFindFirstArgs>(args?: SelectSubset<T, PortalDocumentFindFirstArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentFindFirstOrThrowArgs} args - Arguments to find a PortalDocument
     * @example
     * // Get one PortalDocument
     * const portalDocument = await prisma.portalDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortalDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, PortalDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalDocuments
     * const portalDocuments = await prisma.portalDocument.findMany()
     * 
     * // Get first 10 PortalDocuments
     * const portalDocuments = await prisma.portalDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalDocumentWithIdOnly = await prisma.portalDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortalDocumentFindManyArgs>(args?: SelectSubset<T, PortalDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortalDocument.
     * @param {PortalDocumentCreateArgs} args - Arguments to create a PortalDocument.
     * @example
     * // Create one PortalDocument
     * const PortalDocument = await prisma.portalDocument.create({
     *   data: {
     *     // ... data to create a PortalDocument
     *   }
     * })
     * 
     */
    create<T extends PortalDocumentCreateArgs>(args: SelectSubset<T, PortalDocumentCreateArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortalDocuments.
     * @param {PortalDocumentCreateManyArgs} args - Arguments to create many PortalDocuments.
     * @example
     * // Create many PortalDocuments
     * const portalDocument = await prisma.portalDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortalDocumentCreateManyArgs>(args?: SelectSubset<T, PortalDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PortalDocument.
     * @param {PortalDocumentDeleteArgs} args - Arguments to delete one PortalDocument.
     * @example
     * // Delete one PortalDocument
     * const PortalDocument = await prisma.portalDocument.delete({
     *   where: {
     *     // ... filter to delete one PortalDocument
     *   }
     * })
     * 
     */
    delete<T extends PortalDocumentDeleteArgs>(args: SelectSubset<T, PortalDocumentDeleteArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortalDocument.
     * @param {PortalDocumentUpdateArgs} args - Arguments to update one PortalDocument.
     * @example
     * // Update one PortalDocument
     * const portalDocument = await prisma.portalDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortalDocumentUpdateArgs>(args: SelectSubset<T, PortalDocumentUpdateArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortalDocuments.
     * @param {PortalDocumentDeleteManyArgs} args - Arguments to filter PortalDocuments to delete.
     * @example
     * // Delete a few PortalDocuments
     * const { count } = await prisma.portalDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortalDocumentDeleteManyArgs>(args?: SelectSubset<T, PortalDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalDocuments
     * const portalDocument = await prisma.portalDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortalDocumentUpdateManyArgs>(args: SelectSubset<T, PortalDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalDocument.
     * @param {PortalDocumentUpsertArgs} args - Arguments to update or create a PortalDocument.
     * @example
     * // Update or create a PortalDocument
     * const portalDocument = await prisma.portalDocument.upsert({
     *   create: {
     *     // ... data to create a PortalDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalDocument we want to update
     *   }
     * })
     */
    upsert<T extends PortalDocumentUpsertArgs>(args: SelectSubset<T, PortalDocumentUpsertArgs<ExtArgs>>): Prisma__PortalDocumentClient<$Result.GetResult<Prisma.$PortalDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalDocuments that matches the filter.
     * @param {PortalDocumentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const portalDocument = await prisma.portalDocument.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortalDocumentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PortalDocument.
     * @param {PortalDocumentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const portalDocument = await prisma.portalDocument.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortalDocumentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PortalDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentCountArgs} args - Arguments to filter PortalDocuments to count.
     * @example
     * // Count the number of PortalDocuments
     * const count = await prisma.portalDocument.count({
     *   where: {
     *     // ... the filter for the PortalDocuments we want to count
     *   }
     * })
    **/
    count<T extends PortalDocumentCountArgs>(
      args?: Subset<T, PortalDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalDocumentAggregateArgs>(args: Subset<T, PortalDocumentAggregateArgs>): Prisma.PrismaPromise<GetPortalDocumentAggregateType<T>>

    /**
     * Group by PortalDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalDocumentGroupByArgs['orderBy'] }
        : { orderBy?: PortalDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortalDocument model
   */
  readonly fields: PortalDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploaderStudent<T extends PortalDocument$uploaderStudentArgs<ExtArgs> = {}>(args?: Subset<T, PortalDocument$uploaderStudentArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    uploaderFaculty<T extends PortalDocument$uploaderFacultyArgs<ExtArgs> = {}>(args?: Subset<T, PortalDocument$uploaderFacultyArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortalDocument model
   */
  interface PortalDocumentFieldRefs {
    readonly id: FieldRef<"PortalDocument", 'String'>
    readonly title: FieldRef<"PortalDocument", 'String'>
    readonly description: FieldRef<"PortalDocument", 'String'>
    readonly fileUrl: FieldRef<"PortalDocument", 'String'>
    readonly fileName: FieldRef<"PortalDocument", 'String'>
    readonly fileSize: FieldRef<"PortalDocument", 'Int'>
    readonly mimeType: FieldRef<"PortalDocument", 'String'>
    readonly category: FieldRef<"PortalDocument", 'String'>
    readonly year: FieldRef<"PortalDocument", 'Int'>
    readonly branch: FieldRef<"PortalDocument", 'String'>
    readonly collegeName: FieldRef<"PortalDocument", 'String'>
    readonly isPublic: FieldRef<"PortalDocument", 'Boolean'>
    readonly sharedWith: FieldRef<"PortalDocument", 'String[]'>
    readonly uploaderStudentId: FieldRef<"PortalDocument", 'String'>
    readonly uploaderFacultyId: FieldRef<"PortalDocument", 'String'>
    readonly downloads: FieldRef<"PortalDocument", 'Int'>
    readonly createdAt: FieldRef<"PortalDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"PortalDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortalDocument findUnique
   */
  export type PortalDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PortalDocument to fetch.
     */
    where: PortalDocumentWhereUniqueInput
  }

  /**
   * PortalDocument findUniqueOrThrow
   */
  export type PortalDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PortalDocument to fetch.
     */
    where: PortalDocumentWhereUniqueInput
  }

  /**
   * PortalDocument findFirst
   */
  export type PortalDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PortalDocument to fetch.
     */
    where?: PortalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalDocuments to fetch.
     */
    orderBy?: PortalDocumentOrderByWithRelationInput | PortalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalDocuments.
     */
    cursor?: PortalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalDocuments.
     */
    distinct?: PortalDocumentScalarFieldEnum | PortalDocumentScalarFieldEnum[]
  }

  /**
   * PortalDocument findFirstOrThrow
   */
  export type PortalDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PortalDocument to fetch.
     */
    where?: PortalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalDocuments to fetch.
     */
    orderBy?: PortalDocumentOrderByWithRelationInput | PortalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalDocuments.
     */
    cursor?: PortalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalDocuments.
     */
    distinct?: PortalDocumentScalarFieldEnum | PortalDocumentScalarFieldEnum[]
  }

  /**
   * PortalDocument findMany
   */
  export type PortalDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PortalDocuments to fetch.
     */
    where?: PortalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalDocuments to fetch.
     */
    orderBy?: PortalDocumentOrderByWithRelationInput | PortalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalDocuments.
     */
    cursor?: PortalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalDocuments.
     */
    distinct?: PortalDocumentScalarFieldEnum | PortalDocumentScalarFieldEnum[]
  }

  /**
   * PortalDocument create
   */
  export type PortalDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a PortalDocument.
     */
    data: XOR<PortalDocumentCreateInput, PortalDocumentUncheckedCreateInput>
  }

  /**
   * PortalDocument createMany
   */
  export type PortalDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortalDocuments.
     */
    data: PortalDocumentCreateManyInput | PortalDocumentCreateManyInput[]
  }

  /**
   * PortalDocument update
   */
  export type PortalDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a PortalDocument.
     */
    data: XOR<PortalDocumentUpdateInput, PortalDocumentUncheckedUpdateInput>
    /**
     * Choose, which PortalDocument to update.
     */
    where: PortalDocumentWhereUniqueInput
  }

  /**
   * PortalDocument updateMany
   */
  export type PortalDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortalDocuments.
     */
    data: XOR<PortalDocumentUpdateManyMutationInput, PortalDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PortalDocuments to update
     */
    where?: PortalDocumentWhereInput
    /**
     * Limit how many PortalDocuments to update.
     */
    limit?: number
  }

  /**
   * PortalDocument upsert
   */
  export type PortalDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the PortalDocument to update in case it exists.
     */
    where: PortalDocumentWhereUniqueInput
    /**
     * In case the PortalDocument found by the `where` argument doesn't exist, create a new PortalDocument with this data.
     */
    create: XOR<PortalDocumentCreateInput, PortalDocumentUncheckedCreateInput>
    /**
     * In case the PortalDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalDocumentUpdateInput, PortalDocumentUncheckedUpdateInput>
  }

  /**
   * PortalDocument delete
   */
  export type PortalDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
    /**
     * Filter which PortalDocument to delete.
     */
    where: PortalDocumentWhereUniqueInput
  }

  /**
   * PortalDocument deleteMany
   */
  export type PortalDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalDocuments to delete
     */
    where?: PortalDocumentWhereInput
    /**
     * Limit how many PortalDocuments to delete.
     */
    limit?: number
  }

  /**
   * PortalDocument findRaw
   */
  export type PortalDocumentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalDocument aggregateRaw
   */
  export type PortalDocumentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalDocument.uploaderStudent
   */
  export type PortalDocument$uploaderStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalStudent
     */
    select?: PortalStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalStudent
     */
    omit?: PortalStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalStudentInclude<ExtArgs> | null
    where?: PortalStudentWhereInput
  }

  /**
   * PortalDocument.uploaderFaculty
   */
  export type PortalDocument$uploaderFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalFaculty
     */
    select?: PortalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalFaculty
     */
    omit?: PortalFacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalFacultyInclude<ExtArgs> | null
    where?: PortalFacultyWhereInput
  }

  /**
   * PortalDocument without action
   */
  export type PortalDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalDocument
     */
    select?: PortalDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalDocument
     */
    omit?: PortalDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortalDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    targetYear: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    targetYear: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    facultyId: string | null
    targetYear: number | null
    targetBranch: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    facultyId: string | null
    targetYear: number | null
    targetBranch: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    facultyId: number
    targetYear: number
    targetBranch: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    targetYear?: true
  }

  export type AnnouncementSumAggregateInputType = {
    targetYear?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    facultyId?: true
    targetYear?: true
    targetBranch?: true
    isActive?: true
    createdAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    facultyId?: true
    targetYear?: true
    targetBranch?: true
    isActive?: true
    createdAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    facultyId?: true
    targetYear?: true
    targetBranch?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    facultyId: string
    targetYear: number | null
    targetBranch: string | null
    isActive: boolean
    createdAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    facultyId?: boolean
    targetYear?: boolean
    targetBranch?: boolean
    isActive?: boolean
    createdAt?: boolean
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
    studentAnnouncements?: boolean | Announcement$studentAnnouncementsArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>



  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    facultyId?: boolean
    targetYear?: boolean
    targetBranch?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "facultyId" | "targetYear" | "targetBranch" | "isActive" | "createdAt", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
    studentAnnouncements?: boolean | Announcement$studentAnnouncementsArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      faculty: Prisma.$PortalFacultyPayload<ExtArgs>
      studentAnnouncements: Prisma.$StudentAnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      facultyId: string
      targetYear: number | null
      targetBranch: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * @param {AnnouncementFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const announcement = await prisma.announcement.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AnnouncementFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Announcement.
     * @param {AnnouncementAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const announcement = await prisma.announcement.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AnnouncementAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends PortalFacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalFacultyDefaultArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentAnnouncements<T extends Announcement$studentAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$studentAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly facultyId: FieldRef<"Announcement", 'String'>
    readonly targetYear: FieldRef<"Announcement", 'Int'>
    readonly targetBranch: FieldRef<"Announcement", 'String'>
    readonly isActive: FieldRef<"Announcement", 'Boolean'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement findRaw
   */
  export type AnnouncementFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Announcement aggregateRaw
   */
  export type AnnouncementAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Announcement.studentAnnouncements
   */
  export type Announcement$studentAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    where?: StudentAnnouncementWhereInput
    orderBy?: StudentAnnouncementOrderByWithRelationInput | StudentAnnouncementOrderByWithRelationInput[]
    cursor?: StudentAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAnnouncementScalarFieldEnum | StudentAnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model StudentAnnouncement
   */

  export type AggregateStudentAnnouncement = {
    _count: StudentAnnouncementCountAggregateOutputType | null
    _min: StudentAnnouncementMinAggregateOutputType | null
    _max: StudentAnnouncementMaxAggregateOutputType | null
  }

  export type StudentAnnouncementMinAggregateOutputType = {
    id: string | null
    announcementId: string | null
    studentId: string | null
    isRead: boolean | null
    readAt: Date | null
  }

  export type StudentAnnouncementMaxAggregateOutputType = {
    id: string | null
    announcementId: string | null
    studentId: string | null
    isRead: boolean | null
    readAt: Date | null
  }

  export type StudentAnnouncementCountAggregateOutputType = {
    id: number
    announcementId: number
    studentId: number
    isRead: number
    readAt: number
    _all: number
  }


  export type StudentAnnouncementMinAggregateInputType = {
    id?: true
    announcementId?: true
    studentId?: true
    isRead?: true
    readAt?: true
  }

  export type StudentAnnouncementMaxAggregateInputType = {
    id?: true
    announcementId?: true
    studentId?: true
    isRead?: true
    readAt?: true
  }

  export type StudentAnnouncementCountAggregateInputType = {
    id?: true
    announcementId?: true
    studentId?: true
    isRead?: true
    readAt?: true
    _all?: true
  }

  export type StudentAnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAnnouncement to aggregate.
     */
    where?: StudentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnnouncements to fetch.
     */
    orderBy?: StudentAnnouncementOrderByWithRelationInput | StudentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAnnouncements
    **/
    _count?: true | StudentAnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAnnouncementMaxAggregateInputType
  }

  export type GetStudentAnnouncementAggregateType<T extends StudentAnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAnnouncement[P]>
      : GetScalarType<T[P], AggregateStudentAnnouncement[P]>
  }




  export type StudentAnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnnouncementWhereInput
    orderBy?: StudentAnnouncementOrderByWithAggregationInput | StudentAnnouncementOrderByWithAggregationInput[]
    by: StudentAnnouncementScalarFieldEnum[] | StudentAnnouncementScalarFieldEnum
    having?: StudentAnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAnnouncementCountAggregateInputType | true
    _min?: StudentAnnouncementMinAggregateInputType
    _max?: StudentAnnouncementMaxAggregateInputType
  }

  export type StudentAnnouncementGroupByOutputType = {
    id: string
    announcementId: string
    studentId: string
    isRead: boolean
    readAt: Date | null
    _count: StudentAnnouncementCountAggregateOutputType | null
    _min: StudentAnnouncementMinAggregateOutputType | null
    _max: StudentAnnouncementMaxAggregateOutputType | null
  }

  type GetStudentAnnouncementGroupByPayload<T extends StudentAnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type StudentAnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    announcementId?: boolean
    studentId?: boolean
    isRead?: boolean
    readAt?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAnnouncement"]>



  export type StudentAnnouncementSelectScalar = {
    id?: boolean
    announcementId?: boolean
    studentId?: boolean
    isRead?: boolean
    readAt?: boolean
  }

  export type StudentAnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "announcementId" | "studentId" | "isRead" | "readAt", ExtArgs["result"]["studentAnnouncement"]>
  export type StudentAnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
  }

  export type $StudentAnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAnnouncement"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      student: Prisma.$PortalStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      announcementId: string
      studentId: string
      isRead: boolean
      readAt: Date | null
    }, ExtArgs["result"]["studentAnnouncement"]>
    composites: {}
  }

  type StudentAnnouncementGetPayload<S extends boolean | null | undefined | StudentAnnouncementDefaultArgs> = $Result.GetResult<Prisma.$StudentAnnouncementPayload, S>

  type StudentAnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAnnouncementCountAggregateInputType | true
    }

  export interface StudentAnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAnnouncement'], meta: { name: 'StudentAnnouncement' } }
    /**
     * Find zero or one StudentAnnouncement that matches the filter.
     * @param {StudentAnnouncementFindUniqueArgs} args - Arguments to find a StudentAnnouncement
     * @example
     * // Get one StudentAnnouncement
     * const studentAnnouncement = await prisma.studentAnnouncement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAnnouncementFindUniqueArgs>(args: SelectSubset<T, StudentAnnouncementFindUniqueArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAnnouncement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAnnouncementFindUniqueOrThrowArgs} args - Arguments to find a StudentAnnouncement
     * @example
     * // Get one StudentAnnouncement
     * const studentAnnouncement = await prisma.studentAnnouncement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAnnouncement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementFindFirstArgs} args - Arguments to find a StudentAnnouncement
     * @example
     * // Get one StudentAnnouncement
     * const studentAnnouncement = await prisma.studentAnnouncement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAnnouncementFindFirstArgs>(args?: SelectSubset<T, StudentAnnouncementFindFirstArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAnnouncement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementFindFirstOrThrowArgs} args - Arguments to find a StudentAnnouncement
     * @example
     * // Get one StudentAnnouncement
     * const studentAnnouncement = await prisma.studentAnnouncement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAnnouncements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAnnouncements
     * const studentAnnouncements = await prisma.studentAnnouncement.findMany()
     * 
     * // Get first 10 StudentAnnouncements
     * const studentAnnouncements = await prisma.studentAnnouncement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAnnouncementWithIdOnly = await prisma.studentAnnouncement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAnnouncementFindManyArgs>(args?: SelectSubset<T, StudentAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAnnouncement.
     * @param {StudentAnnouncementCreateArgs} args - Arguments to create a StudentAnnouncement.
     * @example
     * // Create one StudentAnnouncement
     * const StudentAnnouncement = await prisma.studentAnnouncement.create({
     *   data: {
     *     // ... data to create a StudentAnnouncement
     *   }
     * })
     * 
     */
    create<T extends StudentAnnouncementCreateArgs>(args: SelectSubset<T, StudentAnnouncementCreateArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAnnouncements.
     * @param {StudentAnnouncementCreateManyArgs} args - Arguments to create many StudentAnnouncements.
     * @example
     * // Create many StudentAnnouncements
     * const studentAnnouncement = await prisma.studentAnnouncement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAnnouncementCreateManyArgs>(args?: SelectSubset<T, StudentAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentAnnouncement.
     * @param {StudentAnnouncementDeleteArgs} args - Arguments to delete one StudentAnnouncement.
     * @example
     * // Delete one StudentAnnouncement
     * const StudentAnnouncement = await prisma.studentAnnouncement.delete({
     *   where: {
     *     // ... filter to delete one StudentAnnouncement
     *   }
     * })
     * 
     */
    delete<T extends StudentAnnouncementDeleteArgs>(args: SelectSubset<T, StudentAnnouncementDeleteArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAnnouncement.
     * @param {StudentAnnouncementUpdateArgs} args - Arguments to update one StudentAnnouncement.
     * @example
     * // Update one StudentAnnouncement
     * const studentAnnouncement = await prisma.studentAnnouncement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAnnouncementUpdateArgs>(args: SelectSubset<T, StudentAnnouncementUpdateArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAnnouncements.
     * @param {StudentAnnouncementDeleteManyArgs} args - Arguments to filter StudentAnnouncements to delete.
     * @example
     * // Delete a few StudentAnnouncements
     * const { count } = await prisma.studentAnnouncement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAnnouncementDeleteManyArgs>(args?: SelectSubset<T, StudentAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAnnouncements
     * const studentAnnouncement = await prisma.studentAnnouncement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAnnouncementUpdateManyArgs>(args: SelectSubset<T, StudentAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentAnnouncement.
     * @param {StudentAnnouncementUpsertArgs} args - Arguments to update or create a StudentAnnouncement.
     * @example
     * // Update or create a StudentAnnouncement
     * const studentAnnouncement = await prisma.studentAnnouncement.upsert({
     *   create: {
     *     // ... data to create a StudentAnnouncement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAnnouncement we want to update
     *   }
     * })
     */
    upsert<T extends StudentAnnouncementUpsertArgs>(args: SelectSubset<T, StudentAnnouncementUpsertArgs<ExtArgs>>): Prisma__StudentAnnouncementClient<$Result.GetResult<Prisma.$StudentAnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAnnouncements that matches the filter.
     * @param {StudentAnnouncementFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const studentAnnouncement = await prisma.studentAnnouncement.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentAnnouncementFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StudentAnnouncement.
     * @param {StudentAnnouncementAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const studentAnnouncement = await prisma.studentAnnouncement.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAnnouncementAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StudentAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementCountArgs} args - Arguments to filter StudentAnnouncements to count.
     * @example
     * // Count the number of StudentAnnouncements
     * const count = await prisma.studentAnnouncement.count({
     *   where: {
     *     // ... the filter for the StudentAnnouncements we want to count
     *   }
     * })
    **/
    count<T extends StudentAnnouncementCountArgs>(
      args?: Subset<T, StudentAnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAnnouncementAggregateArgs>(args: Subset<T, StudentAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetStudentAnnouncementAggregateType<T>>

    /**
     * Group by StudentAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentAnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: StudentAnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAnnouncement model
   */
  readonly fields: StudentAnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAnnouncement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends PortalStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudentDefaultArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentAnnouncement model
   */
  interface StudentAnnouncementFieldRefs {
    readonly id: FieldRef<"StudentAnnouncement", 'String'>
    readonly announcementId: FieldRef<"StudentAnnouncement", 'String'>
    readonly studentId: FieldRef<"StudentAnnouncement", 'String'>
    readonly isRead: FieldRef<"StudentAnnouncement", 'Boolean'>
    readonly readAt: FieldRef<"StudentAnnouncement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentAnnouncement findUnique
   */
  export type StudentAnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnnouncement to fetch.
     */
    where: StudentAnnouncementWhereUniqueInput
  }

  /**
   * StudentAnnouncement findUniqueOrThrow
   */
  export type StudentAnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnnouncement to fetch.
     */
    where: StudentAnnouncementWhereUniqueInput
  }

  /**
   * StudentAnnouncement findFirst
   */
  export type StudentAnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnnouncement to fetch.
     */
    where?: StudentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnnouncements to fetch.
     */
    orderBy?: StudentAnnouncementOrderByWithRelationInput | StudentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAnnouncements.
     */
    cursor?: StudentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnnouncements.
     */
    distinct?: StudentAnnouncementScalarFieldEnum | StudentAnnouncementScalarFieldEnum[]
  }

  /**
   * StudentAnnouncement findFirstOrThrow
   */
  export type StudentAnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnnouncement to fetch.
     */
    where?: StudentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnnouncements to fetch.
     */
    orderBy?: StudentAnnouncementOrderByWithRelationInput | StudentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAnnouncements.
     */
    cursor?: StudentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnnouncements.
     */
    distinct?: StudentAnnouncementScalarFieldEnum | StudentAnnouncementScalarFieldEnum[]
  }

  /**
   * StudentAnnouncement findMany
   */
  export type StudentAnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnnouncements to fetch.
     */
    where?: StudentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnnouncements to fetch.
     */
    orderBy?: StudentAnnouncementOrderByWithRelationInput | StudentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAnnouncements.
     */
    cursor?: StudentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnnouncements.
     */
    distinct?: StudentAnnouncementScalarFieldEnum | StudentAnnouncementScalarFieldEnum[]
  }

  /**
   * StudentAnnouncement create
   */
  export type StudentAnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAnnouncement.
     */
    data: XOR<StudentAnnouncementCreateInput, StudentAnnouncementUncheckedCreateInput>
  }

  /**
   * StudentAnnouncement createMany
   */
  export type StudentAnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAnnouncements.
     */
    data: StudentAnnouncementCreateManyInput | StudentAnnouncementCreateManyInput[]
  }

  /**
   * StudentAnnouncement update
   */
  export type StudentAnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAnnouncement.
     */
    data: XOR<StudentAnnouncementUpdateInput, StudentAnnouncementUncheckedUpdateInput>
    /**
     * Choose, which StudentAnnouncement to update.
     */
    where: StudentAnnouncementWhereUniqueInput
  }

  /**
   * StudentAnnouncement updateMany
   */
  export type StudentAnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAnnouncements.
     */
    data: XOR<StudentAnnouncementUpdateManyMutationInput, StudentAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which StudentAnnouncements to update
     */
    where?: StudentAnnouncementWhereInput
    /**
     * Limit how many StudentAnnouncements to update.
     */
    limit?: number
  }

  /**
   * StudentAnnouncement upsert
   */
  export type StudentAnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAnnouncement to update in case it exists.
     */
    where: StudentAnnouncementWhereUniqueInput
    /**
     * In case the StudentAnnouncement found by the `where` argument doesn't exist, create a new StudentAnnouncement with this data.
     */
    create: XOR<StudentAnnouncementCreateInput, StudentAnnouncementUncheckedCreateInput>
    /**
     * In case the StudentAnnouncement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAnnouncementUpdateInput, StudentAnnouncementUncheckedUpdateInput>
  }

  /**
   * StudentAnnouncement delete
   */
  export type StudentAnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter which StudentAnnouncement to delete.
     */
    where: StudentAnnouncementWhereUniqueInput
  }

  /**
   * StudentAnnouncement deleteMany
   */
  export type StudentAnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAnnouncements to delete
     */
    where?: StudentAnnouncementWhereInput
    /**
     * Limit how many StudentAnnouncements to delete.
     */
    limit?: number
  }

  /**
   * StudentAnnouncement findRaw
   */
  export type StudentAnnouncementFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentAnnouncement aggregateRaw
   */
  export type StudentAnnouncementAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentAnnouncement without action
   */
  export type StudentAnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnnouncement
     */
    select?: StudentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnnouncement
     */
    omit?: StudentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRecord
   */

  export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  export type AttendanceRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    facultyId: string | null
    subject: string | null
    date: string | null
    status: string | null
    note: string | null
    createdAt: Date | null
  }

  export type AttendanceRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    facultyId: string | null
    subject: string | null
    date: string | null
    status: string | null
    note: string | null
    createdAt: Date | null
  }

  export type AttendanceRecordCountAggregateOutputType = {
    id: number
    studentId: number
    facultyId: number
    subject: number
    date: number
    status: number
    note: number
    createdAt: number
    _all: number
  }


  export type AttendanceRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    facultyId?: true
    subject?: true
    date?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type AttendanceRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    facultyId?: true
    subject?: true
    date?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type AttendanceRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    facultyId?: true
    subject?: true
    date?: true
    status?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecord to aggregate.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRecords
    **/
    _count?: true | AttendanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRecord[P]>
      : GetScalarType<T[P], AggregateAttendanceRecord[P]>
  }




  export type AttendanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithAggregationInput | AttendanceRecordOrderByWithAggregationInput[]
    by: AttendanceRecordScalarFieldEnum[] | AttendanceRecordScalarFieldEnum
    having?: AttendanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRecordCountAggregateInputType | true
    _min?: AttendanceRecordMinAggregateInputType
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type AttendanceRecordGroupByOutputType = {
    id: string
    studentId: string
    facultyId: string
    subject: string
    date: string
    status: string
    note: string | null
    createdAt: Date
    _count: AttendanceRecordCountAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    facultyId?: boolean
    subject?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>



  export type AttendanceRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    facultyId?: boolean
    subject?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type AttendanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "facultyId" | "subject" | "date" | "status" | "note" | "createdAt", ExtArgs["result"]["attendanceRecord"]>
  export type AttendanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
  }

  export type $AttendanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRecord"
    objects: {
      student: Prisma.$PortalStudentPayload<ExtArgs>
      faculty: Prisma.$PortalFacultyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      facultyId: string
      subject: string
      date: string
      status: string
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["attendanceRecord"]>
    composites: {}
  }

  type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRecordPayload, S>

  type AttendanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceRecordCountAggregateInputType | true
    }

  export interface AttendanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'], meta: { name: 'AttendanceRecord' } }
    /**
     * Find zero or one AttendanceRecord that matches the filter.
     * @param {AttendanceRecordFindUniqueArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceRecordFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany()
     * 
     * // Get first 10 AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRecordFindManyArgs>(args?: SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceRecord.
     * @param {AttendanceRecordCreateArgs} args - Arguments to create a AttendanceRecord.
     * @example
     * // Create one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.create({
     *   data: {
     *     // ... data to create a AttendanceRecord
     *   }
     * })
     * 
     */
    create<T extends AttendanceRecordCreateArgs>(args: SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceRecords.
     * @param {AttendanceRecordCreateManyArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttendanceRecord.
     * @param {AttendanceRecordDeleteArgs} args - Arguments to delete one AttendanceRecord.
     * @example
     * // Delete one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRecord
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRecordDeleteArgs>(args: SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceRecord.
     * @param {AttendanceRecordUpdateArgs} args - Arguments to update one AttendanceRecord.
     * @example
     * // Update one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRecordUpdateArgs>(args: SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceRecords.
     * @param {AttendanceRecordDeleteManyArgs} args - Arguments to filter AttendanceRecords to delete.
     * @example
     * // Delete a few AttendanceRecords
     * const { count } = await prisma.attendanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttendanceRecord.
     * @param {AttendanceRecordUpsertArgs} args - Arguments to update or create a AttendanceRecord.
     * @example
     * // Update or create a AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.upsert({
     *   create: {
     *     // ... data to create a AttendanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRecordUpsertArgs>(args: SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * @param {AttendanceRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const attendanceRecord = await prisma.attendanceRecord.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AttendanceRecordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AttendanceRecord.
     * @param {AttendanceRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const attendanceRecord = await prisma.attendanceRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AttendanceRecordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordCountArgs} args - Arguments to filter AttendanceRecords to count.
     * @example
     * // Count the number of AttendanceRecords
     * const count = await prisma.attendanceRecord.count({
     *   where: {
     *     // ... the filter for the AttendanceRecords we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRecordCountArgs>(
      args?: Subset<T, AttendanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>

    /**
     * Group by AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRecord model
   */
  readonly fields: AttendanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends PortalStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudentDefaultArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    faculty<T extends PortalFacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalFacultyDefaultArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceRecord model
   */
  interface AttendanceRecordFieldRefs {
    readonly id: FieldRef<"AttendanceRecord", 'String'>
    readonly studentId: FieldRef<"AttendanceRecord", 'String'>
    readonly facultyId: FieldRef<"AttendanceRecord", 'String'>
    readonly subject: FieldRef<"AttendanceRecord", 'String'>
    readonly date: FieldRef<"AttendanceRecord", 'String'>
    readonly status: FieldRef<"AttendanceRecord", 'String'>
    readonly note: FieldRef<"AttendanceRecord", 'String'>
    readonly createdAt: FieldRef<"AttendanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRecord findUnique
   */
  export type AttendanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findUniqueOrThrow
   */
  export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findFirst
   */
  export type AttendanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findFirstOrThrow
   */
  export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findMany
   */
  export type AttendanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecords to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord create
   */
  export type AttendanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRecord.
     */
    data: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
  }

  /**
   * AttendanceRecord createMany
   */
  export type AttendanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
  }

  /**
   * AttendanceRecord update
   */
  export type AttendanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRecord.
     */
    data: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRecord to update.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord updateMany
   */
  export type AttendanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
  }

  /**
   * AttendanceRecord upsert
   */
  export type AttendanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRecord to update in case it exists.
     */
    where: AttendanceRecordWhereUniqueInput
    /**
     * In case the AttendanceRecord found by the `where` argument doesn't exist, create a new AttendanceRecord with this data.
     */
    create: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
    /**
     * In case the AttendanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
  }

  /**
   * AttendanceRecord delete
   */
  export type AttendanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRecord to delete.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord deleteMany
   */
  export type AttendanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecords to delete
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to delete.
     */
    limit?: number
  }

  /**
   * AttendanceRecord findRaw
   */
  export type AttendanceRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AttendanceRecord aggregateRaw
   */
  export type AttendanceRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AttendanceRecord without action
   */
  export type AttendanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    targetYear: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    targetYear: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    facultyId: string | null
    dueDate: Date | null
    targetYear: number | null
    targetBranch: string | null
    fileUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    facultyId: string | null
    dueDate: Date | null
    targetYear: number | null
    targetBranch: string | null
    fileUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    facultyId: number
    dueDate: number
    targetYear: number
    targetBranch: number
    fileUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    targetYear?: true
  }

  export type AssignmentSumAggregateInputType = {
    targetYear?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    facultyId?: true
    dueDate?: true
    targetYear?: true
    targetBranch?: true
    fileUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    facultyId?: true
    dueDate?: true
    targetYear?: true
    targetBranch?: true
    fileUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    facultyId?: true
    dueDate?: true
    targetYear?: true
    targetBranch?: true
    fileUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    title: string
    description: string
    facultyId: string
    dueDate: Date
    targetYear: number | null
    targetBranch: string | null
    fileUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    facultyId?: boolean
    dueDate?: boolean
    targetYear?: boolean
    targetBranch?: boolean
    fileUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>



  export type AssignmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    facultyId?: boolean
    dueDate?: boolean
    targetYear?: boolean
    targetBranch?: boolean
    fileUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "facultyId" | "dueDate" | "targetYear" | "targetBranch" | "fileUrl" | "isActive" | "createdAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | PortalFacultyDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      faculty: Prisma.$PortalFacultyPayload<ExtArgs>
      submissions: Prisma.$AssignmentSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      facultyId: string
      dueDate: Date
      targetYear: number | null
      targetBranch: string | null
      fileUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * @param {AssignmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const assignment = await prisma.assignment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AssignmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Assignment.
     * @param {AssignmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const assignment = await prisma.assignment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AssignmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends PortalFacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalFacultyDefaultArgs<ExtArgs>>): Prisma__PortalFacultyClient<$Result.GetResult<Prisma.$PortalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly facultyId: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'DateTime'>
    readonly targetYear: FieldRef<"Assignment", 'Int'>
    readonly targetBranch: FieldRef<"Assignment", 'String'>
    readonly fileUrl: FieldRef<"Assignment", 'String'>
    readonly isActive: FieldRef<"Assignment", 'Boolean'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment findRaw
   */
  export type AssignmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Assignment aggregateRaw
   */
  export type AssignmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    where?: AssignmentSubmissionWhereInput
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    cursor?: AssignmentSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentSubmission
   */

  export type AggregateAssignmentSubmission = {
    _count: AssignmentSubmissionCountAggregateOutputType | null
    _min: AssignmentSubmissionMinAggregateOutputType | null
    _max: AssignmentSubmissionMaxAggregateOutputType | null
  }

  export type AssignmentSubmissionMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    studentId: string | null
    fileUrl: string | null
    fileName: string | null
    note: string | null
    grade: string | null
    feedback: string | null
    submittedAt: Date | null
  }

  export type AssignmentSubmissionMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    studentId: string | null
    fileUrl: string | null
    fileName: string | null
    note: string | null
    grade: string | null
    feedback: string | null
    submittedAt: Date | null
  }

  export type AssignmentSubmissionCountAggregateOutputType = {
    id: number
    assignmentId: number
    studentId: number
    fileUrl: number
    fileName: number
    note: number
    grade: number
    feedback: number
    submittedAt: number
    _all: number
  }


  export type AssignmentSubmissionMinAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    fileUrl?: true
    fileName?: true
    note?: true
    grade?: true
    feedback?: true
    submittedAt?: true
  }

  export type AssignmentSubmissionMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    fileUrl?: true
    fileName?: true
    note?: true
    grade?: true
    feedback?: true
    submittedAt?: true
  }

  export type AssignmentSubmissionCountAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    fileUrl?: true
    fileName?: true
    note?: true
    grade?: true
    feedback?: true
    submittedAt?: true
    _all?: true
  }

  export type AssignmentSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentSubmission to aggregate.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentSubmissions
    **/
    _count?: true | AssignmentSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentSubmissionMaxAggregateInputType
  }

  export type GetAssignmentSubmissionAggregateType<T extends AssignmentSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentSubmission[P]>
      : GetScalarType<T[P], AggregateAssignmentSubmission[P]>
  }




  export type AssignmentSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentSubmissionWhereInput
    orderBy?: AssignmentSubmissionOrderByWithAggregationInput | AssignmentSubmissionOrderByWithAggregationInput[]
    by: AssignmentSubmissionScalarFieldEnum[] | AssignmentSubmissionScalarFieldEnum
    having?: AssignmentSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentSubmissionCountAggregateInputType | true
    _min?: AssignmentSubmissionMinAggregateInputType
    _max?: AssignmentSubmissionMaxAggregateInputType
  }

  export type AssignmentSubmissionGroupByOutputType = {
    id: string
    assignmentId: string
    studentId: string
    fileUrl: string
    fileName: string
    note: string | null
    grade: string | null
    feedback: string | null
    submittedAt: Date
    _count: AssignmentSubmissionCountAggregateOutputType | null
    _min: AssignmentSubmissionMinAggregateOutputType | null
    _max: AssignmentSubmissionMaxAggregateOutputType | null
  }

  type GetAssignmentSubmissionGroupByPayload<T extends AssignmentSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    note?: boolean
    grade?: boolean
    feedback?: boolean
    submittedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentSubmission"]>



  export type AssignmentSubmissionSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    note?: boolean
    grade?: boolean
    feedback?: boolean
    submittedAt?: boolean
  }

  export type AssignmentSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "studentId" | "fileUrl" | "fileName" | "note" | "grade" | "feedback" | "submittedAt", ExtArgs["result"]["assignmentSubmission"]>
  export type AssignmentSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | PortalStudentDefaultArgs<ExtArgs>
  }

  export type $AssignmentSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentSubmission"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      student: Prisma.$PortalStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      studentId: string
      fileUrl: string
      fileName: string
      note: string | null
      grade: string | null
      feedback: string | null
      submittedAt: Date
    }, ExtArgs["result"]["assignmentSubmission"]>
    composites: {}
  }

  type AssignmentSubmissionGetPayload<S extends boolean | null | undefined | AssignmentSubmissionDefaultArgs> = $Result.GetResult<Prisma.$AssignmentSubmissionPayload, S>

  type AssignmentSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentSubmissionCountAggregateInputType | true
    }

  export interface AssignmentSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentSubmission'], meta: { name: 'AssignmentSubmission' } }
    /**
     * Find zero or one AssignmentSubmission that matches the filter.
     * @param {AssignmentSubmissionFindUniqueArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentSubmissionFindUniqueArgs>(args: SelectSubset<T, AssignmentSubmissionFindUniqueArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentSubmissionFindUniqueOrThrowArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionFindFirstArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentSubmissionFindFirstArgs>(args?: SelectSubset<T, AssignmentSubmissionFindFirstArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionFindFirstOrThrowArgs} args - Arguments to find a AssignmentSubmission
     * @example
     * // Get one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentSubmissions
     * const assignmentSubmissions = await prisma.assignmentSubmission.findMany()
     * 
     * // Get first 10 AssignmentSubmissions
     * const assignmentSubmissions = await prisma.assignmentSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentSubmissionWithIdOnly = await prisma.assignmentSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentSubmissionFindManyArgs>(args?: SelectSubset<T, AssignmentSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentSubmission.
     * @param {AssignmentSubmissionCreateArgs} args - Arguments to create a AssignmentSubmission.
     * @example
     * // Create one AssignmentSubmission
     * const AssignmentSubmission = await prisma.assignmentSubmission.create({
     *   data: {
     *     // ... data to create a AssignmentSubmission
     *   }
     * })
     * 
     */
    create<T extends AssignmentSubmissionCreateArgs>(args: SelectSubset<T, AssignmentSubmissionCreateArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentSubmissions.
     * @param {AssignmentSubmissionCreateManyArgs} args - Arguments to create many AssignmentSubmissions.
     * @example
     * // Create many AssignmentSubmissions
     * const assignmentSubmission = await prisma.assignmentSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentSubmissionCreateManyArgs>(args?: SelectSubset<T, AssignmentSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssignmentSubmission.
     * @param {AssignmentSubmissionDeleteArgs} args - Arguments to delete one AssignmentSubmission.
     * @example
     * // Delete one AssignmentSubmission
     * const AssignmentSubmission = await prisma.assignmentSubmission.delete({
     *   where: {
     *     // ... filter to delete one AssignmentSubmission
     *   }
     * })
     * 
     */
    delete<T extends AssignmentSubmissionDeleteArgs>(args: SelectSubset<T, AssignmentSubmissionDeleteArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentSubmission.
     * @param {AssignmentSubmissionUpdateArgs} args - Arguments to update one AssignmentSubmission.
     * @example
     * // Update one AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentSubmissionUpdateArgs>(args: SelectSubset<T, AssignmentSubmissionUpdateArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentSubmissions.
     * @param {AssignmentSubmissionDeleteManyArgs} args - Arguments to filter AssignmentSubmissions to delete.
     * @example
     * // Delete a few AssignmentSubmissions
     * const { count } = await prisma.assignmentSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentSubmissionDeleteManyArgs>(args?: SelectSubset<T, AssignmentSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentSubmissions
     * const assignmentSubmission = await prisma.assignmentSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentSubmissionUpdateManyArgs>(args: SelectSubset<T, AssignmentSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssignmentSubmission.
     * @param {AssignmentSubmissionUpsertArgs} args - Arguments to update or create a AssignmentSubmission.
     * @example
     * // Update or create a AssignmentSubmission
     * const assignmentSubmission = await prisma.assignmentSubmission.upsert({
     *   create: {
     *     // ... data to create a AssignmentSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentSubmission we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentSubmissionUpsertArgs>(args: SelectSubset<T, AssignmentSubmissionUpsertArgs<ExtArgs>>): Prisma__AssignmentSubmissionClient<$Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentSubmissions that matches the filter.
     * @param {AssignmentSubmissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const assignmentSubmission = await prisma.assignmentSubmission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AssignmentSubmissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AssignmentSubmission.
     * @param {AssignmentSubmissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const assignmentSubmission = await prisma.assignmentSubmission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AssignmentSubmissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AssignmentSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionCountArgs} args - Arguments to filter AssignmentSubmissions to count.
     * @example
     * // Count the number of AssignmentSubmissions
     * const count = await prisma.assignmentSubmission.count({
     *   where: {
     *     // ... the filter for the AssignmentSubmissions we want to count
     *   }
     * })
    **/
    count<T extends AssignmentSubmissionCountArgs>(
      args?: Subset<T, AssignmentSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentSubmissionAggregateArgs>(args: Subset<T, AssignmentSubmissionAggregateArgs>): Prisma.PrismaPromise<GetAssignmentSubmissionAggregateType<T>>

    /**
     * Group by AssignmentSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentSubmission model
   */
  readonly fields: AssignmentSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends PortalStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortalStudentDefaultArgs<ExtArgs>>): Prisma__PortalStudentClient<$Result.GetResult<Prisma.$PortalStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignmentSubmission model
   */
  interface AssignmentSubmissionFieldRefs {
    readonly id: FieldRef<"AssignmentSubmission", 'String'>
    readonly assignmentId: FieldRef<"AssignmentSubmission", 'String'>
    readonly studentId: FieldRef<"AssignmentSubmission", 'String'>
    readonly fileUrl: FieldRef<"AssignmentSubmission", 'String'>
    readonly fileName: FieldRef<"AssignmentSubmission", 'String'>
    readonly note: FieldRef<"AssignmentSubmission", 'String'>
    readonly grade: FieldRef<"AssignmentSubmission", 'String'>
    readonly feedback: FieldRef<"AssignmentSubmission", 'String'>
    readonly submittedAt: FieldRef<"AssignmentSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentSubmission findUnique
   */
  export type AssignmentSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission findUniqueOrThrow
   */
  export type AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission findFirst
   */
  export type AssignmentSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentSubmissions.
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSubmissions.
     */
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * AssignmentSubmission findFirstOrThrow
   */
  export type AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmission to fetch.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentSubmissions.
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSubmissions.
     */
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * AssignmentSubmission findMany
   */
  export type AssignmentSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentSubmissions to fetch.
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentSubmissions to fetch.
     */
    orderBy?: AssignmentSubmissionOrderByWithRelationInput | AssignmentSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentSubmissions.
     */
    cursor?: AssignmentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentSubmissions.
     */
    distinct?: AssignmentSubmissionScalarFieldEnum | AssignmentSubmissionScalarFieldEnum[]
  }

  /**
   * AssignmentSubmission create
   */
  export type AssignmentSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignmentSubmission.
     */
    data: XOR<AssignmentSubmissionCreateInput, AssignmentSubmissionUncheckedCreateInput>
  }

  /**
   * AssignmentSubmission createMany
   */
  export type AssignmentSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentSubmissions.
     */
    data: AssignmentSubmissionCreateManyInput | AssignmentSubmissionCreateManyInput[]
  }

  /**
   * AssignmentSubmission update
   */
  export type AssignmentSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignmentSubmission.
     */
    data: XOR<AssignmentSubmissionUpdateInput, AssignmentSubmissionUncheckedUpdateInput>
    /**
     * Choose, which AssignmentSubmission to update.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission updateMany
   */
  export type AssignmentSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentSubmissions.
     */
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentSubmissions to update
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * Limit how many AssignmentSubmissions to update.
     */
    limit?: number
  }

  /**
   * AssignmentSubmission upsert
   */
  export type AssignmentSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignmentSubmission to update in case it exists.
     */
    where: AssignmentSubmissionWhereUniqueInput
    /**
     * In case the AssignmentSubmission found by the `where` argument doesn't exist, create a new AssignmentSubmission with this data.
     */
    create: XOR<AssignmentSubmissionCreateInput, AssignmentSubmissionUncheckedCreateInput>
    /**
     * In case the AssignmentSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentSubmissionUpdateInput, AssignmentSubmissionUncheckedUpdateInput>
  }

  /**
   * AssignmentSubmission delete
   */
  export type AssignmentSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
    /**
     * Filter which AssignmentSubmission to delete.
     */
    where: AssignmentSubmissionWhereUniqueInput
  }

  /**
   * AssignmentSubmission deleteMany
   */
  export type AssignmentSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentSubmissions to delete
     */
    where?: AssignmentSubmissionWhereInput
    /**
     * Limit how many AssignmentSubmissions to delete.
     */
    limit?: number
  }

  /**
   * AssignmentSubmission findRaw
   */
  export type AssignmentSubmissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AssignmentSubmission aggregateRaw
   */
  export type AssignmentSubmissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AssignmentSubmission without action
   */
  export type AssignmentSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentSubmission
     */
    select?: AssignmentSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentSubmission
     */
    omit?: AssignmentSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model PortalRefreshToken
   */

  export type AggregatePortalRefreshToken = {
    _count: PortalRefreshTokenCountAggregateOutputType | null
    _min: PortalRefreshTokenMinAggregateOutputType | null
    _max: PortalRefreshTokenMaxAggregateOutputType | null
  }

  export type PortalRefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    userRole: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PortalRefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    userRole: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PortalRefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    userRole: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PortalRefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    userRole?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PortalRefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    userRole?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PortalRefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    userRole?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PortalRefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalRefreshToken to aggregate.
     */
    where?: PortalRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalRefreshTokens to fetch.
     */
    orderBy?: PortalRefreshTokenOrderByWithRelationInput | PortalRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalRefreshTokens
    **/
    _count?: true | PortalRefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalRefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalRefreshTokenMaxAggregateInputType
  }

  export type GetPortalRefreshTokenAggregateType<T extends PortalRefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalRefreshToken[P]>
      : GetScalarType<T[P], AggregatePortalRefreshToken[P]>
  }




  export type PortalRefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalRefreshTokenWhereInput
    orderBy?: PortalRefreshTokenOrderByWithAggregationInput | PortalRefreshTokenOrderByWithAggregationInput[]
    by: PortalRefreshTokenScalarFieldEnum[] | PortalRefreshTokenScalarFieldEnum
    having?: PortalRefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalRefreshTokenCountAggregateInputType | true
    _min?: PortalRefreshTokenMinAggregateInputType
    _max?: PortalRefreshTokenMaxAggregateInputType
  }

  export type PortalRefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    userRole: string
    expiresAt: Date
    createdAt: Date
    _count: PortalRefreshTokenCountAggregateOutputType | null
    _min: PortalRefreshTokenMinAggregateOutputType | null
    _max: PortalRefreshTokenMaxAggregateOutputType | null
  }

  type GetPortalRefreshTokenGroupByPayload<T extends PortalRefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalRefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalRefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalRefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PortalRefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type PortalRefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    userRole?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["portalRefreshToken"]>



  export type PortalRefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    userRole?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PortalRefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "userRole" | "expiresAt" | "createdAt", ExtArgs["result"]["portalRefreshToken"]>

  export type $PortalRefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortalRefreshToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      userRole: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["portalRefreshToken"]>
    composites: {}
  }

  type PortalRefreshTokenGetPayload<S extends boolean | null | undefined | PortalRefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$PortalRefreshTokenPayload, S>

  type PortalRefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortalRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortalRefreshTokenCountAggregateInputType | true
    }

  export interface PortalRefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortalRefreshToken'], meta: { name: 'PortalRefreshToken' } }
    /**
     * Find zero or one PortalRefreshToken that matches the filter.
     * @param {PortalRefreshTokenFindUniqueArgs} args - Arguments to find a PortalRefreshToken
     * @example
     * // Get one PortalRefreshToken
     * const portalRefreshToken = await prisma.portalRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortalRefreshTokenFindUniqueArgs>(args: SelectSubset<T, PortalRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortalRefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortalRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a PortalRefreshToken
     * @example
     * // Get one PortalRefreshToken
     * const portalRefreshToken = await prisma.portalRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortalRefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PortalRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenFindFirstArgs} args - Arguments to find a PortalRefreshToken
     * @example
     * // Get one PortalRefreshToken
     * const portalRefreshToken = await prisma.portalRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortalRefreshTokenFindFirstArgs>(args?: SelectSubset<T, PortalRefreshTokenFindFirstArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a PortalRefreshToken
     * @example
     * // Get one PortalRefreshToken
     * const portalRefreshToken = await prisma.portalRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortalRefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PortalRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalRefreshTokens
     * const portalRefreshTokens = await prisma.portalRefreshToken.findMany()
     * 
     * // Get first 10 PortalRefreshTokens
     * const portalRefreshTokens = await prisma.portalRefreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalRefreshTokenWithIdOnly = await prisma.portalRefreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortalRefreshTokenFindManyArgs>(args?: SelectSubset<T, PortalRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortalRefreshToken.
     * @param {PortalRefreshTokenCreateArgs} args - Arguments to create a PortalRefreshToken.
     * @example
     * // Create one PortalRefreshToken
     * const PortalRefreshToken = await prisma.portalRefreshToken.create({
     *   data: {
     *     // ... data to create a PortalRefreshToken
     *   }
     * })
     * 
     */
    create<T extends PortalRefreshTokenCreateArgs>(args: SelectSubset<T, PortalRefreshTokenCreateArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortalRefreshTokens.
     * @param {PortalRefreshTokenCreateManyArgs} args - Arguments to create many PortalRefreshTokens.
     * @example
     * // Create many PortalRefreshTokens
     * const portalRefreshToken = await prisma.portalRefreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortalRefreshTokenCreateManyArgs>(args?: SelectSubset<T, PortalRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PortalRefreshToken.
     * @param {PortalRefreshTokenDeleteArgs} args - Arguments to delete one PortalRefreshToken.
     * @example
     * // Delete one PortalRefreshToken
     * const PortalRefreshToken = await prisma.portalRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one PortalRefreshToken
     *   }
     * })
     * 
     */
    delete<T extends PortalRefreshTokenDeleteArgs>(args: SelectSubset<T, PortalRefreshTokenDeleteArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortalRefreshToken.
     * @param {PortalRefreshTokenUpdateArgs} args - Arguments to update one PortalRefreshToken.
     * @example
     * // Update one PortalRefreshToken
     * const portalRefreshToken = await prisma.portalRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortalRefreshTokenUpdateArgs>(args: SelectSubset<T, PortalRefreshTokenUpdateArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortalRefreshTokens.
     * @param {PortalRefreshTokenDeleteManyArgs} args - Arguments to filter PortalRefreshTokens to delete.
     * @example
     * // Delete a few PortalRefreshTokens
     * const { count } = await prisma.portalRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortalRefreshTokenDeleteManyArgs>(args?: SelectSubset<T, PortalRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalRefreshTokens
     * const portalRefreshToken = await prisma.portalRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortalRefreshTokenUpdateManyArgs>(args: SelectSubset<T, PortalRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortalRefreshToken.
     * @param {PortalRefreshTokenUpsertArgs} args - Arguments to update or create a PortalRefreshToken.
     * @example
     * // Update or create a PortalRefreshToken
     * const portalRefreshToken = await prisma.portalRefreshToken.upsert({
     *   create: {
     *     // ... data to create a PortalRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalRefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends PortalRefreshTokenUpsertArgs>(args: SelectSubset<T, PortalRefreshTokenUpsertArgs<ExtArgs>>): Prisma__PortalRefreshTokenClient<$Result.GetResult<Prisma.$PortalRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalRefreshTokens that matches the filter.
     * @param {PortalRefreshTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const portalRefreshToken = await prisma.portalRefreshToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortalRefreshTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PortalRefreshToken.
     * @param {PortalRefreshTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const portalRefreshToken = await prisma.portalRefreshToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortalRefreshTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PortalRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenCountArgs} args - Arguments to filter PortalRefreshTokens to count.
     * @example
     * // Count the number of PortalRefreshTokens
     * const count = await prisma.portalRefreshToken.count({
     *   where: {
     *     // ... the filter for the PortalRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends PortalRefreshTokenCountArgs>(
      args?: Subset<T, PortalRefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalRefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalRefreshTokenAggregateArgs>(args: Subset<T, PortalRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetPortalRefreshTokenAggregateType<T>>

    /**
     * Group by PortalRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalRefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalRefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalRefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: PortalRefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortalRefreshToken model
   */
  readonly fields: PortalRefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalRefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalRefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortalRefreshToken model
   */
  interface PortalRefreshTokenFieldRefs {
    readonly id: FieldRef<"PortalRefreshToken", 'String'>
    readonly token: FieldRef<"PortalRefreshToken", 'String'>
    readonly userId: FieldRef<"PortalRefreshToken", 'String'>
    readonly userRole: FieldRef<"PortalRefreshToken", 'String'>
    readonly expiresAt: FieldRef<"PortalRefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"PortalRefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortalRefreshToken findUnique
   */
  export type PortalRefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which PortalRefreshToken to fetch.
     */
    where: PortalRefreshTokenWhereUniqueInput
  }

  /**
   * PortalRefreshToken findUniqueOrThrow
   */
  export type PortalRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which PortalRefreshToken to fetch.
     */
    where: PortalRefreshTokenWhereUniqueInput
  }

  /**
   * PortalRefreshToken findFirst
   */
  export type PortalRefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which PortalRefreshToken to fetch.
     */
    where?: PortalRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalRefreshTokens to fetch.
     */
    orderBy?: PortalRefreshTokenOrderByWithRelationInput | PortalRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalRefreshTokens.
     */
    cursor?: PortalRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalRefreshTokens.
     */
    distinct?: PortalRefreshTokenScalarFieldEnum | PortalRefreshTokenScalarFieldEnum[]
  }

  /**
   * PortalRefreshToken findFirstOrThrow
   */
  export type PortalRefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which PortalRefreshToken to fetch.
     */
    where?: PortalRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalRefreshTokens to fetch.
     */
    orderBy?: PortalRefreshTokenOrderByWithRelationInput | PortalRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalRefreshTokens.
     */
    cursor?: PortalRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalRefreshTokens.
     */
    distinct?: PortalRefreshTokenScalarFieldEnum | PortalRefreshTokenScalarFieldEnum[]
  }

  /**
   * PortalRefreshToken findMany
   */
  export type PortalRefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which PortalRefreshTokens to fetch.
     */
    where?: PortalRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalRefreshTokens to fetch.
     */
    orderBy?: PortalRefreshTokenOrderByWithRelationInput | PortalRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalRefreshTokens.
     */
    cursor?: PortalRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalRefreshTokens.
     */
    distinct?: PortalRefreshTokenScalarFieldEnum | PortalRefreshTokenScalarFieldEnum[]
  }

  /**
   * PortalRefreshToken create
   */
  export type PortalRefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PortalRefreshToken.
     */
    data: XOR<PortalRefreshTokenCreateInput, PortalRefreshTokenUncheckedCreateInput>
  }

  /**
   * PortalRefreshToken createMany
   */
  export type PortalRefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortalRefreshTokens.
     */
    data: PortalRefreshTokenCreateManyInput | PortalRefreshTokenCreateManyInput[]
  }

  /**
   * PortalRefreshToken update
   */
  export type PortalRefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PortalRefreshToken.
     */
    data: XOR<PortalRefreshTokenUpdateInput, PortalRefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which PortalRefreshToken to update.
     */
    where: PortalRefreshTokenWhereUniqueInput
  }

  /**
   * PortalRefreshToken updateMany
   */
  export type PortalRefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortalRefreshTokens.
     */
    data: XOR<PortalRefreshTokenUpdateManyMutationInput, PortalRefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which PortalRefreshTokens to update
     */
    where?: PortalRefreshTokenWhereInput
    /**
     * Limit how many PortalRefreshTokens to update.
     */
    limit?: number
  }

  /**
   * PortalRefreshToken upsert
   */
  export type PortalRefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PortalRefreshToken to update in case it exists.
     */
    where: PortalRefreshTokenWhereUniqueInput
    /**
     * In case the PortalRefreshToken found by the `where` argument doesn't exist, create a new PortalRefreshToken with this data.
     */
    create: XOR<PortalRefreshTokenCreateInput, PortalRefreshTokenUncheckedCreateInput>
    /**
     * In case the PortalRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalRefreshTokenUpdateInput, PortalRefreshTokenUncheckedUpdateInput>
  }

  /**
   * PortalRefreshToken delete
   */
  export type PortalRefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter which PortalRefreshToken to delete.
     */
    where: PortalRefreshTokenWhereUniqueInput
  }

  /**
   * PortalRefreshToken deleteMany
   */
  export type PortalRefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalRefreshTokens to delete
     */
    where?: PortalRefreshTokenWhereInput
    /**
     * Limit how many PortalRefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * PortalRefreshToken findRaw
   */
  export type PortalRefreshTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalRefreshToken aggregateRaw
   */
  export type PortalRefreshTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PortalRefreshToken without action
   */
  export type PortalRefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalRefreshToken
     */
    select?: PortalRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalRefreshToken
     */
    omit?: PortalRefreshTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const PortalStudentScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    enrollmentNo: 'enrollmentNo',
    year: 'year',
    branch: 'branch',
    collegeName: 'collegeName',
    profilePhotoUrl: 'profilePhotoUrl',
    bio: 'bio',
    googleId: 'googleId',
    status: 'status',
    assignedFacultyId: 'assignedFacultyId',
    lastLoginAt: 'lastLoginAt',
    loginAttempts: 'loginAttempts',
    lockedUntil: 'lockedUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortalStudentScalarFieldEnum = (typeof PortalStudentScalarFieldEnum)[keyof typeof PortalStudentScalarFieldEnum]


  export const PortalFacultyScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullName: 'fullName',
    workEmail: 'workEmail',
    passwordHash: 'passwordHash',
    phone: 'phone',
    designation: 'designation',
    department: 'department',
    collegeName: 'collegeName',
    profilePhotoUrl: 'profilePhotoUrl',
    bio: 'bio',
    googleId: 'googleId',
    status: 'status',
    lastLoginAt: 'lastLoginAt',
    loginAttempts: 'loginAttempts',
    lockedUntil: 'lockedUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortalFacultyScalarFieldEnum = (typeof PortalFacultyScalarFieldEnum)[keyof typeof PortalFacultyScalarFieldEnum]


  export const FacultyStudentMapScalarFieldEnum: {
    id: 'id',
    facultyId: 'facultyId',
    studentId: 'studentId',
    adminNote: 'adminNote',
    assignedBy: 'assignedBy',
    isActive: 'isActive',
    assignedAt: 'assignedAt'
  };

  export type FacultyStudentMapScalarFieldEnum = (typeof FacultyStudentMapScalarFieldEnum)[keyof typeof FacultyStudentMapScalarFieldEnum]


  export const PortalMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isRead: 'isRead',
    attachmentUrl: 'attachmentUrl',
    attachmentName: 'attachmentName',
    senderStudentId: 'senderStudentId',
    senderFacultyId: 'senderFacultyId',
    receiverStudentId: 'receiverStudentId',
    receiverFacultyId: 'receiverFacultyId',
    createdAt: 'createdAt'
  };

  export type PortalMessageScalarFieldEnum = (typeof PortalMessageScalarFieldEnum)[keyof typeof PortalMessageScalarFieldEnum]


  export const PortalDocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    category: 'category',
    year: 'year',
    branch: 'branch',
    collegeName: 'collegeName',
    isPublic: 'isPublic',
    sharedWith: 'sharedWith',
    uploaderStudentId: 'uploaderStudentId',
    uploaderFacultyId: 'uploaderFacultyId',
    downloads: 'downloads',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortalDocumentScalarFieldEnum = (typeof PortalDocumentScalarFieldEnum)[keyof typeof PortalDocumentScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    facultyId: 'facultyId',
    targetYear: 'targetYear',
    targetBranch: 'targetBranch',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const StudentAnnouncementScalarFieldEnum: {
    id: 'id',
    announcementId: 'announcementId',
    studentId: 'studentId',
    isRead: 'isRead',
    readAt: 'readAt'
  };

  export type StudentAnnouncementScalarFieldEnum = (typeof StudentAnnouncementScalarFieldEnum)[keyof typeof StudentAnnouncementScalarFieldEnum]


  export const AttendanceRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    facultyId: 'facultyId',
    subject: 'subject',
    date: 'date',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    facultyId: 'facultyId',
    dueDate: 'dueDate',
    targetYear: 'targetYear',
    targetBranch: 'targetBranch',
    fileUrl: 'fileUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AssignmentSubmissionScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    studentId: 'studentId',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    note: 'note',
    grade: 'grade',
    feedback: 'feedback',
    submittedAt: 'submittedAt'
  };

  export type AssignmentSubmissionScalarFieldEnum = (typeof AssignmentSubmissionScalarFieldEnum)[keyof typeof AssignmentSubmissionScalarFieldEnum]


  export const PortalRefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    userRole: 'userRole',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PortalRefreshTokenScalarFieldEnum = (typeof PortalRefreshTokenScalarFieldEnum)[keyof typeof PortalRefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PortalStudentWhereInput = {
    AND?: PortalStudentWhereInput | PortalStudentWhereInput[]
    OR?: PortalStudentWhereInput[]
    NOT?: PortalStudentWhereInput | PortalStudentWhereInput[]
    id?: StringFilter<"PortalStudent"> | string
    username?: StringFilter<"PortalStudent"> | string
    fullName?: StringFilter<"PortalStudent"> | string
    email?: StringFilter<"PortalStudent"> | string
    passwordHash?: StringFilter<"PortalStudent"> | string
    phone?: StringNullableFilter<"PortalStudent"> | string | null
    enrollmentNo?: StringFilter<"PortalStudent"> | string
    year?: IntFilter<"PortalStudent"> | number
    branch?: StringFilter<"PortalStudent"> | string
    collegeName?: StringFilter<"PortalStudent"> | string
    profilePhotoUrl?: StringNullableFilter<"PortalStudent"> | string | null
    bio?: StringNullableFilter<"PortalStudent"> | string | null
    googleId?: StringNullableFilter<"PortalStudent"> | string | null
    status?: StringFilter<"PortalStudent"> | string
    assignedFacultyId?: StringNullableFilter<"PortalStudent"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"PortalStudent"> | Date | string | null
    loginAttempts?: IntFilter<"PortalStudent"> | number
    lockedUntil?: DateTimeNullableFilter<"PortalStudent"> | Date | string | null
    createdAt?: DateTimeFilter<"PortalStudent"> | Date | string
    updatedAt?: DateTimeFilter<"PortalStudent"> | Date | string
    sentMessages?: PortalMessageListRelationFilter
    documents?: PortalDocumentListRelationFilter
    mappings?: FacultyStudentMapListRelationFilter
    announcements?: StudentAnnouncementListRelationFilter
    attendance?: AttendanceRecordListRelationFilter
    submissions?: AssignmentSubmissionListRelationFilter
  }

  export type PortalStudentOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    enrollmentNo?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    assignedFacultyId?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentMessages?: PortalMessageOrderByRelationAggregateInput
    documents?: PortalDocumentOrderByRelationAggregateInput
    mappings?: FacultyStudentMapOrderByRelationAggregateInput
    announcements?: StudentAnnouncementOrderByRelationAggregateInput
    attendance?: AttendanceRecordOrderByRelationAggregateInput
    submissions?: AssignmentSubmissionOrderByRelationAggregateInput
  }

  export type PortalStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    enrollmentNo?: string
    AND?: PortalStudentWhereInput | PortalStudentWhereInput[]
    OR?: PortalStudentWhereInput[]
    NOT?: PortalStudentWhereInput | PortalStudentWhereInput[]
    fullName?: StringFilter<"PortalStudent"> | string
    passwordHash?: StringFilter<"PortalStudent"> | string
    phone?: StringNullableFilter<"PortalStudent"> | string | null
    year?: IntFilter<"PortalStudent"> | number
    branch?: StringFilter<"PortalStudent"> | string
    collegeName?: StringFilter<"PortalStudent"> | string
    profilePhotoUrl?: StringNullableFilter<"PortalStudent"> | string | null
    bio?: StringNullableFilter<"PortalStudent"> | string | null
    googleId?: StringNullableFilter<"PortalStudent"> | string | null
    status?: StringFilter<"PortalStudent"> | string
    assignedFacultyId?: StringNullableFilter<"PortalStudent"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"PortalStudent"> | Date | string | null
    loginAttempts?: IntFilter<"PortalStudent"> | number
    lockedUntil?: DateTimeNullableFilter<"PortalStudent"> | Date | string | null
    createdAt?: DateTimeFilter<"PortalStudent"> | Date | string
    updatedAt?: DateTimeFilter<"PortalStudent"> | Date | string
    sentMessages?: PortalMessageListRelationFilter
    documents?: PortalDocumentListRelationFilter
    mappings?: FacultyStudentMapListRelationFilter
    announcements?: StudentAnnouncementListRelationFilter
    attendance?: AttendanceRecordListRelationFilter
    submissions?: AssignmentSubmissionListRelationFilter
  }, "id" | "username" | "email" | "enrollmentNo">

  export type PortalStudentOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    enrollmentNo?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    assignedFacultyId?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortalStudentCountOrderByAggregateInput
    _avg?: PortalStudentAvgOrderByAggregateInput
    _max?: PortalStudentMaxOrderByAggregateInput
    _min?: PortalStudentMinOrderByAggregateInput
    _sum?: PortalStudentSumOrderByAggregateInput
  }

  export type PortalStudentScalarWhereWithAggregatesInput = {
    AND?: PortalStudentScalarWhereWithAggregatesInput | PortalStudentScalarWhereWithAggregatesInput[]
    OR?: PortalStudentScalarWhereWithAggregatesInput[]
    NOT?: PortalStudentScalarWhereWithAggregatesInput | PortalStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortalStudent"> | string
    username?: StringWithAggregatesFilter<"PortalStudent"> | string
    fullName?: StringWithAggregatesFilter<"PortalStudent"> | string
    email?: StringWithAggregatesFilter<"PortalStudent"> | string
    passwordHash?: StringWithAggregatesFilter<"PortalStudent"> | string
    phone?: StringNullableWithAggregatesFilter<"PortalStudent"> | string | null
    enrollmentNo?: StringWithAggregatesFilter<"PortalStudent"> | string
    year?: IntWithAggregatesFilter<"PortalStudent"> | number
    branch?: StringWithAggregatesFilter<"PortalStudent"> | string
    collegeName?: StringWithAggregatesFilter<"PortalStudent"> | string
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"PortalStudent"> | string | null
    bio?: StringNullableWithAggregatesFilter<"PortalStudent"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"PortalStudent"> | string | null
    status?: StringWithAggregatesFilter<"PortalStudent"> | string
    assignedFacultyId?: StringNullableWithAggregatesFilter<"PortalStudent"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"PortalStudent"> | Date | string | null
    loginAttempts?: IntWithAggregatesFilter<"PortalStudent"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"PortalStudent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PortalStudent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortalStudent"> | Date | string
  }

  export type PortalFacultyWhereInput = {
    AND?: PortalFacultyWhereInput | PortalFacultyWhereInput[]
    OR?: PortalFacultyWhereInput[]
    NOT?: PortalFacultyWhereInput | PortalFacultyWhereInput[]
    id?: StringFilter<"PortalFaculty"> | string
    username?: StringFilter<"PortalFaculty"> | string
    fullName?: StringFilter<"PortalFaculty"> | string
    workEmail?: StringFilter<"PortalFaculty"> | string
    passwordHash?: StringFilter<"PortalFaculty"> | string
    phone?: StringNullableFilter<"PortalFaculty"> | string | null
    designation?: StringFilter<"PortalFaculty"> | string
    department?: StringFilter<"PortalFaculty"> | string
    collegeName?: StringFilter<"PortalFaculty"> | string
    profilePhotoUrl?: StringNullableFilter<"PortalFaculty"> | string | null
    bio?: StringNullableFilter<"PortalFaculty"> | string | null
    googleId?: StringNullableFilter<"PortalFaculty"> | string | null
    status?: StringFilter<"PortalFaculty"> | string
    lastLoginAt?: DateTimeNullableFilter<"PortalFaculty"> | Date | string | null
    loginAttempts?: IntFilter<"PortalFaculty"> | number
    lockedUntil?: DateTimeNullableFilter<"PortalFaculty"> | Date | string | null
    createdAt?: DateTimeFilter<"PortalFaculty"> | Date | string
    updatedAt?: DateTimeFilter<"PortalFaculty"> | Date | string
    sentMessages?: PortalMessageListRelationFilter
    documents?: PortalDocumentListRelationFilter
    mappings?: FacultyStudentMapListRelationFilter
    announcements?: AnnouncementListRelationFilter
    attendanceMarked?: AttendanceRecordListRelationFilter
    assignments?: AssignmentListRelationFilter
  }

  export type PortalFacultyOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    workEmail?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentMessages?: PortalMessageOrderByRelationAggregateInput
    documents?: PortalDocumentOrderByRelationAggregateInput
    mappings?: FacultyStudentMapOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
    attendanceMarked?: AttendanceRecordOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type PortalFacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    workEmail?: string
    AND?: PortalFacultyWhereInput | PortalFacultyWhereInput[]
    OR?: PortalFacultyWhereInput[]
    NOT?: PortalFacultyWhereInput | PortalFacultyWhereInput[]
    fullName?: StringFilter<"PortalFaculty"> | string
    passwordHash?: StringFilter<"PortalFaculty"> | string
    phone?: StringNullableFilter<"PortalFaculty"> | string | null
    designation?: StringFilter<"PortalFaculty"> | string
    department?: StringFilter<"PortalFaculty"> | string
    collegeName?: StringFilter<"PortalFaculty"> | string
    profilePhotoUrl?: StringNullableFilter<"PortalFaculty"> | string | null
    bio?: StringNullableFilter<"PortalFaculty"> | string | null
    googleId?: StringNullableFilter<"PortalFaculty"> | string | null
    status?: StringFilter<"PortalFaculty"> | string
    lastLoginAt?: DateTimeNullableFilter<"PortalFaculty"> | Date | string | null
    loginAttempts?: IntFilter<"PortalFaculty"> | number
    lockedUntil?: DateTimeNullableFilter<"PortalFaculty"> | Date | string | null
    createdAt?: DateTimeFilter<"PortalFaculty"> | Date | string
    updatedAt?: DateTimeFilter<"PortalFaculty"> | Date | string
    sentMessages?: PortalMessageListRelationFilter
    documents?: PortalDocumentListRelationFilter
    mappings?: FacultyStudentMapListRelationFilter
    announcements?: AnnouncementListRelationFilter
    attendanceMarked?: AttendanceRecordListRelationFilter
    assignments?: AssignmentListRelationFilter
  }, "id" | "username" | "workEmail">

  export type PortalFacultyOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    workEmail?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortalFacultyCountOrderByAggregateInput
    _avg?: PortalFacultyAvgOrderByAggregateInput
    _max?: PortalFacultyMaxOrderByAggregateInput
    _min?: PortalFacultyMinOrderByAggregateInput
    _sum?: PortalFacultySumOrderByAggregateInput
  }

  export type PortalFacultyScalarWhereWithAggregatesInput = {
    AND?: PortalFacultyScalarWhereWithAggregatesInput | PortalFacultyScalarWhereWithAggregatesInput[]
    OR?: PortalFacultyScalarWhereWithAggregatesInput[]
    NOT?: PortalFacultyScalarWhereWithAggregatesInput | PortalFacultyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortalFaculty"> | string
    username?: StringWithAggregatesFilter<"PortalFaculty"> | string
    fullName?: StringWithAggregatesFilter<"PortalFaculty"> | string
    workEmail?: StringWithAggregatesFilter<"PortalFaculty"> | string
    passwordHash?: StringWithAggregatesFilter<"PortalFaculty"> | string
    phone?: StringNullableWithAggregatesFilter<"PortalFaculty"> | string | null
    designation?: StringWithAggregatesFilter<"PortalFaculty"> | string
    department?: StringWithAggregatesFilter<"PortalFaculty"> | string
    collegeName?: StringWithAggregatesFilter<"PortalFaculty"> | string
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"PortalFaculty"> | string | null
    bio?: StringNullableWithAggregatesFilter<"PortalFaculty"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"PortalFaculty"> | string | null
    status?: StringWithAggregatesFilter<"PortalFaculty"> | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"PortalFaculty"> | Date | string | null
    loginAttempts?: IntWithAggregatesFilter<"PortalFaculty"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"PortalFaculty"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PortalFaculty"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortalFaculty"> | Date | string
  }

  export type FacultyStudentMapWhereInput = {
    AND?: FacultyStudentMapWhereInput | FacultyStudentMapWhereInput[]
    OR?: FacultyStudentMapWhereInput[]
    NOT?: FacultyStudentMapWhereInput | FacultyStudentMapWhereInput[]
    id?: StringFilter<"FacultyStudentMap"> | string
    facultyId?: StringFilter<"FacultyStudentMap"> | string
    studentId?: StringFilter<"FacultyStudentMap"> | string
    adminNote?: StringNullableFilter<"FacultyStudentMap"> | string | null
    assignedBy?: StringFilter<"FacultyStudentMap"> | string
    isActive?: BoolFilter<"FacultyStudentMap"> | boolean
    assignedAt?: DateTimeFilter<"FacultyStudentMap"> | Date | string
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
  }

  export type FacultyStudentMapOrderByWithRelationInput = {
    id?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    adminNote?: SortOrder
    assignedBy?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    faculty?: PortalFacultyOrderByWithRelationInput
    student?: PortalStudentOrderByWithRelationInput
  }

  export type FacultyStudentMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    facultyId_studentId?: FacultyStudentMapFacultyIdStudentIdCompoundUniqueInput
    AND?: FacultyStudentMapWhereInput | FacultyStudentMapWhereInput[]
    OR?: FacultyStudentMapWhereInput[]
    NOT?: FacultyStudentMapWhereInput | FacultyStudentMapWhereInput[]
    facultyId?: StringFilter<"FacultyStudentMap"> | string
    studentId?: StringFilter<"FacultyStudentMap"> | string
    adminNote?: StringNullableFilter<"FacultyStudentMap"> | string | null
    assignedBy?: StringFilter<"FacultyStudentMap"> | string
    isActive?: BoolFilter<"FacultyStudentMap"> | boolean
    assignedAt?: DateTimeFilter<"FacultyStudentMap"> | Date | string
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
  }, "id" | "facultyId_studentId">

  export type FacultyStudentMapOrderByWithAggregationInput = {
    id?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    adminNote?: SortOrder
    assignedBy?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
    _count?: FacultyStudentMapCountOrderByAggregateInput
    _max?: FacultyStudentMapMaxOrderByAggregateInput
    _min?: FacultyStudentMapMinOrderByAggregateInput
  }

  export type FacultyStudentMapScalarWhereWithAggregatesInput = {
    AND?: FacultyStudentMapScalarWhereWithAggregatesInput | FacultyStudentMapScalarWhereWithAggregatesInput[]
    OR?: FacultyStudentMapScalarWhereWithAggregatesInput[]
    NOT?: FacultyStudentMapScalarWhereWithAggregatesInput | FacultyStudentMapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultyStudentMap"> | string
    facultyId?: StringWithAggregatesFilter<"FacultyStudentMap"> | string
    studentId?: StringWithAggregatesFilter<"FacultyStudentMap"> | string
    adminNote?: StringNullableWithAggregatesFilter<"FacultyStudentMap"> | string | null
    assignedBy?: StringWithAggregatesFilter<"FacultyStudentMap"> | string
    isActive?: BoolWithAggregatesFilter<"FacultyStudentMap"> | boolean
    assignedAt?: DateTimeWithAggregatesFilter<"FacultyStudentMap"> | Date | string
  }

  export type PortalMessageWhereInput = {
    AND?: PortalMessageWhereInput | PortalMessageWhereInput[]
    OR?: PortalMessageWhereInput[]
    NOT?: PortalMessageWhereInput | PortalMessageWhereInput[]
    id?: StringFilter<"PortalMessage"> | string
    content?: StringFilter<"PortalMessage"> | string
    isRead?: BoolFilter<"PortalMessage"> | boolean
    attachmentUrl?: StringNullableFilter<"PortalMessage"> | string | null
    attachmentName?: StringNullableFilter<"PortalMessage"> | string | null
    senderStudentId?: StringNullableFilter<"PortalMessage"> | string | null
    senderFacultyId?: StringNullableFilter<"PortalMessage"> | string | null
    receiverStudentId?: StringNullableFilter<"PortalMessage"> | string | null
    receiverFacultyId?: StringNullableFilter<"PortalMessage"> | string | null
    createdAt?: DateTimeFilter<"PortalMessage"> | Date | string
    senderStudent?: XOR<PortalStudentNullableScalarRelationFilter, PortalStudentWhereInput> | null
    senderFaculty?: XOR<PortalFacultyNullableScalarRelationFilter, PortalFacultyWhereInput> | null
  }

  export type PortalMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    attachmentUrl?: SortOrder
    attachmentName?: SortOrder
    senderStudentId?: SortOrder
    senderFacultyId?: SortOrder
    receiverStudentId?: SortOrder
    receiverFacultyId?: SortOrder
    createdAt?: SortOrder
    senderStudent?: PortalStudentOrderByWithRelationInput
    senderFaculty?: PortalFacultyOrderByWithRelationInput
  }

  export type PortalMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortalMessageWhereInput | PortalMessageWhereInput[]
    OR?: PortalMessageWhereInput[]
    NOT?: PortalMessageWhereInput | PortalMessageWhereInput[]
    content?: StringFilter<"PortalMessage"> | string
    isRead?: BoolFilter<"PortalMessage"> | boolean
    attachmentUrl?: StringNullableFilter<"PortalMessage"> | string | null
    attachmentName?: StringNullableFilter<"PortalMessage"> | string | null
    senderStudentId?: StringNullableFilter<"PortalMessage"> | string | null
    senderFacultyId?: StringNullableFilter<"PortalMessage"> | string | null
    receiverStudentId?: StringNullableFilter<"PortalMessage"> | string | null
    receiverFacultyId?: StringNullableFilter<"PortalMessage"> | string | null
    createdAt?: DateTimeFilter<"PortalMessage"> | Date | string
    senderStudent?: XOR<PortalStudentNullableScalarRelationFilter, PortalStudentWhereInput> | null
    senderFaculty?: XOR<PortalFacultyNullableScalarRelationFilter, PortalFacultyWhereInput> | null
  }, "id">

  export type PortalMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    attachmentUrl?: SortOrder
    attachmentName?: SortOrder
    senderStudentId?: SortOrder
    senderFacultyId?: SortOrder
    receiverStudentId?: SortOrder
    receiverFacultyId?: SortOrder
    createdAt?: SortOrder
    _count?: PortalMessageCountOrderByAggregateInput
    _max?: PortalMessageMaxOrderByAggregateInput
    _min?: PortalMessageMinOrderByAggregateInput
  }

  export type PortalMessageScalarWhereWithAggregatesInput = {
    AND?: PortalMessageScalarWhereWithAggregatesInput | PortalMessageScalarWhereWithAggregatesInput[]
    OR?: PortalMessageScalarWhereWithAggregatesInput[]
    NOT?: PortalMessageScalarWhereWithAggregatesInput | PortalMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortalMessage"> | string
    content?: StringWithAggregatesFilter<"PortalMessage"> | string
    isRead?: BoolWithAggregatesFilter<"PortalMessage"> | boolean
    attachmentUrl?: StringNullableWithAggregatesFilter<"PortalMessage"> | string | null
    attachmentName?: StringNullableWithAggregatesFilter<"PortalMessage"> | string | null
    senderStudentId?: StringNullableWithAggregatesFilter<"PortalMessage"> | string | null
    senderFacultyId?: StringNullableWithAggregatesFilter<"PortalMessage"> | string | null
    receiverStudentId?: StringNullableWithAggregatesFilter<"PortalMessage"> | string | null
    receiverFacultyId?: StringNullableWithAggregatesFilter<"PortalMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PortalMessage"> | Date | string
  }

  export type PortalDocumentWhereInput = {
    AND?: PortalDocumentWhereInput | PortalDocumentWhereInput[]
    OR?: PortalDocumentWhereInput[]
    NOT?: PortalDocumentWhereInput | PortalDocumentWhereInput[]
    id?: StringFilter<"PortalDocument"> | string
    title?: StringFilter<"PortalDocument"> | string
    description?: StringNullableFilter<"PortalDocument"> | string | null
    fileUrl?: StringFilter<"PortalDocument"> | string
    fileName?: StringFilter<"PortalDocument"> | string
    fileSize?: IntFilter<"PortalDocument"> | number
    mimeType?: StringFilter<"PortalDocument"> | string
    category?: StringNullableFilter<"PortalDocument"> | string | null
    year?: IntNullableFilter<"PortalDocument"> | number | null
    branch?: StringNullableFilter<"PortalDocument"> | string | null
    collegeName?: StringNullableFilter<"PortalDocument"> | string | null
    isPublic?: BoolFilter<"PortalDocument"> | boolean
    sharedWith?: StringNullableListFilter<"PortalDocument">
    uploaderStudentId?: StringNullableFilter<"PortalDocument"> | string | null
    uploaderFacultyId?: StringNullableFilter<"PortalDocument"> | string | null
    downloads?: IntFilter<"PortalDocument"> | number
    createdAt?: DateTimeFilter<"PortalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"PortalDocument"> | Date | string
    uploaderStudent?: XOR<PortalStudentNullableScalarRelationFilter, PortalStudentWhereInput> | null
    uploaderFaculty?: XOR<PortalFacultyNullableScalarRelationFilter, PortalFacultyWhereInput> | null
  }

  export type PortalDocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    isPublic?: SortOrder
    sharedWith?: SortOrder
    uploaderStudentId?: SortOrder
    uploaderFacultyId?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploaderStudent?: PortalStudentOrderByWithRelationInput
    uploaderFaculty?: PortalFacultyOrderByWithRelationInput
  }

  export type PortalDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortalDocumentWhereInput | PortalDocumentWhereInput[]
    OR?: PortalDocumentWhereInput[]
    NOT?: PortalDocumentWhereInput | PortalDocumentWhereInput[]
    title?: StringFilter<"PortalDocument"> | string
    description?: StringNullableFilter<"PortalDocument"> | string | null
    fileUrl?: StringFilter<"PortalDocument"> | string
    fileName?: StringFilter<"PortalDocument"> | string
    fileSize?: IntFilter<"PortalDocument"> | number
    mimeType?: StringFilter<"PortalDocument"> | string
    category?: StringNullableFilter<"PortalDocument"> | string | null
    year?: IntNullableFilter<"PortalDocument"> | number | null
    branch?: StringNullableFilter<"PortalDocument"> | string | null
    collegeName?: StringNullableFilter<"PortalDocument"> | string | null
    isPublic?: BoolFilter<"PortalDocument"> | boolean
    sharedWith?: StringNullableListFilter<"PortalDocument">
    uploaderStudentId?: StringNullableFilter<"PortalDocument"> | string | null
    uploaderFacultyId?: StringNullableFilter<"PortalDocument"> | string | null
    downloads?: IntFilter<"PortalDocument"> | number
    createdAt?: DateTimeFilter<"PortalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"PortalDocument"> | Date | string
    uploaderStudent?: XOR<PortalStudentNullableScalarRelationFilter, PortalStudentWhereInput> | null
    uploaderFaculty?: XOR<PortalFacultyNullableScalarRelationFilter, PortalFacultyWhereInput> | null
  }, "id">

  export type PortalDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    isPublic?: SortOrder
    sharedWith?: SortOrder
    uploaderStudentId?: SortOrder
    uploaderFacultyId?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortalDocumentCountOrderByAggregateInput
    _avg?: PortalDocumentAvgOrderByAggregateInput
    _max?: PortalDocumentMaxOrderByAggregateInput
    _min?: PortalDocumentMinOrderByAggregateInput
    _sum?: PortalDocumentSumOrderByAggregateInput
  }

  export type PortalDocumentScalarWhereWithAggregatesInput = {
    AND?: PortalDocumentScalarWhereWithAggregatesInput | PortalDocumentScalarWhereWithAggregatesInput[]
    OR?: PortalDocumentScalarWhereWithAggregatesInput[]
    NOT?: PortalDocumentScalarWhereWithAggregatesInput | PortalDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortalDocument"> | string
    title?: StringWithAggregatesFilter<"PortalDocument"> | string
    description?: StringNullableWithAggregatesFilter<"PortalDocument"> | string | null
    fileUrl?: StringWithAggregatesFilter<"PortalDocument"> | string
    fileName?: StringWithAggregatesFilter<"PortalDocument"> | string
    fileSize?: IntWithAggregatesFilter<"PortalDocument"> | number
    mimeType?: StringWithAggregatesFilter<"PortalDocument"> | string
    category?: StringNullableWithAggregatesFilter<"PortalDocument"> | string | null
    year?: IntNullableWithAggregatesFilter<"PortalDocument"> | number | null
    branch?: StringNullableWithAggregatesFilter<"PortalDocument"> | string | null
    collegeName?: StringNullableWithAggregatesFilter<"PortalDocument"> | string | null
    isPublic?: BoolWithAggregatesFilter<"PortalDocument"> | boolean
    sharedWith?: StringNullableListFilter<"PortalDocument">
    uploaderStudentId?: StringNullableWithAggregatesFilter<"PortalDocument"> | string | null
    uploaderFacultyId?: StringNullableWithAggregatesFilter<"PortalDocument"> | string | null
    downloads?: IntWithAggregatesFilter<"PortalDocument"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PortalDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortalDocument"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    facultyId?: StringFilter<"Announcement"> | string
    targetYear?: IntNullableFilter<"Announcement"> | number | null
    targetBranch?: StringNullableFilter<"Announcement"> | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
    studentAnnouncements?: StudentAnnouncementListRelationFilter
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    facultyId?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    faculty?: PortalFacultyOrderByWithRelationInput
    studentAnnouncements?: StudentAnnouncementOrderByRelationAggregateInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    facultyId?: StringFilter<"Announcement"> | string
    targetYear?: IntNullableFilter<"Announcement"> | number | null
    targetBranch?: StringNullableFilter<"Announcement"> | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
    studentAnnouncements?: StudentAnnouncementListRelationFilter
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    facultyId?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    facultyId?: StringWithAggregatesFilter<"Announcement"> | string
    targetYear?: IntNullableWithAggregatesFilter<"Announcement"> | number | null
    targetBranch?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    isActive?: BoolWithAggregatesFilter<"Announcement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type StudentAnnouncementWhereInput = {
    AND?: StudentAnnouncementWhereInput | StudentAnnouncementWhereInput[]
    OR?: StudentAnnouncementWhereInput[]
    NOT?: StudentAnnouncementWhereInput | StudentAnnouncementWhereInput[]
    id?: StringFilter<"StudentAnnouncement"> | string
    announcementId?: StringFilter<"StudentAnnouncement"> | string
    studentId?: StringFilter<"StudentAnnouncement"> | string
    isRead?: BoolFilter<"StudentAnnouncement"> | boolean
    readAt?: DateTimeNullableFilter<"StudentAnnouncement"> | Date | string | null
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
  }

  export type StudentAnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    studentId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    student?: PortalStudentOrderByWithRelationInput
  }

  export type StudentAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    announcementId_studentId?: StudentAnnouncementAnnouncementIdStudentIdCompoundUniqueInput
    AND?: StudentAnnouncementWhereInput | StudentAnnouncementWhereInput[]
    OR?: StudentAnnouncementWhereInput[]
    NOT?: StudentAnnouncementWhereInput | StudentAnnouncementWhereInput[]
    announcementId?: StringFilter<"StudentAnnouncement"> | string
    studentId?: StringFilter<"StudentAnnouncement"> | string
    isRead?: BoolFilter<"StudentAnnouncement"> | boolean
    readAt?: DateTimeNullableFilter<"StudentAnnouncement"> | Date | string | null
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
  }, "id" | "announcementId_studentId">

  export type StudentAnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    announcementId?: SortOrder
    studentId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    _count?: StudentAnnouncementCountOrderByAggregateInput
    _max?: StudentAnnouncementMaxOrderByAggregateInput
    _min?: StudentAnnouncementMinOrderByAggregateInput
  }

  export type StudentAnnouncementScalarWhereWithAggregatesInput = {
    AND?: StudentAnnouncementScalarWhereWithAggregatesInput | StudentAnnouncementScalarWhereWithAggregatesInput[]
    OR?: StudentAnnouncementScalarWhereWithAggregatesInput[]
    NOT?: StudentAnnouncementScalarWhereWithAggregatesInput | StudentAnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAnnouncement"> | string
    announcementId?: StringWithAggregatesFilter<"StudentAnnouncement"> | string
    studentId?: StringWithAggregatesFilter<"StudentAnnouncement"> | string
    isRead?: BoolWithAggregatesFilter<"StudentAnnouncement"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"StudentAnnouncement"> | Date | string | null
  }

  export type AttendanceRecordWhereInput = {
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    id?: StringFilter<"AttendanceRecord"> | string
    studentId?: StringFilter<"AttendanceRecord"> | string
    facultyId?: StringFilter<"AttendanceRecord"> | string
    subject?: StringFilter<"AttendanceRecord"> | string
    date?: StringFilter<"AttendanceRecord"> | string
    status?: StringFilter<"AttendanceRecord"> | string
    note?: StringNullableFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
  }

  export type AttendanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    facultyId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    student?: PortalStudentOrderByWithRelationInput
    faculty?: PortalFacultyOrderByWithRelationInput
  }

  export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_facultyId_subject_date?: AttendanceRecordStudentIdFacultyIdSubjectDateCompoundUniqueInput
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    studentId?: StringFilter<"AttendanceRecord"> | string
    facultyId?: StringFilter<"AttendanceRecord"> | string
    subject?: StringFilter<"AttendanceRecord"> | string
    date?: StringFilter<"AttendanceRecord"> | string
    status?: StringFilter<"AttendanceRecord"> | string
    note?: StringNullableFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
  }, "id" | "studentId_facultyId_subject_date">

  export type AttendanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    facultyId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceRecordCountOrderByAggregateInput
    _max?: AttendanceRecordMaxOrderByAggregateInput
    _min?: AttendanceRecordMinOrderByAggregateInput
  }

  export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    OR?: AttendanceRecordScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    studentId?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    facultyId?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    subject?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    date?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    status?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    note?: StringNullableWithAggregatesFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    facultyId?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    targetYear?: IntNullableFilter<"Assignment"> | number | null
    targetBranch?: StringNullableFilter<"Assignment"> | string | null
    fileUrl?: StringNullableFilter<"Assignment"> | string | null
    isActive?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
    submissions?: AssignmentSubmissionListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facultyId?: SortOrder
    dueDate?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    fileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    faculty?: PortalFacultyOrderByWithRelationInput
    submissions?: AssignmentSubmissionOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    facultyId?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    targetYear?: IntNullableFilter<"Assignment"> | number | null
    targetBranch?: StringNullableFilter<"Assignment"> | string | null
    fileUrl?: StringNullableFilter<"Assignment"> | string | null
    isActive?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    faculty?: XOR<PortalFacultyScalarRelationFilter, PortalFacultyWhereInput>
    submissions?: AssignmentSubmissionListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facultyId?: SortOrder
    dueDate?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    fileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringWithAggregatesFilter<"Assignment"> | string
    facultyId?: StringWithAggregatesFilter<"Assignment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    targetYear?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
    targetBranch?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    isActive?: BoolWithAggregatesFilter<"Assignment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type AssignmentSubmissionWhereInput = {
    AND?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    OR?: AssignmentSubmissionWhereInput[]
    NOT?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    id?: StringFilter<"AssignmentSubmission"> | string
    assignmentId?: StringFilter<"AssignmentSubmission"> | string
    studentId?: StringFilter<"AssignmentSubmission"> | string
    fileUrl?: StringFilter<"AssignmentSubmission"> | string
    fileName?: StringFilter<"AssignmentSubmission"> | string
    note?: StringNullableFilter<"AssignmentSubmission"> | string | null
    grade?: StringNullableFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
  }

  export type AssignmentSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    student?: PortalStudentOrderByWithRelationInput
  }

  export type AssignmentSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignmentId_studentId?: AssignmentSubmissionAssignmentIdStudentIdCompoundUniqueInput
    AND?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    OR?: AssignmentSubmissionWhereInput[]
    NOT?: AssignmentSubmissionWhereInput | AssignmentSubmissionWhereInput[]
    assignmentId?: StringFilter<"AssignmentSubmission"> | string
    studentId?: StringFilter<"AssignmentSubmission"> | string
    fileUrl?: StringFilter<"AssignmentSubmission"> | string
    fileName?: StringFilter<"AssignmentSubmission"> | string
    note?: StringNullableFilter<"AssignmentSubmission"> | string | null
    grade?: StringNullableFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    student?: XOR<PortalStudentScalarRelationFilter, PortalStudentWhereInput>
  }, "id" | "assignmentId_studentId">

  export type AssignmentSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
    _count?: AssignmentSubmissionCountOrderByAggregateInput
    _max?: AssignmentSubmissionMaxOrderByAggregateInput
    _min?: AssignmentSubmissionMinOrderByAggregateInput
  }

  export type AssignmentSubmissionScalarWhereWithAggregatesInput = {
    AND?: AssignmentSubmissionScalarWhereWithAggregatesInput | AssignmentSubmissionScalarWhereWithAggregatesInput[]
    OR?: AssignmentSubmissionScalarWhereWithAggregatesInput[]
    NOT?: AssignmentSubmissionScalarWhereWithAggregatesInput | AssignmentSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    assignmentId?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    studentId?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    fileUrl?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    fileName?: StringWithAggregatesFilter<"AssignmentSubmission"> | string
    note?: StringNullableWithAggregatesFilter<"AssignmentSubmission"> | string | null
    grade?: StringNullableWithAggregatesFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"AssignmentSubmission"> | Date | string
  }

  export type PortalRefreshTokenWhereInput = {
    AND?: PortalRefreshTokenWhereInput | PortalRefreshTokenWhereInput[]
    OR?: PortalRefreshTokenWhereInput[]
    NOT?: PortalRefreshTokenWhereInput | PortalRefreshTokenWhereInput[]
    id?: StringFilter<"PortalRefreshToken"> | string
    token?: StringFilter<"PortalRefreshToken"> | string
    userId?: StringFilter<"PortalRefreshToken"> | string
    userRole?: StringFilter<"PortalRefreshToken"> | string
    expiresAt?: DateTimeFilter<"PortalRefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"PortalRefreshToken"> | Date | string
  }

  export type PortalRefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    userRole?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PortalRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PortalRefreshTokenWhereInput | PortalRefreshTokenWhereInput[]
    OR?: PortalRefreshTokenWhereInput[]
    NOT?: PortalRefreshTokenWhereInput | PortalRefreshTokenWhereInput[]
    userId?: StringFilter<"PortalRefreshToken"> | string
    userRole?: StringFilter<"PortalRefreshToken"> | string
    expiresAt?: DateTimeFilter<"PortalRefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"PortalRefreshToken"> | Date | string
  }, "id" | "token">

  export type PortalRefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    userRole?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PortalRefreshTokenCountOrderByAggregateInput
    _max?: PortalRefreshTokenMaxOrderByAggregateInput
    _min?: PortalRefreshTokenMinOrderByAggregateInput
  }

  export type PortalRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: PortalRefreshTokenScalarWhereWithAggregatesInput | PortalRefreshTokenScalarWhereWithAggregatesInput[]
    OR?: PortalRefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: PortalRefreshTokenScalarWhereWithAggregatesInput | PortalRefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortalRefreshToken"> | string
    token?: StringWithAggregatesFilter<"PortalRefreshToken"> | string
    userId?: StringWithAggregatesFilter<"PortalRefreshToken"> | string
    userRole?: StringWithAggregatesFilter<"PortalRefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PortalRefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PortalRefreshToken"> | Date | string
  }

  export type PortalStudentCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentCreateManyInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalStudentUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalStudentUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalFacultyCreateInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyCreateManyInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalFacultyUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalFacultyUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapCreateInput = {
    id?: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutMappingsInput
    student: PortalStudentCreateNestedOneWithoutMappingsInput
  }

  export type FacultyStudentMapUncheckedCreateInput = {
    id?: string
    facultyId: string
    studentId: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
  }

  export type FacultyStudentMapUpdateInput = {
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutMappingsNestedInput
    student?: PortalStudentUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type FacultyStudentMapUncheckedUpdateInput = {
    facultyId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapCreateManyInput = {
    id?: string
    facultyId: string
    studentId: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
  }

  export type FacultyStudentMapUpdateManyMutationInput = {
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapUncheckedUpdateManyInput = {
    facultyId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalMessageCreateInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
    senderStudent?: PortalStudentCreateNestedOneWithoutSentMessagesInput
    senderFaculty?: PortalFacultyCreateNestedOneWithoutSentMessagesInput
  }

  export type PortalMessageUncheckedCreateInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    senderStudentId?: string | null
    senderFacultyId?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
  }

  export type PortalMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderStudent?: PortalStudentUpdateOneWithoutSentMessagesNestedInput
    senderFaculty?: PortalFacultyUpdateOneWithoutSentMessagesNestedInput
  }

  export type PortalMessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    senderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    senderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalMessageCreateManyInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    senderStudentId?: string | null
    senderFacultyId?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
  }

  export type PortalMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalMessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    senderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    senderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentCreateInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uploaderStudent?: PortalStudentCreateNestedOneWithoutDocumentsInput
    uploaderFaculty?: PortalFacultyCreateNestedOneWithoutDocumentsInput
  }

  export type PortalDocumentUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    uploaderStudentId?: string | null
    uploaderFacultyId?: string | null
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalDocumentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaderStudent?: PortalStudentUpdateOneWithoutDocumentsNestedInput
    uploaderFaculty?: PortalFacultyUpdateOneWithoutDocumentsNestedInput
  }

  export type PortalDocumentUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    uploaderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    uploaderStudentId?: string | null
    uploaderFacultyId?: string | null
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalDocumentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    uploaderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutAnnouncementsInput
    studentAnnouncements?: StudentAnnouncementCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    facultyId: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentAnnouncements?: StudentAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutAnnouncementsNestedInput
    studentAnnouncements?: StudentAnnouncementUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentAnnouncements?: StudentAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    facultyId: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnnouncementCreateInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    announcement: AnnouncementCreateNestedOneWithoutStudentAnnouncementsInput
    student: PortalStudentCreateNestedOneWithoutAnnouncementsInput
  }

  export type StudentAnnouncementUncheckedCreateInput = {
    id?: string
    announcementId: string
    studentId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type StudentAnnouncementUpdateInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcement?: AnnouncementUpdateOneRequiredWithoutStudentAnnouncementsNestedInput
    student?: PortalStudentUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type StudentAnnouncementUncheckedUpdateInput = {
    announcementId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentAnnouncementCreateManyInput = {
    id?: string
    announcementId: string
    studentId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type StudentAnnouncementUpdateManyMutationInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentAnnouncementUncheckedUpdateManyInput = {
    announcementId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordCreateInput = {
    id?: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
    student: PortalStudentCreateNestedOneWithoutAttendanceInput
    faculty: PortalFacultyCreateNestedOneWithoutAttendanceMarkedInput
  }

  export type AttendanceRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    facultyId: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceRecordUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: PortalStudentUpdateOneRequiredWithoutAttendanceNestedInput
    faculty?: PortalFacultyUpdateOneRequiredWithoutAttendanceMarkedNestedInput
  }

  export type AttendanceRecordUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyInput = {
    id?: string
    studentId: string
    facultyId: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceRecordUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutAssignmentsInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    facultyId: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    title: string
    description: string
    facultyId: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionCreateInput = {
    id?: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    student: PortalStudentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentSubmissionUncheckedCreateInput = {
    id?: string
    assignmentId: string
    studentId: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
  }

  export type AssignmentSubmissionUpdateInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: PortalStudentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentSubmissionUncheckedUpdateInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionCreateManyInput = {
    id?: string
    assignmentId: string
    studentId: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
  }

  export type AssignmentSubmissionUpdateManyMutationInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUncheckedUpdateManyInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalRefreshTokenCreateInput = {
    id?: string
    token: string
    userId: string
    userRole: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PortalRefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    userRole: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PortalRefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalRefreshTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalRefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    userRole: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PortalRefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalRefreshTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PortalMessageListRelationFilter = {
    every?: PortalMessageWhereInput
    some?: PortalMessageWhereInput
    none?: PortalMessageWhereInput
  }

  export type PortalDocumentListRelationFilter = {
    every?: PortalDocumentWhereInput
    some?: PortalDocumentWhereInput
    none?: PortalDocumentWhereInput
  }

  export type FacultyStudentMapListRelationFilter = {
    every?: FacultyStudentMapWhereInput
    some?: FacultyStudentMapWhereInput
    none?: FacultyStudentMapWhereInput
  }

  export type StudentAnnouncementListRelationFilter = {
    every?: StudentAnnouncementWhereInput
    some?: StudentAnnouncementWhereInput
    none?: StudentAnnouncementWhereInput
  }

  export type AttendanceRecordListRelationFilter = {
    every?: AttendanceRecordWhereInput
    some?: AttendanceRecordWhereInput
    none?: AttendanceRecordWhereInput
  }

  export type AssignmentSubmissionListRelationFilter = {
    every?: AssignmentSubmissionWhereInput
    some?: AssignmentSubmissionWhereInput
    none?: AssignmentSubmissionWhereInput
  }

  export type PortalMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortalDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyStudentMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentAnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortalStudentCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    enrollmentNo?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    assignedFacultyId?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalStudentAvgOrderByAggregateInput = {
    year?: SortOrder
    loginAttempts?: SortOrder
  }

  export type PortalStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    enrollmentNo?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    assignedFacultyId?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalStudentMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    enrollmentNo?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    assignedFacultyId?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalStudentSumOrderByAggregateInput = {
    year?: SortOrder
    loginAttempts?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortalFacultyCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    workEmail?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalFacultyAvgOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type PortalFacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    workEmail?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalFacultyMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    workEmail?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    collegeName?: SortOrder
    profilePhotoUrl?: SortOrder
    bio?: SortOrder
    googleId?: SortOrder
    status?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalFacultySumOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PortalFacultyScalarRelationFilter = {
    is?: PortalFacultyWhereInput
    isNot?: PortalFacultyWhereInput
  }

  export type PortalStudentScalarRelationFilter = {
    is?: PortalStudentWhereInput
    isNot?: PortalStudentWhereInput
  }

  export type FacultyStudentMapFacultyIdStudentIdCompoundUniqueInput = {
    facultyId: string
    studentId: string
  }

  export type FacultyStudentMapCountOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    adminNote?: SortOrder
    assignedBy?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
  }

  export type FacultyStudentMapMaxOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    adminNote?: SortOrder
    assignedBy?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
  }

  export type FacultyStudentMapMinOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    adminNote?: SortOrder
    assignedBy?: SortOrder
    isActive?: SortOrder
    assignedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PortalStudentNullableScalarRelationFilter = {
    is?: PortalStudentWhereInput | null
    isNot?: PortalStudentWhereInput | null
  }

  export type PortalFacultyNullableScalarRelationFilter = {
    is?: PortalFacultyWhereInput | null
    isNot?: PortalFacultyWhereInput | null
  }

  export type PortalMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    attachmentUrl?: SortOrder
    attachmentName?: SortOrder
    senderStudentId?: SortOrder
    senderFacultyId?: SortOrder
    receiverStudentId?: SortOrder
    receiverFacultyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PortalMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    attachmentUrl?: SortOrder
    attachmentName?: SortOrder
    senderStudentId?: SortOrder
    senderFacultyId?: SortOrder
    receiverStudentId?: SortOrder
    receiverFacultyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PortalMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    attachmentUrl?: SortOrder
    attachmentName?: SortOrder
    senderStudentId?: SortOrder
    senderFacultyId?: SortOrder
    receiverStudentId?: SortOrder
    receiverFacultyId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PortalDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    isPublic?: SortOrder
    sharedWith?: SortOrder
    uploaderStudentId?: SortOrder
    uploaderFacultyId?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalDocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    year?: SortOrder
    downloads?: SortOrder
  }

  export type PortalDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    isPublic?: SortOrder
    uploaderStudentId?: SortOrder
    uploaderFacultyId?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    year?: SortOrder
    branch?: SortOrder
    collegeName?: SortOrder
    isPublic?: SortOrder
    uploaderStudentId?: SortOrder
    uploaderFacultyId?: SortOrder
    downloads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalDocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
    year?: SortOrder
    downloads?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    facultyId?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    targetYear?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    facultyId?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    facultyId?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    targetYear?: SortOrder
  }

  export type AnnouncementScalarRelationFilter = {
    is?: AnnouncementWhereInput
    isNot?: AnnouncementWhereInput
  }

  export type StudentAnnouncementAnnouncementIdStudentIdCompoundUniqueInput = {
    announcementId: string
    studentId: string
  }

  export type StudentAnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    studentId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type StudentAnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    studentId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type StudentAnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    announcementId?: SortOrder
    studentId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type AttendanceRecordStudentIdFacultyIdSubjectDateCompoundUniqueInput = {
    studentId: string
    facultyId: string
    subject: string
    date: string
  }

  export type AttendanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    facultyId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    facultyId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    facultyId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facultyId?: SortOrder
    dueDate?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    fileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    targetYear?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facultyId?: SortOrder
    dueDate?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    fileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    facultyId?: SortOrder
    dueDate?: SortOrder
    targetYear?: SortOrder
    targetBranch?: SortOrder
    fileUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    targetYear?: SortOrder
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type AssignmentSubmissionAssignmentIdStudentIdCompoundUniqueInput = {
    assignmentId: string
    studentId: string
  }

  export type AssignmentSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    submittedAt?: SortOrder
  }

  export type PortalRefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    userRole?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PortalRefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    userRole?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PortalRefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    userRole?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PortalMessageCreateNestedManyWithoutSenderStudentInput = {
    create?: XOR<PortalMessageCreateWithoutSenderStudentInput, PortalMessageUncheckedCreateWithoutSenderStudentInput> | PortalMessageCreateWithoutSenderStudentInput[] | PortalMessageUncheckedCreateWithoutSenderStudentInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderStudentInput | PortalMessageCreateOrConnectWithoutSenderStudentInput[]
    createMany?: PortalMessageCreateManySenderStudentInputEnvelope
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
  }

  export type PortalDocumentCreateNestedManyWithoutUploaderStudentInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderStudentInput, PortalDocumentUncheckedCreateWithoutUploaderStudentInput> | PortalDocumentCreateWithoutUploaderStudentInput[] | PortalDocumentUncheckedCreateWithoutUploaderStudentInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderStudentInput | PortalDocumentCreateOrConnectWithoutUploaderStudentInput[]
    createMany?: PortalDocumentCreateManyUploaderStudentInputEnvelope
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
  }

  export type FacultyStudentMapCreateNestedManyWithoutStudentInput = {
    create?: XOR<FacultyStudentMapCreateWithoutStudentInput, FacultyStudentMapUncheckedCreateWithoutStudentInput> | FacultyStudentMapCreateWithoutStudentInput[] | FacultyStudentMapUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutStudentInput | FacultyStudentMapCreateOrConnectWithoutStudentInput[]
    createMany?: FacultyStudentMapCreateManyStudentInputEnvelope
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
  }

  export type StudentAnnouncementCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAnnouncementCreateWithoutStudentInput, StudentAnnouncementUncheckedCreateWithoutStudentInput> | StudentAnnouncementCreateWithoutStudentInput[] | StudentAnnouncementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutStudentInput | StudentAnnouncementCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAnnouncementCreateManyStudentInputEnvelope
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
  }

  export type AttendanceRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AssignmentSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput = {
    create?: XOR<PortalMessageCreateWithoutSenderStudentInput, PortalMessageUncheckedCreateWithoutSenderStudentInput> | PortalMessageCreateWithoutSenderStudentInput[] | PortalMessageUncheckedCreateWithoutSenderStudentInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderStudentInput | PortalMessageCreateOrConnectWithoutSenderStudentInput[]
    createMany?: PortalMessageCreateManySenderStudentInputEnvelope
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
  }

  export type PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderStudentInput, PortalDocumentUncheckedCreateWithoutUploaderStudentInput> | PortalDocumentCreateWithoutUploaderStudentInput[] | PortalDocumentUncheckedCreateWithoutUploaderStudentInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderStudentInput | PortalDocumentCreateOrConnectWithoutUploaderStudentInput[]
    createMany?: PortalDocumentCreateManyUploaderStudentInputEnvelope
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
  }

  export type FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FacultyStudentMapCreateWithoutStudentInput, FacultyStudentMapUncheckedCreateWithoutStudentInput> | FacultyStudentMapCreateWithoutStudentInput[] | FacultyStudentMapUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutStudentInput | FacultyStudentMapCreateOrConnectWithoutStudentInput[]
    createMany?: FacultyStudentMapCreateManyStudentInputEnvelope
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
  }

  export type StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAnnouncementCreateWithoutStudentInput, StudentAnnouncementUncheckedCreateWithoutStudentInput> | StudentAnnouncementCreateWithoutStudentInput[] | StudentAnnouncementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutStudentInput | StudentAnnouncementCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAnnouncementCreateManyStudentInputEnvelope
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PortalMessageUpdateManyWithoutSenderStudentNestedInput = {
    create?: XOR<PortalMessageCreateWithoutSenderStudentInput, PortalMessageUncheckedCreateWithoutSenderStudentInput> | PortalMessageCreateWithoutSenderStudentInput[] | PortalMessageUncheckedCreateWithoutSenderStudentInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderStudentInput | PortalMessageCreateOrConnectWithoutSenderStudentInput[]
    upsert?: PortalMessageUpsertWithWhereUniqueWithoutSenderStudentInput | PortalMessageUpsertWithWhereUniqueWithoutSenderStudentInput[]
    createMany?: PortalMessageCreateManySenderStudentInputEnvelope
    set?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    disconnect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    delete?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    update?: PortalMessageUpdateWithWhereUniqueWithoutSenderStudentInput | PortalMessageUpdateWithWhereUniqueWithoutSenderStudentInput[]
    updateMany?: PortalMessageUpdateManyWithWhereWithoutSenderStudentInput | PortalMessageUpdateManyWithWhereWithoutSenderStudentInput[]
    deleteMany?: PortalMessageScalarWhereInput | PortalMessageScalarWhereInput[]
  }

  export type PortalDocumentUpdateManyWithoutUploaderStudentNestedInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderStudentInput, PortalDocumentUncheckedCreateWithoutUploaderStudentInput> | PortalDocumentCreateWithoutUploaderStudentInput[] | PortalDocumentUncheckedCreateWithoutUploaderStudentInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderStudentInput | PortalDocumentCreateOrConnectWithoutUploaderStudentInput[]
    upsert?: PortalDocumentUpsertWithWhereUniqueWithoutUploaderStudentInput | PortalDocumentUpsertWithWhereUniqueWithoutUploaderStudentInput[]
    createMany?: PortalDocumentCreateManyUploaderStudentInputEnvelope
    set?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    disconnect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    delete?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    update?: PortalDocumentUpdateWithWhereUniqueWithoutUploaderStudentInput | PortalDocumentUpdateWithWhereUniqueWithoutUploaderStudentInput[]
    updateMany?: PortalDocumentUpdateManyWithWhereWithoutUploaderStudentInput | PortalDocumentUpdateManyWithWhereWithoutUploaderStudentInput[]
    deleteMany?: PortalDocumentScalarWhereInput | PortalDocumentScalarWhereInput[]
  }

  export type FacultyStudentMapUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FacultyStudentMapCreateWithoutStudentInput, FacultyStudentMapUncheckedCreateWithoutStudentInput> | FacultyStudentMapCreateWithoutStudentInput[] | FacultyStudentMapUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutStudentInput | FacultyStudentMapCreateOrConnectWithoutStudentInput[]
    upsert?: FacultyStudentMapUpsertWithWhereUniqueWithoutStudentInput | FacultyStudentMapUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FacultyStudentMapCreateManyStudentInputEnvelope
    set?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    disconnect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    delete?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    update?: FacultyStudentMapUpdateWithWhereUniqueWithoutStudentInput | FacultyStudentMapUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FacultyStudentMapUpdateManyWithWhereWithoutStudentInput | FacultyStudentMapUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FacultyStudentMapScalarWhereInput | FacultyStudentMapScalarWhereInput[]
  }

  export type StudentAnnouncementUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAnnouncementCreateWithoutStudentInput, StudentAnnouncementUncheckedCreateWithoutStudentInput> | StudentAnnouncementCreateWithoutStudentInput[] | StudentAnnouncementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutStudentInput | StudentAnnouncementCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAnnouncementUpsertWithWhereUniqueWithoutStudentInput | StudentAnnouncementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAnnouncementCreateManyStudentInputEnvelope
    set?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    disconnect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    delete?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    update?: StudentAnnouncementUpdateWithWhereUniqueWithoutStudentInput | StudentAnnouncementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAnnouncementUpdateManyWithWhereWithoutStudentInput | StudentAnnouncementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAnnouncementScalarWhereInput | StudentAnnouncementScalarWhereInput[]
  }

  export type AttendanceRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutStudentInput | AttendanceRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AssignmentSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput | AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput = {
    create?: XOR<PortalMessageCreateWithoutSenderStudentInput, PortalMessageUncheckedCreateWithoutSenderStudentInput> | PortalMessageCreateWithoutSenderStudentInput[] | PortalMessageUncheckedCreateWithoutSenderStudentInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderStudentInput | PortalMessageCreateOrConnectWithoutSenderStudentInput[]
    upsert?: PortalMessageUpsertWithWhereUniqueWithoutSenderStudentInput | PortalMessageUpsertWithWhereUniqueWithoutSenderStudentInput[]
    createMany?: PortalMessageCreateManySenderStudentInputEnvelope
    set?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    disconnect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    delete?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    update?: PortalMessageUpdateWithWhereUniqueWithoutSenderStudentInput | PortalMessageUpdateWithWhereUniqueWithoutSenderStudentInput[]
    updateMany?: PortalMessageUpdateManyWithWhereWithoutSenderStudentInput | PortalMessageUpdateManyWithWhereWithoutSenderStudentInput[]
    deleteMany?: PortalMessageScalarWhereInput | PortalMessageScalarWhereInput[]
  }

  export type PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderStudentInput, PortalDocumentUncheckedCreateWithoutUploaderStudentInput> | PortalDocumentCreateWithoutUploaderStudentInput[] | PortalDocumentUncheckedCreateWithoutUploaderStudentInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderStudentInput | PortalDocumentCreateOrConnectWithoutUploaderStudentInput[]
    upsert?: PortalDocumentUpsertWithWhereUniqueWithoutUploaderStudentInput | PortalDocumentUpsertWithWhereUniqueWithoutUploaderStudentInput[]
    createMany?: PortalDocumentCreateManyUploaderStudentInputEnvelope
    set?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    disconnect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    delete?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    update?: PortalDocumentUpdateWithWhereUniqueWithoutUploaderStudentInput | PortalDocumentUpdateWithWhereUniqueWithoutUploaderStudentInput[]
    updateMany?: PortalDocumentUpdateManyWithWhereWithoutUploaderStudentInput | PortalDocumentUpdateManyWithWhereWithoutUploaderStudentInput[]
    deleteMany?: PortalDocumentScalarWhereInput | PortalDocumentScalarWhereInput[]
  }

  export type FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FacultyStudentMapCreateWithoutStudentInput, FacultyStudentMapUncheckedCreateWithoutStudentInput> | FacultyStudentMapCreateWithoutStudentInput[] | FacultyStudentMapUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutStudentInput | FacultyStudentMapCreateOrConnectWithoutStudentInput[]
    upsert?: FacultyStudentMapUpsertWithWhereUniqueWithoutStudentInput | FacultyStudentMapUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FacultyStudentMapCreateManyStudentInputEnvelope
    set?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    disconnect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    delete?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    update?: FacultyStudentMapUpdateWithWhereUniqueWithoutStudentInput | FacultyStudentMapUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FacultyStudentMapUpdateManyWithWhereWithoutStudentInput | FacultyStudentMapUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FacultyStudentMapScalarWhereInput | FacultyStudentMapScalarWhereInput[]
  }

  export type StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAnnouncementCreateWithoutStudentInput, StudentAnnouncementUncheckedCreateWithoutStudentInput> | StudentAnnouncementCreateWithoutStudentInput[] | StudentAnnouncementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutStudentInput | StudentAnnouncementCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAnnouncementUpsertWithWhereUniqueWithoutStudentInput | StudentAnnouncementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAnnouncementCreateManyStudentInputEnvelope
    set?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    disconnect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    delete?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    update?: StudentAnnouncementUpdateWithWhereUniqueWithoutStudentInput | StudentAnnouncementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAnnouncementUpdateManyWithWhereWithoutStudentInput | StudentAnnouncementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAnnouncementScalarWhereInput | StudentAnnouncementScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutStudentInput | AttendanceRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput> | AssignmentSubmissionCreateWithoutStudentInput[] | AssignmentSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutStudentInput | AssignmentSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignmentSubmissionCreateManyStudentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput | AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type PortalMessageCreateNestedManyWithoutSenderFacultyInput = {
    create?: XOR<PortalMessageCreateWithoutSenderFacultyInput, PortalMessageUncheckedCreateWithoutSenderFacultyInput> | PortalMessageCreateWithoutSenderFacultyInput[] | PortalMessageUncheckedCreateWithoutSenderFacultyInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderFacultyInput | PortalMessageCreateOrConnectWithoutSenderFacultyInput[]
    createMany?: PortalMessageCreateManySenderFacultyInputEnvelope
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
  }

  export type PortalDocumentCreateNestedManyWithoutUploaderFacultyInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderFacultyInput, PortalDocumentUncheckedCreateWithoutUploaderFacultyInput> | PortalDocumentCreateWithoutUploaderFacultyInput[] | PortalDocumentUncheckedCreateWithoutUploaderFacultyInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderFacultyInput | PortalDocumentCreateOrConnectWithoutUploaderFacultyInput[]
    createMany?: PortalDocumentCreateManyUploaderFacultyInputEnvelope
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
  }

  export type FacultyStudentMapCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyStudentMapCreateWithoutFacultyInput, FacultyStudentMapUncheckedCreateWithoutFacultyInput> | FacultyStudentMapCreateWithoutFacultyInput[] | FacultyStudentMapUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutFacultyInput | FacultyStudentMapCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyStudentMapCreateManyFacultyInputEnvelope
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AnnouncementCreateWithoutFacultyInput, AnnouncementUncheckedCreateWithoutFacultyInput> | AnnouncementCreateWithoutFacultyInput[] | AnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFacultyInput | AnnouncementCreateOrConnectWithoutFacultyInput[]
    createMany?: AnnouncementCreateManyFacultyInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AttendanceRecordCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AttendanceRecordCreateWithoutFacultyInput, AttendanceRecordUncheckedCreateWithoutFacultyInput> | AttendanceRecordCreateWithoutFacultyInput[] | AttendanceRecordUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutFacultyInput | AttendanceRecordCreateOrConnectWithoutFacultyInput[]
    createMany?: AttendanceRecordCreateManyFacultyInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AssignmentCreateWithoutFacultyInput, AssignmentUncheckedCreateWithoutFacultyInput> | AssignmentCreateWithoutFacultyInput[] | AssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutFacultyInput | AssignmentCreateOrConnectWithoutFacultyInput[]
    createMany?: AssignmentCreateManyFacultyInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput = {
    create?: XOR<PortalMessageCreateWithoutSenderFacultyInput, PortalMessageUncheckedCreateWithoutSenderFacultyInput> | PortalMessageCreateWithoutSenderFacultyInput[] | PortalMessageUncheckedCreateWithoutSenderFacultyInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderFacultyInput | PortalMessageCreateOrConnectWithoutSenderFacultyInput[]
    createMany?: PortalMessageCreateManySenderFacultyInputEnvelope
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
  }

  export type PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderFacultyInput, PortalDocumentUncheckedCreateWithoutUploaderFacultyInput> | PortalDocumentCreateWithoutUploaderFacultyInput[] | PortalDocumentUncheckedCreateWithoutUploaderFacultyInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderFacultyInput | PortalDocumentCreateOrConnectWithoutUploaderFacultyInput[]
    createMany?: PortalDocumentCreateManyUploaderFacultyInputEnvelope
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
  }

  export type FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyStudentMapCreateWithoutFacultyInput, FacultyStudentMapUncheckedCreateWithoutFacultyInput> | FacultyStudentMapCreateWithoutFacultyInput[] | FacultyStudentMapUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutFacultyInput | FacultyStudentMapCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyStudentMapCreateManyFacultyInputEnvelope
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AnnouncementCreateWithoutFacultyInput, AnnouncementUncheckedCreateWithoutFacultyInput> | AnnouncementCreateWithoutFacultyInput[] | AnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFacultyInput | AnnouncementCreateOrConnectWithoutFacultyInput[]
    createMany?: AnnouncementCreateManyFacultyInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AttendanceRecordCreateWithoutFacultyInput, AttendanceRecordUncheckedCreateWithoutFacultyInput> | AttendanceRecordCreateWithoutFacultyInput[] | AttendanceRecordUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutFacultyInput | AttendanceRecordCreateOrConnectWithoutFacultyInput[]
    createMany?: AttendanceRecordCreateManyFacultyInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AssignmentCreateWithoutFacultyInput, AssignmentUncheckedCreateWithoutFacultyInput> | AssignmentCreateWithoutFacultyInput[] | AssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutFacultyInput | AssignmentCreateOrConnectWithoutFacultyInput[]
    createMany?: AssignmentCreateManyFacultyInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type PortalMessageUpdateManyWithoutSenderFacultyNestedInput = {
    create?: XOR<PortalMessageCreateWithoutSenderFacultyInput, PortalMessageUncheckedCreateWithoutSenderFacultyInput> | PortalMessageCreateWithoutSenderFacultyInput[] | PortalMessageUncheckedCreateWithoutSenderFacultyInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderFacultyInput | PortalMessageCreateOrConnectWithoutSenderFacultyInput[]
    upsert?: PortalMessageUpsertWithWhereUniqueWithoutSenderFacultyInput | PortalMessageUpsertWithWhereUniqueWithoutSenderFacultyInput[]
    createMany?: PortalMessageCreateManySenderFacultyInputEnvelope
    set?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    disconnect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    delete?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    update?: PortalMessageUpdateWithWhereUniqueWithoutSenderFacultyInput | PortalMessageUpdateWithWhereUniqueWithoutSenderFacultyInput[]
    updateMany?: PortalMessageUpdateManyWithWhereWithoutSenderFacultyInput | PortalMessageUpdateManyWithWhereWithoutSenderFacultyInput[]
    deleteMany?: PortalMessageScalarWhereInput | PortalMessageScalarWhereInput[]
  }

  export type PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderFacultyInput, PortalDocumentUncheckedCreateWithoutUploaderFacultyInput> | PortalDocumentCreateWithoutUploaderFacultyInput[] | PortalDocumentUncheckedCreateWithoutUploaderFacultyInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderFacultyInput | PortalDocumentCreateOrConnectWithoutUploaderFacultyInput[]
    upsert?: PortalDocumentUpsertWithWhereUniqueWithoutUploaderFacultyInput | PortalDocumentUpsertWithWhereUniqueWithoutUploaderFacultyInput[]
    createMany?: PortalDocumentCreateManyUploaderFacultyInputEnvelope
    set?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    disconnect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    delete?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    update?: PortalDocumentUpdateWithWhereUniqueWithoutUploaderFacultyInput | PortalDocumentUpdateWithWhereUniqueWithoutUploaderFacultyInput[]
    updateMany?: PortalDocumentUpdateManyWithWhereWithoutUploaderFacultyInput | PortalDocumentUpdateManyWithWhereWithoutUploaderFacultyInput[]
    deleteMany?: PortalDocumentScalarWhereInput | PortalDocumentScalarWhereInput[]
  }

  export type FacultyStudentMapUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyStudentMapCreateWithoutFacultyInput, FacultyStudentMapUncheckedCreateWithoutFacultyInput> | FacultyStudentMapCreateWithoutFacultyInput[] | FacultyStudentMapUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutFacultyInput | FacultyStudentMapCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyStudentMapUpsertWithWhereUniqueWithoutFacultyInput | FacultyStudentMapUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyStudentMapCreateManyFacultyInputEnvelope
    set?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    disconnect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    delete?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    update?: FacultyStudentMapUpdateWithWhereUniqueWithoutFacultyInput | FacultyStudentMapUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyStudentMapUpdateManyWithWhereWithoutFacultyInput | FacultyStudentMapUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyStudentMapScalarWhereInput | FacultyStudentMapScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AnnouncementCreateWithoutFacultyInput, AnnouncementUncheckedCreateWithoutFacultyInput> | AnnouncementCreateWithoutFacultyInput[] | AnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFacultyInput | AnnouncementCreateOrConnectWithoutFacultyInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutFacultyInput | AnnouncementUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AnnouncementCreateManyFacultyInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutFacultyInput | AnnouncementUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutFacultyInput | AnnouncementUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AttendanceRecordUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutFacultyInput, AttendanceRecordUncheckedCreateWithoutFacultyInput> | AttendanceRecordCreateWithoutFacultyInput[] | AttendanceRecordUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutFacultyInput | AttendanceRecordCreateOrConnectWithoutFacultyInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutFacultyInput | AttendanceRecordUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AttendanceRecordCreateManyFacultyInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutFacultyInput | AttendanceRecordUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutFacultyInput | AttendanceRecordUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AssignmentCreateWithoutFacultyInput, AssignmentUncheckedCreateWithoutFacultyInput> | AssignmentCreateWithoutFacultyInput[] | AssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutFacultyInput | AssignmentCreateOrConnectWithoutFacultyInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutFacultyInput | AssignmentUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AssignmentCreateManyFacultyInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutFacultyInput | AssignmentUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutFacultyInput | AssignmentUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput = {
    create?: XOR<PortalMessageCreateWithoutSenderFacultyInput, PortalMessageUncheckedCreateWithoutSenderFacultyInput> | PortalMessageCreateWithoutSenderFacultyInput[] | PortalMessageUncheckedCreateWithoutSenderFacultyInput[]
    connectOrCreate?: PortalMessageCreateOrConnectWithoutSenderFacultyInput | PortalMessageCreateOrConnectWithoutSenderFacultyInput[]
    upsert?: PortalMessageUpsertWithWhereUniqueWithoutSenderFacultyInput | PortalMessageUpsertWithWhereUniqueWithoutSenderFacultyInput[]
    createMany?: PortalMessageCreateManySenderFacultyInputEnvelope
    set?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    disconnect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    delete?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    connect?: PortalMessageWhereUniqueInput | PortalMessageWhereUniqueInput[]
    update?: PortalMessageUpdateWithWhereUniqueWithoutSenderFacultyInput | PortalMessageUpdateWithWhereUniqueWithoutSenderFacultyInput[]
    updateMany?: PortalMessageUpdateManyWithWhereWithoutSenderFacultyInput | PortalMessageUpdateManyWithWhereWithoutSenderFacultyInput[]
    deleteMany?: PortalMessageScalarWhereInput | PortalMessageScalarWhereInput[]
  }

  export type PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput = {
    create?: XOR<PortalDocumentCreateWithoutUploaderFacultyInput, PortalDocumentUncheckedCreateWithoutUploaderFacultyInput> | PortalDocumentCreateWithoutUploaderFacultyInput[] | PortalDocumentUncheckedCreateWithoutUploaderFacultyInput[]
    connectOrCreate?: PortalDocumentCreateOrConnectWithoutUploaderFacultyInput | PortalDocumentCreateOrConnectWithoutUploaderFacultyInput[]
    upsert?: PortalDocumentUpsertWithWhereUniqueWithoutUploaderFacultyInput | PortalDocumentUpsertWithWhereUniqueWithoutUploaderFacultyInput[]
    createMany?: PortalDocumentCreateManyUploaderFacultyInputEnvelope
    set?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    disconnect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    delete?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    connect?: PortalDocumentWhereUniqueInput | PortalDocumentWhereUniqueInput[]
    update?: PortalDocumentUpdateWithWhereUniqueWithoutUploaderFacultyInput | PortalDocumentUpdateWithWhereUniqueWithoutUploaderFacultyInput[]
    updateMany?: PortalDocumentUpdateManyWithWhereWithoutUploaderFacultyInput | PortalDocumentUpdateManyWithWhereWithoutUploaderFacultyInput[]
    deleteMany?: PortalDocumentScalarWhereInput | PortalDocumentScalarWhereInput[]
  }

  export type FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyStudentMapCreateWithoutFacultyInput, FacultyStudentMapUncheckedCreateWithoutFacultyInput> | FacultyStudentMapCreateWithoutFacultyInput[] | FacultyStudentMapUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyStudentMapCreateOrConnectWithoutFacultyInput | FacultyStudentMapCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyStudentMapUpsertWithWhereUniqueWithoutFacultyInput | FacultyStudentMapUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyStudentMapCreateManyFacultyInputEnvelope
    set?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    disconnect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    delete?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    connect?: FacultyStudentMapWhereUniqueInput | FacultyStudentMapWhereUniqueInput[]
    update?: FacultyStudentMapUpdateWithWhereUniqueWithoutFacultyInput | FacultyStudentMapUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyStudentMapUpdateManyWithWhereWithoutFacultyInput | FacultyStudentMapUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyStudentMapScalarWhereInput | FacultyStudentMapScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AnnouncementCreateWithoutFacultyInput, AnnouncementUncheckedCreateWithoutFacultyInput> | AnnouncementCreateWithoutFacultyInput[] | AnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFacultyInput | AnnouncementCreateOrConnectWithoutFacultyInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutFacultyInput | AnnouncementUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AnnouncementCreateManyFacultyInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutFacultyInput | AnnouncementUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutFacultyInput | AnnouncementUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutFacultyInput, AttendanceRecordUncheckedCreateWithoutFacultyInput> | AttendanceRecordCreateWithoutFacultyInput[] | AttendanceRecordUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutFacultyInput | AttendanceRecordCreateOrConnectWithoutFacultyInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutFacultyInput | AttendanceRecordUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AttendanceRecordCreateManyFacultyInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutFacultyInput | AttendanceRecordUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutFacultyInput | AttendanceRecordUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AssignmentCreateWithoutFacultyInput, AssignmentUncheckedCreateWithoutFacultyInput> | AssignmentCreateWithoutFacultyInput[] | AssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutFacultyInput | AssignmentCreateOrConnectWithoutFacultyInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutFacultyInput | AssignmentUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AssignmentCreateManyFacultyInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutFacultyInput | AssignmentUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutFacultyInput | AssignmentUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type PortalFacultyCreateNestedOneWithoutMappingsInput = {
    create?: XOR<PortalFacultyCreateWithoutMappingsInput, PortalFacultyUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutMappingsInput
    connect?: PortalFacultyWhereUniqueInput
  }

  export type PortalStudentCreateNestedOneWithoutMappingsInput = {
    create?: XOR<PortalStudentCreateWithoutMappingsInput, PortalStudentUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutMappingsInput
    connect?: PortalStudentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PortalFacultyUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<PortalFacultyCreateWithoutMappingsInput, PortalFacultyUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutMappingsInput
    upsert?: PortalFacultyUpsertWithoutMappingsInput
    connect?: PortalFacultyWhereUniqueInput
    update?: XOR<XOR<PortalFacultyUpdateToOneWithWhereWithoutMappingsInput, PortalFacultyUpdateWithoutMappingsInput>, PortalFacultyUncheckedUpdateWithoutMappingsInput>
  }

  export type PortalStudentUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<PortalStudentCreateWithoutMappingsInput, PortalStudentUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutMappingsInput
    upsert?: PortalStudentUpsertWithoutMappingsInput
    connect?: PortalStudentWhereUniqueInput
    update?: XOR<XOR<PortalStudentUpdateToOneWithWhereWithoutMappingsInput, PortalStudentUpdateWithoutMappingsInput>, PortalStudentUncheckedUpdateWithoutMappingsInput>
  }

  export type PortalStudentCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<PortalStudentCreateWithoutSentMessagesInput, PortalStudentUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutSentMessagesInput
    connect?: PortalStudentWhereUniqueInput
  }

  export type PortalFacultyCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<PortalFacultyCreateWithoutSentMessagesInput, PortalFacultyUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutSentMessagesInput
    connect?: PortalFacultyWhereUniqueInput
  }

  export type PortalStudentUpdateOneWithoutSentMessagesNestedInput = {
    create?: XOR<PortalStudentCreateWithoutSentMessagesInput, PortalStudentUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutSentMessagesInput
    upsert?: PortalStudentUpsertWithoutSentMessagesInput
    disconnect?: boolean
    delete?: PortalStudentWhereInput | boolean
    connect?: PortalStudentWhereUniqueInput
    update?: XOR<XOR<PortalStudentUpdateToOneWithWhereWithoutSentMessagesInput, PortalStudentUpdateWithoutSentMessagesInput>, PortalStudentUncheckedUpdateWithoutSentMessagesInput>
  }

  export type PortalFacultyUpdateOneWithoutSentMessagesNestedInput = {
    create?: XOR<PortalFacultyCreateWithoutSentMessagesInput, PortalFacultyUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutSentMessagesInput
    upsert?: PortalFacultyUpsertWithoutSentMessagesInput
    disconnect?: boolean
    delete?: PortalFacultyWhereInput | boolean
    connect?: PortalFacultyWhereUniqueInput
    update?: XOR<XOR<PortalFacultyUpdateToOneWithWhereWithoutSentMessagesInput, PortalFacultyUpdateWithoutSentMessagesInput>, PortalFacultyUncheckedUpdateWithoutSentMessagesInput>
  }

  export type PortalDocumentCreatesharedWithInput = {
    set: string[]
  }

  export type PortalStudentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PortalStudentCreateWithoutDocumentsInput, PortalStudentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutDocumentsInput
    connect?: PortalStudentWhereUniqueInput
  }

  export type PortalFacultyCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PortalFacultyCreateWithoutDocumentsInput, PortalFacultyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutDocumentsInput
    connect?: PortalFacultyWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type PortalDocumentUpdatesharedWithInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PortalStudentUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<PortalStudentCreateWithoutDocumentsInput, PortalStudentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutDocumentsInput
    upsert?: PortalStudentUpsertWithoutDocumentsInput
    disconnect?: boolean
    delete?: PortalStudentWhereInput | boolean
    connect?: PortalStudentWhereUniqueInput
    update?: XOR<XOR<PortalStudentUpdateToOneWithWhereWithoutDocumentsInput, PortalStudentUpdateWithoutDocumentsInput>, PortalStudentUncheckedUpdateWithoutDocumentsInput>
  }

  export type PortalFacultyUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<PortalFacultyCreateWithoutDocumentsInput, PortalFacultyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutDocumentsInput
    upsert?: PortalFacultyUpsertWithoutDocumentsInput
    disconnect?: boolean
    delete?: PortalFacultyWhereInput | boolean
    connect?: PortalFacultyWhereUniqueInput
    update?: XOR<XOR<PortalFacultyUpdateToOneWithWhereWithoutDocumentsInput, PortalFacultyUpdateWithoutDocumentsInput>, PortalFacultyUncheckedUpdateWithoutDocumentsInput>
  }

  export type PortalFacultyCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<PortalFacultyCreateWithoutAnnouncementsInput, PortalFacultyUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutAnnouncementsInput
    connect?: PortalFacultyWhereUniqueInput
  }

  export type StudentAnnouncementCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<StudentAnnouncementCreateWithoutAnnouncementInput, StudentAnnouncementUncheckedCreateWithoutAnnouncementInput> | StudentAnnouncementCreateWithoutAnnouncementInput[] | StudentAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutAnnouncementInput | StudentAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    createMany?: StudentAnnouncementCreateManyAnnouncementInputEnvelope
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
  }

  export type StudentAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<StudentAnnouncementCreateWithoutAnnouncementInput, StudentAnnouncementUncheckedCreateWithoutAnnouncementInput> | StudentAnnouncementCreateWithoutAnnouncementInput[] | StudentAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutAnnouncementInput | StudentAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    createMany?: StudentAnnouncementCreateManyAnnouncementInputEnvelope
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
  }

  export type PortalFacultyUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<PortalFacultyCreateWithoutAnnouncementsInput, PortalFacultyUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutAnnouncementsInput
    upsert?: PortalFacultyUpsertWithoutAnnouncementsInput
    connect?: PortalFacultyWhereUniqueInput
    update?: XOR<XOR<PortalFacultyUpdateToOneWithWhereWithoutAnnouncementsInput, PortalFacultyUpdateWithoutAnnouncementsInput>, PortalFacultyUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type StudentAnnouncementUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<StudentAnnouncementCreateWithoutAnnouncementInput, StudentAnnouncementUncheckedCreateWithoutAnnouncementInput> | StudentAnnouncementCreateWithoutAnnouncementInput[] | StudentAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutAnnouncementInput | StudentAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    upsert?: StudentAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput | StudentAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: StudentAnnouncementCreateManyAnnouncementInputEnvelope
    set?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    disconnect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    delete?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    update?: StudentAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput | StudentAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: StudentAnnouncementUpdateManyWithWhereWithoutAnnouncementInput | StudentAnnouncementUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: StudentAnnouncementScalarWhereInput | StudentAnnouncementScalarWhereInput[]
  }

  export type StudentAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<StudentAnnouncementCreateWithoutAnnouncementInput, StudentAnnouncementUncheckedCreateWithoutAnnouncementInput> | StudentAnnouncementCreateWithoutAnnouncementInput[] | StudentAnnouncementUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: StudentAnnouncementCreateOrConnectWithoutAnnouncementInput | StudentAnnouncementCreateOrConnectWithoutAnnouncementInput[]
    upsert?: StudentAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput | StudentAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: StudentAnnouncementCreateManyAnnouncementInputEnvelope
    set?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    disconnect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    delete?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    connect?: StudentAnnouncementWhereUniqueInput | StudentAnnouncementWhereUniqueInput[]
    update?: StudentAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput | StudentAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: StudentAnnouncementUpdateManyWithWhereWithoutAnnouncementInput | StudentAnnouncementUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: StudentAnnouncementScalarWhereInput | StudentAnnouncementScalarWhereInput[]
  }

  export type AnnouncementCreateNestedOneWithoutStudentAnnouncementsInput = {
    create?: XOR<AnnouncementCreateWithoutStudentAnnouncementsInput, AnnouncementUncheckedCreateWithoutStudentAnnouncementsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutStudentAnnouncementsInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type PortalStudentCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<PortalStudentCreateWithoutAnnouncementsInput, PortalStudentUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutAnnouncementsInput
    connect?: PortalStudentWhereUniqueInput
  }

  export type AnnouncementUpdateOneRequiredWithoutStudentAnnouncementsNestedInput = {
    create?: XOR<AnnouncementCreateWithoutStudentAnnouncementsInput, AnnouncementUncheckedCreateWithoutStudentAnnouncementsInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutStudentAnnouncementsInput
    upsert?: AnnouncementUpsertWithoutStudentAnnouncementsInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutStudentAnnouncementsInput, AnnouncementUpdateWithoutStudentAnnouncementsInput>, AnnouncementUncheckedUpdateWithoutStudentAnnouncementsInput>
  }

  export type PortalStudentUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<PortalStudentCreateWithoutAnnouncementsInput, PortalStudentUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutAnnouncementsInput
    upsert?: PortalStudentUpsertWithoutAnnouncementsInput
    connect?: PortalStudentWhereUniqueInput
    update?: XOR<XOR<PortalStudentUpdateToOneWithWhereWithoutAnnouncementsInput, PortalStudentUpdateWithoutAnnouncementsInput>, PortalStudentUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type PortalStudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<PortalStudentCreateWithoutAttendanceInput, PortalStudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutAttendanceInput
    connect?: PortalStudentWhereUniqueInput
  }

  export type PortalFacultyCreateNestedOneWithoutAttendanceMarkedInput = {
    create?: XOR<PortalFacultyCreateWithoutAttendanceMarkedInput, PortalFacultyUncheckedCreateWithoutAttendanceMarkedInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutAttendanceMarkedInput
    connect?: PortalFacultyWhereUniqueInput
  }

  export type PortalStudentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<PortalStudentCreateWithoutAttendanceInput, PortalStudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutAttendanceInput
    upsert?: PortalStudentUpsertWithoutAttendanceInput
    connect?: PortalStudentWhereUniqueInput
    update?: XOR<XOR<PortalStudentUpdateToOneWithWhereWithoutAttendanceInput, PortalStudentUpdateWithoutAttendanceInput>, PortalStudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type PortalFacultyUpdateOneRequiredWithoutAttendanceMarkedNestedInput = {
    create?: XOR<PortalFacultyCreateWithoutAttendanceMarkedInput, PortalFacultyUncheckedCreateWithoutAttendanceMarkedInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutAttendanceMarkedInput
    upsert?: PortalFacultyUpsertWithoutAttendanceMarkedInput
    connect?: PortalFacultyWhereUniqueInput
    update?: XOR<XOR<PortalFacultyUpdateToOneWithWhereWithoutAttendanceMarkedInput, PortalFacultyUpdateWithoutAttendanceMarkedInput>, PortalFacultyUncheckedUpdateWithoutAttendanceMarkedInput>
  }

  export type PortalFacultyCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<PortalFacultyCreateWithoutAssignmentsInput, PortalFacultyUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutAssignmentsInput
    connect?: PortalFacultyWhereUniqueInput
  }

  export type AssignmentSubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
  }

  export type PortalFacultyUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<PortalFacultyCreateWithoutAssignmentsInput, PortalFacultyUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: PortalFacultyCreateOrConnectWithoutAssignmentsInput
    upsert?: PortalFacultyUpsertWithoutAssignmentsInput
    connect?: PortalFacultyWhereUniqueInput
    update?: XOR<XOR<PortalFacultyUpdateToOneWithWhereWithoutAssignmentsInput, PortalFacultyUpdateWithoutAssignmentsInput>, PortalFacultyUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput | AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput> | AssignmentSubmissionCreateWithoutAssignmentInput[] | AssignmentSubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentSubmissionCreateOrConnectWithoutAssignmentInput | AssignmentSubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentSubmissionCreateManyAssignmentInputEnvelope
    set?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    disconnect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    delete?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    connect?: AssignmentSubmissionWhereUniqueInput | AssignmentSubmissionWhereUniqueInput[]
    update?: AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput | AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type PortalStudentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<PortalStudentCreateWithoutSubmissionsInput, PortalStudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutSubmissionsInput
    connect?: PortalStudentWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type PortalStudentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<PortalStudentCreateWithoutSubmissionsInput, PortalStudentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: PortalStudentCreateOrConnectWithoutSubmissionsInput
    upsert?: PortalStudentUpsertWithoutSubmissionsInput
    connect?: PortalStudentWhereUniqueInput
    update?: XOR<XOR<PortalStudentUpdateToOneWithWhereWithoutSubmissionsInput, PortalStudentUpdateWithoutSubmissionsInput>, PortalStudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type PortalMessageCreateWithoutSenderStudentInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
    senderFaculty?: PortalFacultyCreateNestedOneWithoutSentMessagesInput
  }

  export type PortalMessageUncheckedCreateWithoutSenderStudentInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    senderFacultyId?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
  }

  export type PortalMessageCreateOrConnectWithoutSenderStudentInput = {
    where: PortalMessageWhereUniqueInput
    create: XOR<PortalMessageCreateWithoutSenderStudentInput, PortalMessageUncheckedCreateWithoutSenderStudentInput>
  }

  export type PortalMessageCreateManySenderStudentInputEnvelope = {
    data: PortalMessageCreateManySenderStudentInput | PortalMessageCreateManySenderStudentInput[]
  }

  export type PortalDocumentCreateWithoutUploaderStudentInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uploaderFaculty?: PortalFacultyCreateNestedOneWithoutDocumentsInput
  }

  export type PortalDocumentUncheckedCreateWithoutUploaderStudentInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    uploaderFacultyId?: string | null
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalDocumentCreateOrConnectWithoutUploaderStudentInput = {
    where: PortalDocumentWhereUniqueInput
    create: XOR<PortalDocumentCreateWithoutUploaderStudentInput, PortalDocumentUncheckedCreateWithoutUploaderStudentInput>
  }

  export type PortalDocumentCreateManyUploaderStudentInputEnvelope = {
    data: PortalDocumentCreateManyUploaderStudentInput | PortalDocumentCreateManyUploaderStudentInput[]
  }

  export type FacultyStudentMapCreateWithoutStudentInput = {
    id?: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutMappingsInput
  }

  export type FacultyStudentMapUncheckedCreateWithoutStudentInput = {
    id?: string
    facultyId: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
  }

  export type FacultyStudentMapCreateOrConnectWithoutStudentInput = {
    where: FacultyStudentMapWhereUniqueInput
    create: XOR<FacultyStudentMapCreateWithoutStudentInput, FacultyStudentMapUncheckedCreateWithoutStudentInput>
  }

  export type FacultyStudentMapCreateManyStudentInputEnvelope = {
    data: FacultyStudentMapCreateManyStudentInput | FacultyStudentMapCreateManyStudentInput[]
  }

  export type StudentAnnouncementCreateWithoutStudentInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    announcement: AnnouncementCreateNestedOneWithoutStudentAnnouncementsInput
  }

  export type StudentAnnouncementUncheckedCreateWithoutStudentInput = {
    id?: string
    announcementId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type StudentAnnouncementCreateOrConnectWithoutStudentInput = {
    where: StudentAnnouncementWhereUniqueInput
    create: XOR<StudentAnnouncementCreateWithoutStudentInput, StudentAnnouncementUncheckedCreateWithoutStudentInput>
  }

  export type StudentAnnouncementCreateManyStudentInputEnvelope = {
    data: StudentAnnouncementCreateManyStudentInput | StudentAnnouncementCreateManyStudentInput[]
  }

  export type AttendanceRecordCreateWithoutStudentInput = {
    id?: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutAttendanceMarkedInput
  }

  export type AttendanceRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    facultyId: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceRecordCreateManyStudentInputEnvelope = {
    data: AttendanceRecordCreateManyStudentInput | AttendanceRecordCreateManyStudentInput[]
  }

  export type AssignmentSubmissionCreateWithoutStudentInput = {
    id?: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentSubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    assignmentId: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
  }

  export type AssignmentSubmissionCreateOrConnectWithoutStudentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    create: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type AssignmentSubmissionCreateManyStudentInputEnvelope = {
    data: AssignmentSubmissionCreateManyStudentInput | AssignmentSubmissionCreateManyStudentInput[]
  }

  export type PortalMessageUpsertWithWhereUniqueWithoutSenderStudentInput = {
    where: PortalMessageWhereUniqueInput
    update: XOR<PortalMessageUpdateWithoutSenderStudentInput, PortalMessageUncheckedUpdateWithoutSenderStudentInput>
    create: XOR<PortalMessageCreateWithoutSenderStudentInput, PortalMessageUncheckedCreateWithoutSenderStudentInput>
  }

  export type PortalMessageUpdateWithWhereUniqueWithoutSenderStudentInput = {
    where: PortalMessageWhereUniqueInput
    data: XOR<PortalMessageUpdateWithoutSenderStudentInput, PortalMessageUncheckedUpdateWithoutSenderStudentInput>
  }

  export type PortalMessageUpdateManyWithWhereWithoutSenderStudentInput = {
    where: PortalMessageScalarWhereInput
    data: XOR<PortalMessageUpdateManyMutationInput, PortalMessageUncheckedUpdateManyWithoutSenderStudentInput>
  }

  export type PortalMessageScalarWhereInput = {
    AND?: PortalMessageScalarWhereInput | PortalMessageScalarWhereInput[]
    OR?: PortalMessageScalarWhereInput[]
    NOT?: PortalMessageScalarWhereInput | PortalMessageScalarWhereInput[]
    id?: StringFilter<"PortalMessage"> | string
    content?: StringFilter<"PortalMessage"> | string
    isRead?: BoolFilter<"PortalMessage"> | boolean
    attachmentUrl?: StringNullableFilter<"PortalMessage"> | string | null
    attachmentName?: StringNullableFilter<"PortalMessage"> | string | null
    senderStudentId?: StringNullableFilter<"PortalMessage"> | string | null
    senderFacultyId?: StringNullableFilter<"PortalMessage"> | string | null
    receiverStudentId?: StringNullableFilter<"PortalMessage"> | string | null
    receiverFacultyId?: StringNullableFilter<"PortalMessage"> | string | null
    createdAt?: DateTimeFilter<"PortalMessage"> | Date | string
  }

  export type PortalDocumentUpsertWithWhereUniqueWithoutUploaderStudentInput = {
    where: PortalDocumentWhereUniqueInput
    update: XOR<PortalDocumentUpdateWithoutUploaderStudentInput, PortalDocumentUncheckedUpdateWithoutUploaderStudentInput>
    create: XOR<PortalDocumentCreateWithoutUploaderStudentInput, PortalDocumentUncheckedCreateWithoutUploaderStudentInput>
  }

  export type PortalDocumentUpdateWithWhereUniqueWithoutUploaderStudentInput = {
    where: PortalDocumentWhereUniqueInput
    data: XOR<PortalDocumentUpdateWithoutUploaderStudentInput, PortalDocumentUncheckedUpdateWithoutUploaderStudentInput>
  }

  export type PortalDocumentUpdateManyWithWhereWithoutUploaderStudentInput = {
    where: PortalDocumentScalarWhereInput
    data: XOR<PortalDocumentUpdateManyMutationInput, PortalDocumentUncheckedUpdateManyWithoutUploaderStudentInput>
  }

  export type PortalDocumentScalarWhereInput = {
    AND?: PortalDocumentScalarWhereInput | PortalDocumentScalarWhereInput[]
    OR?: PortalDocumentScalarWhereInput[]
    NOT?: PortalDocumentScalarWhereInput | PortalDocumentScalarWhereInput[]
    id?: StringFilter<"PortalDocument"> | string
    title?: StringFilter<"PortalDocument"> | string
    description?: StringNullableFilter<"PortalDocument"> | string | null
    fileUrl?: StringFilter<"PortalDocument"> | string
    fileName?: StringFilter<"PortalDocument"> | string
    fileSize?: IntFilter<"PortalDocument"> | number
    mimeType?: StringFilter<"PortalDocument"> | string
    category?: StringNullableFilter<"PortalDocument"> | string | null
    year?: IntNullableFilter<"PortalDocument"> | number | null
    branch?: StringNullableFilter<"PortalDocument"> | string | null
    collegeName?: StringNullableFilter<"PortalDocument"> | string | null
    isPublic?: BoolFilter<"PortalDocument"> | boolean
    sharedWith?: StringNullableListFilter<"PortalDocument">
    uploaderStudentId?: StringNullableFilter<"PortalDocument"> | string | null
    uploaderFacultyId?: StringNullableFilter<"PortalDocument"> | string | null
    downloads?: IntFilter<"PortalDocument"> | number
    createdAt?: DateTimeFilter<"PortalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"PortalDocument"> | Date | string
  }

  export type FacultyStudentMapUpsertWithWhereUniqueWithoutStudentInput = {
    where: FacultyStudentMapWhereUniqueInput
    update: XOR<FacultyStudentMapUpdateWithoutStudentInput, FacultyStudentMapUncheckedUpdateWithoutStudentInput>
    create: XOR<FacultyStudentMapCreateWithoutStudentInput, FacultyStudentMapUncheckedCreateWithoutStudentInput>
  }

  export type FacultyStudentMapUpdateWithWhereUniqueWithoutStudentInput = {
    where: FacultyStudentMapWhereUniqueInput
    data: XOR<FacultyStudentMapUpdateWithoutStudentInput, FacultyStudentMapUncheckedUpdateWithoutStudentInput>
  }

  export type FacultyStudentMapUpdateManyWithWhereWithoutStudentInput = {
    where: FacultyStudentMapScalarWhereInput
    data: XOR<FacultyStudentMapUpdateManyMutationInput, FacultyStudentMapUncheckedUpdateManyWithoutStudentInput>
  }

  export type FacultyStudentMapScalarWhereInput = {
    AND?: FacultyStudentMapScalarWhereInput | FacultyStudentMapScalarWhereInput[]
    OR?: FacultyStudentMapScalarWhereInput[]
    NOT?: FacultyStudentMapScalarWhereInput | FacultyStudentMapScalarWhereInput[]
    id?: StringFilter<"FacultyStudentMap"> | string
    facultyId?: StringFilter<"FacultyStudentMap"> | string
    studentId?: StringFilter<"FacultyStudentMap"> | string
    adminNote?: StringNullableFilter<"FacultyStudentMap"> | string | null
    assignedBy?: StringFilter<"FacultyStudentMap"> | string
    isActive?: BoolFilter<"FacultyStudentMap"> | boolean
    assignedAt?: DateTimeFilter<"FacultyStudentMap"> | Date | string
  }

  export type StudentAnnouncementUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentAnnouncementWhereUniqueInput
    update: XOR<StudentAnnouncementUpdateWithoutStudentInput, StudentAnnouncementUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentAnnouncementCreateWithoutStudentInput, StudentAnnouncementUncheckedCreateWithoutStudentInput>
  }

  export type StudentAnnouncementUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentAnnouncementWhereUniqueInput
    data: XOR<StudentAnnouncementUpdateWithoutStudentInput, StudentAnnouncementUncheckedUpdateWithoutStudentInput>
  }

  export type StudentAnnouncementUpdateManyWithWhereWithoutStudentInput = {
    where: StudentAnnouncementScalarWhereInput
    data: XOR<StudentAnnouncementUpdateManyMutationInput, StudentAnnouncementUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentAnnouncementScalarWhereInput = {
    AND?: StudentAnnouncementScalarWhereInput | StudentAnnouncementScalarWhereInput[]
    OR?: StudentAnnouncementScalarWhereInput[]
    NOT?: StudentAnnouncementScalarWhereInput | StudentAnnouncementScalarWhereInput[]
    id?: StringFilter<"StudentAnnouncement"> | string
    announcementId?: StringFilter<"StudentAnnouncement"> | string
    studentId?: StringFilter<"StudentAnnouncement"> | string
    isRead?: BoolFilter<"StudentAnnouncement"> | boolean
    readAt?: DateTimeNullableFilter<"StudentAnnouncement"> | Date | string | null
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutStudentInput, AttendanceRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutStudentInput, AttendanceRecordUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceRecordScalarWhereInput = {
    AND?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    OR?: AttendanceRecordScalarWhereInput[]
    NOT?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    id?: StringFilter<"AttendanceRecord"> | string
    studentId?: StringFilter<"AttendanceRecord"> | string
    facultyId?: StringFilter<"AttendanceRecord"> | string
    subject?: StringFilter<"AttendanceRecord"> | string
    date?: StringFilter<"AttendanceRecord"> | string
    status?: StringFilter<"AttendanceRecord"> | string
    note?: StringNullableFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
  }

  export type AssignmentSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    update: XOR<AssignmentSubmissionUpdateWithoutStudentInput, AssignmentSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<AssignmentSubmissionCreateWithoutStudentInput, AssignmentSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type AssignmentSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    data: XOR<AssignmentSubmissionUpdateWithoutStudentInput, AssignmentSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type AssignmentSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: AssignmentSubmissionScalarWhereInput
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type AssignmentSubmissionScalarWhereInput = {
    AND?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
    OR?: AssignmentSubmissionScalarWhereInput[]
    NOT?: AssignmentSubmissionScalarWhereInput | AssignmentSubmissionScalarWhereInput[]
    id?: StringFilter<"AssignmentSubmission"> | string
    assignmentId?: StringFilter<"AssignmentSubmission"> | string
    studentId?: StringFilter<"AssignmentSubmission"> | string
    fileUrl?: StringFilter<"AssignmentSubmission"> | string
    fileName?: StringFilter<"AssignmentSubmission"> | string
    note?: StringNullableFilter<"AssignmentSubmission"> | string | null
    grade?: StringNullableFilter<"AssignmentSubmission"> | string | null
    feedback?: StringNullableFilter<"AssignmentSubmission"> | string | null
    submittedAt?: DateTimeFilter<"AssignmentSubmission"> | Date | string
  }

  export type PortalMessageCreateWithoutSenderFacultyInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
    senderStudent?: PortalStudentCreateNestedOneWithoutSentMessagesInput
  }

  export type PortalMessageUncheckedCreateWithoutSenderFacultyInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    senderStudentId?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
  }

  export type PortalMessageCreateOrConnectWithoutSenderFacultyInput = {
    where: PortalMessageWhereUniqueInput
    create: XOR<PortalMessageCreateWithoutSenderFacultyInput, PortalMessageUncheckedCreateWithoutSenderFacultyInput>
  }

  export type PortalMessageCreateManySenderFacultyInputEnvelope = {
    data: PortalMessageCreateManySenderFacultyInput | PortalMessageCreateManySenderFacultyInput[]
  }

  export type PortalDocumentCreateWithoutUploaderFacultyInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uploaderStudent?: PortalStudentCreateNestedOneWithoutDocumentsInput
  }

  export type PortalDocumentUncheckedCreateWithoutUploaderFacultyInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    uploaderStudentId?: string | null
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalDocumentCreateOrConnectWithoutUploaderFacultyInput = {
    where: PortalDocumentWhereUniqueInput
    create: XOR<PortalDocumentCreateWithoutUploaderFacultyInput, PortalDocumentUncheckedCreateWithoutUploaderFacultyInput>
  }

  export type PortalDocumentCreateManyUploaderFacultyInputEnvelope = {
    data: PortalDocumentCreateManyUploaderFacultyInput | PortalDocumentCreateManyUploaderFacultyInput[]
  }

  export type FacultyStudentMapCreateWithoutFacultyInput = {
    id?: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
    student: PortalStudentCreateNestedOneWithoutMappingsInput
  }

  export type FacultyStudentMapUncheckedCreateWithoutFacultyInput = {
    id?: string
    studentId: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
  }

  export type FacultyStudentMapCreateOrConnectWithoutFacultyInput = {
    where: FacultyStudentMapWhereUniqueInput
    create: XOR<FacultyStudentMapCreateWithoutFacultyInput, FacultyStudentMapUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyStudentMapCreateManyFacultyInputEnvelope = {
    data: FacultyStudentMapCreateManyFacultyInput | FacultyStudentMapCreateManyFacultyInput[]
  }

  export type AnnouncementCreateWithoutFacultyInput = {
    id?: string
    title: string
    content: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentAnnouncements?: StudentAnnouncementCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutFacultyInput = {
    id?: string
    title: string
    content: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
    studentAnnouncements?: StudentAnnouncementUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutFacultyInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutFacultyInput, AnnouncementUncheckedCreateWithoutFacultyInput>
  }

  export type AnnouncementCreateManyFacultyInputEnvelope = {
    data: AnnouncementCreateManyFacultyInput | AnnouncementCreateManyFacultyInput[]
  }

  export type AttendanceRecordCreateWithoutFacultyInput = {
    id?: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
    student: PortalStudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceRecordUncheckedCreateWithoutFacultyInput = {
    id?: string
    studentId: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutFacultyInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutFacultyInput, AttendanceRecordUncheckedCreateWithoutFacultyInput>
  }

  export type AttendanceRecordCreateManyFacultyInputEnvelope = {
    data: AttendanceRecordCreateManyFacultyInput | AttendanceRecordCreateManyFacultyInput[]
  }

  export type AssignmentCreateWithoutFacultyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    submissions?: AssignmentSubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutFacultyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutFacultyInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutFacultyInput, AssignmentUncheckedCreateWithoutFacultyInput>
  }

  export type AssignmentCreateManyFacultyInputEnvelope = {
    data: AssignmentCreateManyFacultyInput | AssignmentCreateManyFacultyInput[]
  }

  export type PortalMessageUpsertWithWhereUniqueWithoutSenderFacultyInput = {
    where: PortalMessageWhereUniqueInput
    update: XOR<PortalMessageUpdateWithoutSenderFacultyInput, PortalMessageUncheckedUpdateWithoutSenderFacultyInput>
    create: XOR<PortalMessageCreateWithoutSenderFacultyInput, PortalMessageUncheckedCreateWithoutSenderFacultyInput>
  }

  export type PortalMessageUpdateWithWhereUniqueWithoutSenderFacultyInput = {
    where: PortalMessageWhereUniqueInput
    data: XOR<PortalMessageUpdateWithoutSenderFacultyInput, PortalMessageUncheckedUpdateWithoutSenderFacultyInput>
  }

  export type PortalMessageUpdateManyWithWhereWithoutSenderFacultyInput = {
    where: PortalMessageScalarWhereInput
    data: XOR<PortalMessageUpdateManyMutationInput, PortalMessageUncheckedUpdateManyWithoutSenderFacultyInput>
  }

  export type PortalDocumentUpsertWithWhereUniqueWithoutUploaderFacultyInput = {
    where: PortalDocumentWhereUniqueInput
    update: XOR<PortalDocumentUpdateWithoutUploaderFacultyInput, PortalDocumentUncheckedUpdateWithoutUploaderFacultyInput>
    create: XOR<PortalDocumentCreateWithoutUploaderFacultyInput, PortalDocumentUncheckedCreateWithoutUploaderFacultyInput>
  }

  export type PortalDocumentUpdateWithWhereUniqueWithoutUploaderFacultyInput = {
    where: PortalDocumentWhereUniqueInput
    data: XOR<PortalDocumentUpdateWithoutUploaderFacultyInput, PortalDocumentUncheckedUpdateWithoutUploaderFacultyInput>
  }

  export type PortalDocumentUpdateManyWithWhereWithoutUploaderFacultyInput = {
    where: PortalDocumentScalarWhereInput
    data: XOR<PortalDocumentUpdateManyMutationInput, PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyInput>
  }

  export type FacultyStudentMapUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultyStudentMapWhereUniqueInput
    update: XOR<FacultyStudentMapUpdateWithoutFacultyInput, FacultyStudentMapUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultyStudentMapCreateWithoutFacultyInput, FacultyStudentMapUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyStudentMapUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultyStudentMapWhereUniqueInput
    data: XOR<FacultyStudentMapUpdateWithoutFacultyInput, FacultyStudentMapUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyStudentMapUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultyStudentMapScalarWhereInput
    data: XOR<FacultyStudentMapUpdateManyMutationInput, FacultyStudentMapUncheckedUpdateManyWithoutFacultyInput>
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutFacultyInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutFacultyInput, AnnouncementUncheckedUpdateWithoutFacultyInput>
    create: XOR<AnnouncementCreateWithoutFacultyInput, AnnouncementUncheckedCreateWithoutFacultyInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutFacultyInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutFacultyInput, AnnouncementUncheckedUpdateWithoutFacultyInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutFacultyInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutFacultyInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    facultyId?: StringFilter<"Announcement"> | string
    targetYear?: IntNullableFilter<"Announcement"> | number | null
    targetBranch?: StringNullableFilter<"Announcement"> | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutFacultyInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutFacultyInput, AttendanceRecordUncheckedUpdateWithoutFacultyInput>
    create: XOR<AttendanceRecordCreateWithoutFacultyInput, AttendanceRecordUncheckedCreateWithoutFacultyInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutFacultyInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutFacultyInput, AttendanceRecordUncheckedUpdateWithoutFacultyInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutFacultyInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutFacultyInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutFacultyInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutFacultyInput, AssignmentUncheckedUpdateWithoutFacultyInput>
    create: XOR<AssignmentCreateWithoutFacultyInput, AssignmentUncheckedCreateWithoutFacultyInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutFacultyInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutFacultyInput, AssignmentUncheckedUpdateWithoutFacultyInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutFacultyInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutFacultyInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    facultyId?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    targetYear?: IntNullableFilter<"Assignment"> | number | null
    targetBranch?: StringNullableFilter<"Assignment"> | string | null
    fileUrl?: StringNullableFilter<"Assignment"> | string | null
    isActive?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type PortalFacultyCreateWithoutMappingsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderFacultyInput
    announcements?: AnnouncementCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateWithoutMappingsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyCreateOrConnectWithoutMappingsInput = {
    where: PortalFacultyWhereUniqueInput
    create: XOR<PortalFacultyCreateWithoutMappingsInput, PortalFacultyUncheckedCreateWithoutMappingsInput>
  }

  export type PortalStudentCreateWithoutMappingsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderStudentInput
    announcements?: StudentAnnouncementCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateWithoutMappingsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput
    announcements?: StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentCreateOrConnectWithoutMappingsInput = {
    where: PortalStudentWhereUniqueInput
    create: XOR<PortalStudentCreateWithoutMappingsInput, PortalStudentUncheckedCreateWithoutMappingsInput>
  }

  export type PortalFacultyUpsertWithoutMappingsInput = {
    update: XOR<PortalFacultyUpdateWithoutMappingsInput, PortalFacultyUncheckedUpdateWithoutMappingsInput>
    create: XOR<PortalFacultyCreateWithoutMappingsInput, PortalFacultyUncheckedCreateWithoutMappingsInput>
    where?: PortalFacultyWhereInput
  }

  export type PortalFacultyUpdateToOneWithWhereWithoutMappingsInput = {
    where?: PortalFacultyWhereInput
    data: XOR<PortalFacultyUpdateWithoutMappingsInput, PortalFacultyUncheckedUpdateWithoutMappingsInput>
  }

  export type PortalFacultyUpdateWithoutMappingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput
    announcements?: AnnouncementUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateWithoutMappingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type PortalStudentUpsertWithoutMappingsInput = {
    update: XOR<PortalStudentUpdateWithoutMappingsInput, PortalStudentUncheckedUpdateWithoutMappingsInput>
    create: XOR<PortalStudentCreateWithoutMappingsInput, PortalStudentUncheckedCreateWithoutMappingsInput>
    where?: PortalStudentWhereInput
  }

  export type PortalStudentUpdateToOneWithWhereWithoutMappingsInput = {
    where?: PortalStudentWhereInput
    data: XOR<PortalStudentUpdateWithoutMappingsInput, PortalStudentUncheckedUpdateWithoutMappingsInput>
  }

  export type PortalStudentUpdateWithoutMappingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderStudentNestedInput
    announcements?: StudentAnnouncementUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateWithoutMappingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput
    announcements?: StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: PortalDocumentCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentCreateOrConnectWithoutSentMessagesInput = {
    where: PortalStudentWhereUniqueInput
    create: XOR<PortalStudentCreateWithoutSentMessagesInput, PortalStudentUncheckedCreateWithoutSentMessagesInput>
  }

  export type PortalFacultyCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: PortalDocumentCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyCreateOrConnectWithoutSentMessagesInput = {
    where: PortalFacultyWhereUniqueInput
    create: XOR<PortalFacultyCreateWithoutSentMessagesInput, PortalFacultyUncheckedCreateWithoutSentMessagesInput>
  }

  export type PortalStudentUpsertWithoutSentMessagesInput = {
    update: XOR<PortalStudentUpdateWithoutSentMessagesInput, PortalStudentUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<PortalStudentCreateWithoutSentMessagesInput, PortalStudentUncheckedCreateWithoutSentMessagesInput>
    where?: PortalStudentWhereInput
  }

  export type PortalStudentUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: PortalStudentWhereInput
    data: XOR<PortalStudentUpdateWithoutSentMessagesInput, PortalStudentUncheckedUpdateWithoutSentMessagesInput>
  }

  export type PortalStudentUpdateWithoutSentMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: PortalDocumentUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateWithoutSentMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalFacultyUpsertWithoutSentMessagesInput = {
    update: XOR<PortalFacultyUpdateWithoutSentMessagesInput, PortalFacultyUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<PortalFacultyCreateWithoutSentMessagesInput, PortalFacultyUncheckedCreateWithoutSentMessagesInput>
    where?: PortalFacultyWhereInput
  }

  export type PortalFacultyUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: PortalFacultyWhereInput
    data: XOR<PortalFacultyUpdateWithoutSentMessagesInput, PortalFacultyUncheckedUpdateWithoutSentMessagesInput>
  }

  export type PortalFacultyUpdateWithoutSentMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateWithoutSentMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type PortalStudentCreateWithoutDocumentsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderStudentInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateWithoutDocumentsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentCreateOrConnectWithoutDocumentsInput = {
    where: PortalStudentWhereUniqueInput
    create: XOR<PortalStudentCreateWithoutDocumentsInput, PortalStudentUncheckedCreateWithoutDocumentsInput>
  }

  export type PortalFacultyCreateWithoutDocumentsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderFacultyInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateWithoutDocumentsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyCreateOrConnectWithoutDocumentsInput = {
    where: PortalFacultyWhereUniqueInput
    create: XOR<PortalFacultyCreateWithoutDocumentsInput, PortalFacultyUncheckedCreateWithoutDocumentsInput>
  }

  export type PortalStudentUpsertWithoutDocumentsInput = {
    update: XOR<PortalStudentUpdateWithoutDocumentsInput, PortalStudentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PortalStudentCreateWithoutDocumentsInput, PortalStudentUncheckedCreateWithoutDocumentsInput>
    where?: PortalStudentWhereInput
  }

  export type PortalStudentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PortalStudentWhereInput
    data: XOR<PortalStudentUpdateWithoutDocumentsInput, PortalStudentUncheckedUpdateWithoutDocumentsInput>
  }

  export type PortalStudentUpdateWithoutDocumentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderStudentNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateWithoutDocumentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalFacultyUpsertWithoutDocumentsInput = {
    update: XOR<PortalFacultyUpdateWithoutDocumentsInput, PortalFacultyUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PortalFacultyCreateWithoutDocumentsInput, PortalFacultyUncheckedCreateWithoutDocumentsInput>
    where?: PortalFacultyWhereInput
  }

  export type PortalFacultyUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PortalFacultyWhereInput
    data: XOR<PortalFacultyUpdateWithoutDocumentsInput, PortalFacultyUncheckedUpdateWithoutDocumentsInput>
  }

  export type PortalFacultyUpdateWithoutDocumentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderFacultyNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateWithoutDocumentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyCreateWithoutAnnouncementsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateWithoutAnnouncementsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyCreateOrConnectWithoutAnnouncementsInput = {
    where: PortalFacultyWhereUniqueInput
    create: XOR<PortalFacultyCreateWithoutAnnouncementsInput, PortalFacultyUncheckedCreateWithoutAnnouncementsInput>
  }

  export type StudentAnnouncementCreateWithoutAnnouncementInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    student: PortalStudentCreateNestedOneWithoutAnnouncementsInput
  }

  export type StudentAnnouncementUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    studentId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type StudentAnnouncementCreateOrConnectWithoutAnnouncementInput = {
    where: StudentAnnouncementWhereUniqueInput
    create: XOR<StudentAnnouncementCreateWithoutAnnouncementInput, StudentAnnouncementUncheckedCreateWithoutAnnouncementInput>
  }

  export type StudentAnnouncementCreateManyAnnouncementInputEnvelope = {
    data: StudentAnnouncementCreateManyAnnouncementInput | StudentAnnouncementCreateManyAnnouncementInput[]
  }

  export type PortalFacultyUpsertWithoutAnnouncementsInput = {
    update: XOR<PortalFacultyUpdateWithoutAnnouncementsInput, PortalFacultyUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<PortalFacultyCreateWithoutAnnouncementsInput, PortalFacultyUncheckedCreateWithoutAnnouncementsInput>
    where?: PortalFacultyWhereInput
  }

  export type PortalFacultyUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: PortalFacultyWhereInput
    data: XOR<PortalFacultyUpdateWithoutAnnouncementsInput, PortalFacultyUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type PortalFacultyUpdateWithoutAnnouncementsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateWithoutAnnouncementsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type StudentAnnouncementUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: StudentAnnouncementWhereUniqueInput
    update: XOR<StudentAnnouncementUpdateWithoutAnnouncementInput, StudentAnnouncementUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<StudentAnnouncementCreateWithoutAnnouncementInput, StudentAnnouncementUncheckedCreateWithoutAnnouncementInput>
  }

  export type StudentAnnouncementUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: StudentAnnouncementWhereUniqueInput
    data: XOR<StudentAnnouncementUpdateWithoutAnnouncementInput, StudentAnnouncementUncheckedUpdateWithoutAnnouncementInput>
  }

  export type StudentAnnouncementUpdateManyWithWhereWithoutAnnouncementInput = {
    where: StudentAnnouncementScalarWhereInput
    data: XOR<StudentAnnouncementUpdateManyMutationInput, StudentAnnouncementUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type AnnouncementCreateWithoutStudentAnnouncementsInput = {
    id?: string
    title: string
    content: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateWithoutStudentAnnouncementsInput = {
    id?: string
    title: string
    content: string
    facultyId: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AnnouncementCreateOrConnectWithoutStudentAnnouncementsInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutStudentAnnouncementsInput, AnnouncementUncheckedCreateWithoutStudentAnnouncementsInput>
  }

  export type PortalStudentCreateWithoutAnnouncementsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateWithoutAnnouncementsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentCreateOrConnectWithoutAnnouncementsInput = {
    where: PortalStudentWhereUniqueInput
    create: XOR<PortalStudentCreateWithoutAnnouncementsInput, PortalStudentUncheckedCreateWithoutAnnouncementsInput>
  }

  export type AnnouncementUpsertWithoutStudentAnnouncementsInput = {
    update: XOR<AnnouncementUpdateWithoutStudentAnnouncementsInput, AnnouncementUncheckedUpdateWithoutStudentAnnouncementsInput>
    create: XOR<AnnouncementCreateWithoutStudentAnnouncementsInput, AnnouncementUncheckedCreateWithoutStudentAnnouncementsInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutStudentAnnouncementsInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutStudentAnnouncementsInput, AnnouncementUncheckedUpdateWithoutStudentAnnouncementsInput>
  }

  export type AnnouncementUpdateWithoutStudentAnnouncementsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutStudentAnnouncementsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalStudentUpsertWithoutAnnouncementsInput = {
    update: XOR<PortalStudentUpdateWithoutAnnouncementsInput, PortalStudentUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<PortalStudentCreateWithoutAnnouncementsInput, PortalStudentUncheckedCreateWithoutAnnouncementsInput>
    where?: PortalStudentWhereInput
  }

  export type PortalStudentUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: PortalStudentWhereInput
    data: XOR<PortalStudentUpdateWithoutAnnouncementsInput, PortalStudentUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type PortalStudentUpdateWithoutAnnouncementsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateWithoutAnnouncementsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentCreateWithoutAttendanceInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateWithoutAttendanceInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput
    submissions?: AssignmentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentCreateOrConnectWithoutAttendanceInput = {
    where: PortalStudentWhereUniqueInput
    create: XOR<PortalStudentCreateWithoutAttendanceInput, PortalStudentUncheckedCreateWithoutAttendanceInput>
  }

  export type PortalFacultyCreateWithoutAttendanceMarkedInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateWithoutAttendanceMarkedInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyCreateOrConnectWithoutAttendanceMarkedInput = {
    where: PortalFacultyWhereUniqueInput
    create: XOR<PortalFacultyCreateWithoutAttendanceMarkedInput, PortalFacultyUncheckedCreateWithoutAttendanceMarkedInput>
  }

  export type PortalStudentUpsertWithoutAttendanceInput = {
    update: XOR<PortalStudentUpdateWithoutAttendanceInput, PortalStudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<PortalStudentCreateWithoutAttendanceInput, PortalStudentUncheckedCreateWithoutAttendanceInput>
    where?: PortalStudentWhereInput
  }

  export type PortalStudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: PortalStudentWhereInput
    data: XOR<PortalStudentUpdateWithoutAttendanceInput, PortalStudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type PortalStudentUpdateWithoutAttendanceInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateWithoutAttendanceInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalFacultyUpsertWithoutAttendanceMarkedInput = {
    update: XOR<PortalFacultyUpdateWithoutAttendanceMarkedInput, PortalFacultyUncheckedUpdateWithoutAttendanceMarkedInput>
    create: XOR<PortalFacultyCreateWithoutAttendanceMarkedInput, PortalFacultyUncheckedCreateWithoutAttendanceMarkedInput>
    where?: PortalFacultyWhereInput
  }

  export type PortalFacultyUpdateToOneWithWhereWithoutAttendanceMarkedInput = {
    where?: PortalFacultyWhereInput
    data: XOR<PortalFacultyUpdateWithoutAttendanceMarkedInput, PortalFacultyUncheckedUpdateWithoutAttendanceMarkedInput>
  }

  export type PortalFacultyUpdateWithoutAttendanceMarkedInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateWithoutAttendanceMarkedInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyCreateWithoutAssignmentsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    username: string
    fullName: string
    workEmail: string
    passwordHash: string
    phone?: string | null
    designation: string
    department: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderFacultyInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderFacultyInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    attendanceMarked?: AttendanceRecordUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type PortalFacultyCreateOrConnectWithoutAssignmentsInput = {
    where: PortalFacultyWhereUniqueInput
    create: XOR<PortalFacultyCreateWithoutAssignmentsInput, PortalFacultyUncheckedCreateWithoutAssignmentsInput>
  }

  export type AssignmentSubmissionCreateWithoutAssignmentInput = {
    id?: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
    student: PortalStudentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentSubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    studentId: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
  }

  export type AssignmentSubmissionCreateOrConnectWithoutAssignmentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    create: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentSubmissionCreateManyAssignmentInputEnvelope = {
    data: AssignmentSubmissionCreateManyAssignmentInput | AssignmentSubmissionCreateManyAssignmentInput[]
  }

  export type PortalFacultyUpsertWithoutAssignmentsInput = {
    update: XOR<PortalFacultyUpdateWithoutAssignmentsInput, PortalFacultyUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<PortalFacultyCreateWithoutAssignmentsInput, PortalFacultyUncheckedCreateWithoutAssignmentsInput>
    where?: PortalFacultyWhereInput
  }

  export type PortalFacultyUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: PortalFacultyWhereInput
    data: XOR<PortalFacultyUpdateWithoutAssignmentsInput, PortalFacultyUncheckedUpdateWithoutAssignmentsInput>
  }

  export type PortalFacultyUpdateWithoutAssignmentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUpdateManyWithoutFacultyNestedInput
  }

  export type PortalFacultyUncheckedUpdateWithoutAssignmentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    workEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderFacultyNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    attendanceMarked?: AttendanceRecordUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type AssignmentSubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    update: XOR<AssignmentSubmissionUpdateWithoutAssignmentInput, AssignmentSubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<AssignmentSubmissionCreateWithoutAssignmentInput, AssignmentSubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentSubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentSubmissionWhereUniqueInput
    data: XOR<AssignmentSubmissionUpdateWithoutAssignmentInput, AssignmentSubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type AssignmentSubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: AssignmentSubmissionScalarWhereInput
    data: XOR<AssignmentSubmissionUpdateManyMutationInput, AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    faculty: PortalFacultyCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    facultyId: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type PortalStudentCreateWithoutSubmissionsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    passwordHash: string
    phone?: string | null
    enrollmentNo: string
    year: number
    branch: string
    collegeName?: string
    profilePhotoUrl?: string | null
    bio?: string | null
    googleId?: string | null
    status?: string
    assignedFacultyId?: string | null
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PortalMessageUncheckedCreateNestedManyWithoutSenderStudentInput
    documents?: PortalDocumentUncheckedCreateNestedManyWithoutUploaderStudentInput
    mappings?: FacultyStudentMapUncheckedCreateNestedManyWithoutStudentInput
    announcements?: StudentAnnouncementUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type PortalStudentCreateOrConnectWithoutSubmissionsInput = {
    where: PortalStudentWhereUniqueInput
    create: XOR<PortalStudentCreateWithoutSubmissionsInput, PortalStudentUncheckedCreateWithoutSubmissionsInput>
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalStudentUpsertWithoutSubmissionsInput = {
    update: XOR<PortalStudentUpdateWithoutSubmissionsInput, PortalStudentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<PortalStudentCreateWithoutSubmissionsInput, PortalStudentUncheckedCreateWithoutSubmissionsInput>
    where?: PortalStudentWhereInput
  }

  export type PortalStudentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: PortalStudentWhereInput
    data: XOR<PortalStudentUpdateWithoutSubmissionsInput, PortalStudentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type PortalStudentUpdateWithoutSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUpdateManyWithoutStudentNestedInput
  }

  export type PortalStudentUncheckedUpdateWithoutSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
    collegeName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PortalMessageUncheckedUpdateManyWithoutSenderStudentNestedInput
    documents?: PortalDocumentUncheckedUpdateManyWithoutUploaderStudentNestedInput
    mappings?: FacultyStudentMapUncheckedUpdateManyWithoutStudentNestedInput
    announcements?: StudentAnnouncementUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PortalMessageCreateManySenderStudentInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    senderFacultyId?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
  }

  export type PortalDocumentCreateManyUploaderStudentInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    uploaderFacultyId?: string | null
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyStudentMapCreateManyStudentInput = {
    id?: string
    facultyId: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
  }

  export type StudentAnnouncementCreateManyStudentInput = {
    id?: string
    announcementId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type AttendanceRecordCreateManyStudentInput = {
    id?: string
    facultyId: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
  }

  export type AssignmentSubmissionCreateManyStudentInput = {
    id?: string
    assignmentId: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
  }

  export type PortalMessageUpdateWithoutSenderStudentInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderFaculty?: PortalFacultyUpdateOneWithoutSentMessagesNestedInput
  }

  export type PortalMessageUncheckedUpdateWithoutSenderStudentInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    senderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalMessageUncheckedUpdateManyWithoutSenderStudentInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    senderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentUpdateWithoutUploaderStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaderFaculty?: PortalFacultyUpdateOneWithoutDocumentsNestedInput
  }

  export type PortalDocumentUncheckedUpdateWithoutUploaderStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    uploaderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentUncheckedUpdateManyWithoutUploaderStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    uploaderFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapUpdateWithoutStudentInput = {
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type FacultyStudentMapUncheckedUpdateWithoutStudentInput = {
    facultyId?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapUncheckedUpdateManyWithoutStudentInput = {
    facultyId?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnnouncementUpdateWithoutStudentInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    announcement?: AnnouncementUpdateOneRequiredWithoutStudentAnnouncementsNestedInput
  }

  export type StudentAnnouncementUncheckedUpdateWithoutStudentInput = {
    announcementId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentAnnouncementUncheckedUpdateManyWithoutStudentInput = {
    announcementId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceRecordUpdateWithoutStudentInput = {
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: PortalFacultyUpdateOneRequiredWithoutAttendanceMarkedNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutStudentInput = {
    facultyId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutStudentInput = {
    facultyId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUpdateWithoutStudentInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentSubmissionUncheckedUpdateWithoutStudentInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutStudentInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalMessageCreateManySenderFacultyInput = {
    id?: string
    content: string
    isRead?: boolean
    attachmentUrl?: string | null
    attachmentName?: string | null
    senderStudentId?: string | null
    receiverStudentId?: string | null
    receiverFacultyId?: string | null
    createdAt?: Date | string
  }

  export type PortalDocumentCreateManyUploaderFacultyInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileName: string
    fileSize: number
    mimeType: string
    category?: string | null
    year?: number | null
    branch?: string | null
    collegeName?: string | null
    isPublic?: boolean
    sharedWith?: PortalDocumentCreatesharedWithInput | string[]
    uploaderStudentId?: string | null
    downloads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultyStudentMapCreateManyFacultyInput = {
    id?: string
    studentId: string
    adminNote?: string | null
    assignedBy: string
    isActive?: boolean
    assignedAt?: Date | string
  }

  export type AnnouncementCreateManyFacultyInput = {
    id?: string
    title: string
    content: string
    targetYear?: number | null
    targetBranch?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AttendanceRecordCreateManyFacultyInput = {
    id?: string
    studentId: string
    subject: string
    date: string
    status: string
    note?: string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateManyFacultyInput = {
    id?: string
    title: string
    description: string
    dueDate: Date | string
    targetYear?: number | null
    targetBranch?: string | null
    fileUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PortalMessageUpdateWithoutSenderFacultyInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderStudent?: PortalStudentUpdateOneWithoutSentMessagesNestedInput
  }

  export type PortalMessageUncheckedUpdateWithoutSenderFacultyInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    senderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalMessageUncheckedUpdateManyWithoutSenderFacultyInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentName?: NullableStringFieldUpdateOperationsInput | string | null
    senderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverFacultyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentUpdateWithoutUploaderFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaderStudent?: PortalStudentUpdateOneWithoutDocumentsNestedInput
  }

  export type PortalDocumentUncheckedUpdateWithoutUploaderFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    uploaderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalDocumentUncheckedUpdateManyWithoutUploaderFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: PortalDocumentUpdatesharedWithInput | string[]
    uploaderStudentId?: NullableStringFieldUpdateOperationsInput | string | null
    downloads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapUpdateWithoutFacultyInput = {
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: PortalStudentUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type FacultyStudentMapUncheckedUpdateWithoutFacultyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyStudentMapUncheckedUpdateManyWithoutFacultyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    assignedBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentAnnouncements?: StudentAnnouncementUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentAnnouncements?: StudentAnnouncementUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUpdateWithoutFacultyInput = {
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: PortalStudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutFacultyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutFacultyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutFacultyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetBranch?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnnouncementCreateManyAnnouncementInput = {
    id?: string
    studentId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type StudentAnnouncementUpdateWithoutAnnouncementInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: PortalStudentUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type StudentAnnouncementUncheckedUpdateWithoutAnnouncementInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentAnnouncementUncheckedUpdateManyWithoutAnnouncementInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentSubmissionCreateManyAssignmentInput = {
    id?: string
    studentId: string
    fileUrl: string
    fileName: string
    note?: string | null
    grade?: string | null
    feedback?: string | null
    submittedAt?: Date | string
  }

  export type AssignmentSubmissionUpdateWithoutAssignmentInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: PortalStudentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentSubmissionUncheckedUpdateWithoutAssignmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}