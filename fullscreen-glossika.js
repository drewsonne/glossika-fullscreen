function injectFullScreen () {
  $('body').append('Test')

  var new_src_black = chrome.extension.getURL('full-screen-black.png')
  var new_img_black = $('<img id="fullscreen-button" src="' + new_src_black + '"/>')

  var new_src_white = chrome.extension.getURL('full-screen-white.png')
  var new_img_white = $('<img id="fullscreen-button" src="' + new_src_white + '"/>')
  new_img_white.hide()

  var page_dom = $('#tutorialTarget3')
  var tutorialContainer = $('#tutorialTargetContainer')

  var fullscreenParts = $(tutorialContainer).children()

  $(fullscreenParts[0]).attr('id', 'header')
  $(fullscreenParts[1]).attr('id', 'feedback')
  $(fullscreenParts[2]).attr('id', 'languages')

  var languageSourceTarget = $(fullscreenParts[2]).children()
  $(languageSourceTarget).addClass('language')
  $(languageSourceTarget[0]).attr('id', 'source')
  $(languageSourceTarget[1]).attr('id', 'target')

  var fullscreenElements = $.merge(fullscreenParts, languageSourceTarget)

  var isFullscreen = $(tutorialContainer).fullScreen()

  function clickHandler () {
    if (isFullscreen) {
      $(fullscreenElements).removeClass('fullScreen')
      $(tutorialContainer).removeClass('fullScreen')
      $(new_img_black).show()
      $(new_img_white).hide()
      $(tutorialContainer).fullScreen(false)
      isFullscreen = false
    } else {
      $(fullscreenElements).addClass('fullScreen')
      $(tutorialContainer).addClass('fullScreen')
      $(new_img_white).show()
      $(new_img_black).hide()
      $(tutorialContainer).fullScreen(true)
      isFullscreen = true
    }
  }

  $(new_img_black).insertBefore(page_dom)
  $(new_img_white).insertBefore(page_dom)

  $(new_img_black).click(clickHandler)
  $(new_img_white).click(clickHandler)
}

function makeDivFullScreen (el) {
  var windowWidth = $(document).width()
  var windowHeight = $(document).height()
}

$(document).ready(function () {
  window.setTimeout(injectFullScreen, 3000)
})
