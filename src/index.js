import React from 'react';
import { render } from 'react-dom';
import Word from './word';

class App extends React.Component {
  constructor() {
    super()

    this.rhymeWords = ['calls', 'changes', 'making', 'comes', 'costs',
    'events', 'attention', 'investment', 'sites', 'function', 'spending',
    'production', 'terms', 'hands', 'looks', 'features', 'links',
    'groups', 'opportunity', 'posts', 'entry', 'dollars', 'friends',
    'takes', 'weeks', 'election', 'details', 'makes', 'director',
    'information', 'leaders', 'prices', 'playing', 'points', 'questions',
    'plans', 'schools', 'statement', 'security', 'players', 'became',
    'rules', 'shows', 'situation', 'reports', 'sales', 'hours', 'community',
    'rights', 'minutes', 'words', 'stories', 'books', 'brought', 'needs',
    'action', 'states', 'nation', 'campaign', 'parents', 'saying',
    'results', 'means', 'cases', 'wants', 'administration', 'leader',
    'views', 'technology', 'others', 'result', 'using', 'location', 'games',
    'things', 'version', 'success', 'response', 'getting', 'education',
    'Thing', 'afternoon', 'banking', 'addressing', 'actors', 'Burns', 'advice',
    'addiction', 'addiction', 'afternoon', 'Schmidt', 'boats', 'Blair',
    'advances', 'acquisition', 'assistance', 'Clear', 'assessment', 'actor',
    'Wonder', 'Fourth', 'Halloween', 'availability', 'acres', 'arena',
    'client', 'codes', 'agenda', 'blocks', 'blocks', 'Chavez', 'abilities',
    'abilities', 'animation', 'awards', 'allegations', 'ability', 'counts',
    'Readers', 'capabilities', 'beans', 'backs', 'amounts', 'cricket',
    'Monday', 'baseball', 'cents', 'appearance', 'admiration', 'carries',
    'carries', 'accusations', 'blows', 'appeals', 'driver', 'guests', 'guests',
    'ceiling', 'confirmation', 'employer', 'comics', 'demands', 'depending',
    'characteristics', 'electricity', 'expression', 'courses', 'charges',
    'dealt', 'churches', 'conflicts', 'combination', 'clerk', 'collecting',
    'Power', 'boxes', 'commander', 'connection', 'detention', 'brains',
    'conversation', 'dates', 'drops', 'disclosure', 'assists', 'drama',
    'beast', 'cells', 'balls', 'chains', 'defender', 'declaration',
    'constitution', 'Saint', 'chairs', 'Select', 'distribution', 'drove',
    'doubts', 'existence', 'exchanges', 'glasses', 'exposure', 'goals',
    'fights', 'conflict', 'conviction', 'drilling', 'dealer', 'dealing',
    'dealing', 'charity', 'emissions', 'hockey', 'errors', 'grounds',
    'channels', 'cards', 'evaluation', 'crews', 'corporations', 'direction',
    'direction', 'drinks', 'conclusions', 'effects', 'efficiency',
    'displays', 'affects', 'affects', 'meets', 'machines', 'firms',
    'glory', 'devices', 'joins', 'kicks', 'ideology', 'homes', 'hotel',
    'flies', 'faces', 'installation', 'generation', 'labour', 'county',
    'forces', 'flexibility', 'flexibility', 'farms', 'fiction',
    'destination', 'investing', 'debts', 'designers', 'designers',
    'putting', 'lawyer', 'leads', 'dressing', 'investor', 'investor',
    'miles', 'guitar', 'providers', 'fraud', 'firing', 'firing', 'lists',
    'instructions', 'prosecution', 'mails', 'donations', 'publicity',
    'operation', 'operation', 'feeding', 'grief', 'inspection',
    'economics', 'facts', 'exception', 'detainees', 'finding',
    'examination', 'democracy', 'division', 'e-mails', 'flames',
    'diseases', 'committee', 'crimes', 'error', 'lands', 'funds',
    'heading', 'directors', 'applications', 'depression', 'debates',
    'matches', 'employment', 'divisions', 'gallery', 'gaining',
    'presentation', 'reforms', 'electronics', 'dollar', 'dollar',
    'implementation', 'participation', 'participation', 'preparation',
    'doctors', 'sizes', 'foundation', 'foundation', 'expenses', 'designs',
    'investors', 'restrictions', 'organizations', 'sinking', 'transition',
    'transition', 'submission', 'dining', 'sections', 'replacement', 'shots',
    'protests', 'liability', 'parts', 'falls', 'identification', 'computing',
    'forum', 'objectives', 'voter', 'voter', 'virus', 'streams', 'respects',
    'confusion', 'explanation', 'Gates', 'Gates', 'owner', 'occupation',
    'records', 'saves', 'manners', 'prince', 'presentations', 'shopping',
    'rebounds', 'reduction', 'strikes', 'protection', 'separation',
    'separation', 'hosting', 'speculation', 'souls', 'serves', 'notes',
    'stocks', 'releases', 'bases', 'makers', 'appear', 'wages', 'cried',
    'stores', 'payment', 'levels', 'reviews', 'decisions', 'fighter',
    'casting', 'innovation', 'seeds', 'selling', 'logic', 'kinds',
    'sorts', 'reads', 'reads', 'representation', 'sectors', 'description',
    'soccer', 'buyer', 'sources', 'evolution', 'transformation', 'ships',
    'shaking', 'reign', 'camps', 'breaks', 'selection', 'approaches',
    'conversations', 'holds', 'hiding', 'sorrow', 'recommendation',
    'occasions', 'valley', 'sisters', 'viewers', 'registration',
    'registration', 'blacks', 'cancer', 'conditions', 'vacation',
    'affair', 'routes', 'kinda', 'knees', 'quotes', 'lover',
    'altogether', 'concerns', 'plays', 'decades', 'slaves', 'definition',
    'voices', 'singer', 'speaker', 'votes', 'physician', 'versions',
    'concentration', 'capability', 'perception', 'slept', 'lights',
    'lights', 'bills', 'strangers', 'physicians', 'checking',
    'productivity', 'negotiations', 'negotiations', 'violations',
    'voters', 'studies', 'implications', 'pages', 'pages', 'clearing',
    'parking', 'parking', 'destruction', 'bucks', 'beating', 'cares',
    'resolution', 'assembly', 'transmission', 'songs', 'charts',
    'mistakes', 'possibilities', 'nomination', 'nomination',
    'construction', 'gates', 'correction', 'correction', 'storms',
    'organization', 'gains', 'clubs', 'possibility', 'pollution',
    'buying', 'functionality', 'creator', 'carrying', 'polls',
    'recession', 'infection', 'alerts', 'invitation', 'beauty', 'passes',
    'shirts', 'shirts', 'increases', 'offense', 'returns', 'shops',
    'arrests', 'observations', 'affection', 'polling', 'transactions',
    'labels', 'powers', 'photographer', 'generations', 'inning', 'ports',
    'parties', 'mayor', 'contributions', 'contributions', 'measures',
    'moves', 'radiation', 'collection', 'projects', 'palace', 'forms',
    'lenders', 'recognition', 'meals', 'clicks', 'coaches', 'coaches',
    'connections', 'prizes', 'stole', 'subjects', 'starts', 'rolls',
    'stages', 'showing', 'revolution', 'revolution', 'foods', 'permits',
    'suite', 'sticks', 'teacher', 'theory', 'session', 'hiring',
    'session', 'risks', 'risks', 'suits', 'talks', 'talks', 'screens',
    'loans', 'tables', 'subscription', 'functions', 'sessions',
    'stepping', 'guarantees', 'papers', 'tools', 'status', 'peers',
    'profession', 'painting', 'housing', 'prosperity', 'turns',
    'foreclosure', 'tests', 'pounds', 'girls', 'types', 'politicians',
    'proceeds', 'pulling', 'racing', 'racing', 'rating', 'rates', 'swine',
    'sheets', 'rounds', 'stairs', 'steps', 'winner', 'volunteers',
    'technologies', 'urging', 'wishes', 'roster', 'tries', 'writer',
    'wings', 'tracker', 'shown', 'prayers', 'tasks', 'stealing',
    'winners', 'reaching', 'signing', 'spots', 'organisation',
    'mens', 'roles', 'teams', 'pursuit', 'stands', 'seats', 'seats',
    'roots', 'screening', 'suppliers', 'picks', 'streets', 'streets',
    'streets', 'unity', 'stays', 'themes', 'statistics', 'throws',
    'tears', 'rocks', 'thirds', 'troops', 'titles', 'impression',
    'threads', 'threads', 'speech', 'suspension', 'supplier', 'treaty',
    'trees', 'unemployment', 'trains', 'tanks', 'walls', 'turning',
    'walks', 'tricks', 'tricks', 'threw', 'tickets', 'youth', 'updates',
    'stations', 'medication', 'moderation', 'worries', 'towns',
    'traditions', 'tracks', 'terror']

    this.state = {
      partsOfSpeech: ["noun", "noun"],
      words: ["", ""],
      rhymes: [["", "", ""], ["", ""]]
    }
  }

  generateLibs = () => {
    let resultArray = ["", ""];

    let random = Math.floor(Math.random() * this.rhymeWords.length);
    let random2 = Math.floor(Math.random() * this.rhymeWords.length);

    resultArray[0] = this.rhymeWords[random];
    resultArray[1] = this.rhymeWords[random2]

    this.generateRhymes(resultArray[0], 0)
    this.generateRhymes(resultArray[1], 1)

    this.setState({
      words: resultArray
    })
}

  generateRhymes = (word, ind) => {
    let rhymeState = this.state.rhymes;
    let resultArray = [];

    this.state.rhymes[ind].forEach((blah) => {
      fetch(`http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=true&relationshipTypes=rhyme&limitPerRelationshipType=10&api_key=b9d438030c5995f48fa01073fce0a8020f21b49789fa370cb`)
        .then((response) => {
          return response.json();
        })
        .then((set) => {
          if (set[0]) {
            while (resultArray.length < this.state.rhymes[ind].length) {
              let random = Math.floor((Math.random() * set[0].words.length));

              if (resultArray.indexOf(set[0].words[random]) === -1) {
                resultArray.push(set[0].words[random]);
              }
            }
          }
        })
        .then(() => {
          rhymeState[ind] = resultArray;
        })
        .then(() => {
          this.setState({
            rhymes: rhymeState
          })
        })
    })
  }

  render() {
    let { words, rhymes } = this.state;

    return(
      <div>
        <h3>Rap Bot</h3>
        <button onClick={this.generateLibs}>Generate</button>
        <p>You know in the <Word word={words[0]} />, my rhymes are so <Word word={rhymes[0][0]} /> </p>
        <p>I get <Word word={rhymes[0][1]} />, and you know I give it to my <Word word={rhymes[0][2]} />. </p>
        <p>When I rock the beat, you know, at times I get so <Word word={words[1]} /> </p>
        <p>Im just on my <Word word={rhymes[1][0]} />, you dont have to be so <Word word={rhymes[1][1]} /> </p>
      </div>
    )
  }
}


render(<App />, document.getElementById('root'));
