class Business {
  constructor({ room, media, view }) {
    this.room = room
    this.media = media
    this.view = view

    this.currentStream = {}
  }

  static initialize(deps) {
    const instace = new Business(deps)
    return instace._init()
  }

  // metodo privado
  async _init() {
    this.currentStream = await this.media.getCamera()
    this.addVideoStream('test01')
  }

  addVideoStream(userId, stream = this.currentStream){
    const isCurrentId = false
    this.view.renderVideo({
      userId,
      stream,
      isCurrentId
    })
  }
}