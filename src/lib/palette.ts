const tagClasses = ['tag-0', 'tag-1', 'tag-2', 'tag-3', 'tag-4']

export function tagColor(index: number): string {
  return tagClasses[index % tagClasses.length]
}
