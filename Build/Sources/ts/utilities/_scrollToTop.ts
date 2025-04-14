export default () => (
  setTimeout(() => {
    document.body.scrollIntoView()
    document.body.focus()
  })
)
