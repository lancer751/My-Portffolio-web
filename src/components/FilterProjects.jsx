import { useState } from 'react';
import { projects } from '../data/projects';

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
const projectTypes = ['all', 'personal', 'laboral']

export function FilterProjects(){
    const [selectedType, setSelectedType] = useState('all')
    const [selectedTags, setSelectedTags] = useState([])

    const filteredProjects = projects.filter(project => {
        const typeMatch = selectedType === 'all' || project.type === selectedType;
        const typeTagsMatch = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))

        return typeMatch && typeTagsMatch
    })

    const toggleTag = (tag) => {
        setSelectedTags(prev => 
          prev.includes(tag) 
            ? prev.filter(t => t !== tag)
            : [...prev, tag]
        );
    };

    return(
        <div className='w-full mt-8 space-y-12'>
            <div className='space-y-4'>
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                    {projectTypes.map(type => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 rounded-lg text-sm capitalize sm:text-base ${
                            selectedType === type
                                ? 'bg-celestial-azure text-white'
                                : 'bg-white text-celestial-azure border border-gray-200'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                            selectedTags.includes(tag)
                                ? 'bg-blue-950 text-white'
                                : 'bg-gray-200 text-blue-950'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map(project => (
                    <a 
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="block h-full bg-white dark:bg-blue-950 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <div className='relative h-52 w-full overflow-hidden'>
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-transform" />
                            
                        </div>
                        <div className="p-4 sm:p-6">
                            <h4 className="text-twilight-navy text-xl md:text-2xl dark:text-white font-bold">{project.title}</h4>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 dark:text-slate-100">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm">
                                    {tag}
                                </span>
                                ))}
                            </div>
                        </div>
                    </a>
                    ))
                }
            </div>
        </div>
    )
}