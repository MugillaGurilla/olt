class TagsManager {
  connstuctor() {
    allUsefulTags = [
      
    ]
    tagToClassMappings = {

    }
  }

  extract() {
    const articlesTagsToBeExtracted = 'p,img,h1,h2,h3,h4,h5,h6,table';
    let extractedTags = document.querySelectorAll(articlesTagsToBeExtracted);
    extractedTags = Array.from(extractedTags);
    const firstH1Index = extractedTags.findIndex((tag) => tag.nodeName.toUpperCase() === 'H1');
    const filteredTags = extractedTags.slice(firstH1Index);
    this.allUsefulTags = filteredTags;
  }

  defineClassNames() {
    this.tagToClassMappings = {
      'P': 'olt-paragraph',
      'IMG': 'olt-image',
      'H1': 'olt-header',
      'H2': 'olt-header',
      'H3': 'olt-header',
      'H4': 'olt-header',
      'H5': 'olt-header',
      'H6': 'olt-header',
    }
  }

  print() {
    this.allUsefulTags.forEach((articleElement) => {  
      articleElement.className = '';
      articleElement.classList.add(this.tagToClassMappings[articleElement.tagName])
      document.body.append(articleElement);
      document.body.classList.add('font-size-level-2')
    });
  }
}