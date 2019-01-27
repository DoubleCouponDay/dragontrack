module dragontrack.models.session

open System
open System.IO

type session() =
    member val public id : Guid = Guid.NewGuid()
