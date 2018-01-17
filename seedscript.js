const fs = require('fs');
const fetch = require('isomorphic-fetch');

console.log("hi")

let data = ['Americans', 'Blair', 'Brothers', 'Burns', 'Canadians', 'Castro',
 'Chavez', 'Christianity', 'Chrysler', 'Clear', 'Congress', 'Democrats',
 'Fourth', 'Gates', 'Goldman', 'Halloween', 'Issue', 'Linux', 'Microsoft',
 'Monday', 'Power', 'President', 'Readers', 'Romney', 'Saint', 'Schmidt',
 'Select', 'Thing', 'Thursday', 'Wednesday', 'Whitman', 'Wi-Fi', 'Windows',
 'Wonder', 'Yankees', 'abilities', 'ability', 'acceptance', 'accidents',
 'accountability', 'accusations', 'achievement', 'acquisition', 'acres',
 'activists', 'activities', 'actor', 'actors', 'actress', 'addiction',
 'addressing', 'administration', 'administrator', 'admiration', 'advances',
 'advertising', 'advice', 'advocates', 'affair', 'affection', 'affects',
 'afternoon', 'agency', 'agenda', 'agreements', 'agriculture', 'airline',
 'airlines', 'airports', 'album', 'albums', 'alcohol', 'alerts',
 'allegations', 'altogether', 'ambassador', 'amounts', 'analysis',
 'analyst', 'animation', 'ankle', 'announcement', 'apartment', 'appeals',
 'appear', 'appearance', 'applications', 'appointment', 'approaches',
 'archives', 'arena', 'argument', 'arrangement', 'arrests', 'arrival',
 'assembly', 'assessment', 'assistance', 'assists', 'assumption',
 'assumptions', 'attempts', 'attention', 'audiences', 'authorities',
 'authority', 'availability', 'awards', 'awareness', 'backs', 'bailout',
 'ballots', 'balls', 'bankers', 'banking', 'bankruptcy', 'baseball',
 'bases', 'basketball', 'beans', 'beast', 'beating', 'beauty', 'became',
 'behavior', 'bills', 'blacks', 'blocks', 'bloggers', 'blows', 'boats',
 'bonds', 'bonuses', 'books', 'borders', 'boxes', 'brains', 'breaks',
 'brothers', 'brought', 'browser', 'bucks', 'budgets', 'building',
 'buildings', 'buyer', 'buying', 'camps', 'cancer', 'candidate',
 'candidates', 'capabilities', 'capability', 'carbon', 'cards', 'cares',
 'cargo', 'carriage', 'carriers', 'carries', 'carrying', 'cases', 'casting',
 'casualties', 'categories', 'category', 'ceiling', 'celebrities', 'cells',
 'cents', 'centuries', 'ceremony', 'chains', 'chairs', 'challenges',
 'champions', 'changes', 'channels', 'chaos', 'characteristics',
 'characters', 'charges', 'charity', 'charts', 'checking', 'chemicals',
 'childhood', 'choices', 'churches', 'circles', 'circumstances', 'citizens',
 'clearing', 'clerk', 'clicks', 'client', 'clients', 'climate', 'clubs',
 'coaches', 'coaching', 'codes', 'colleague', 'colleagues', 'collecting',
 'collection', 'colors', 'column', 'columnist', 'columns', 'combination',
 'comes', 'comics', 'commander', 'commissioner', 'commitment', 'committee',
 'commodity', 'communities', 'community', 'components', 'computing',
 'concentration', 'concerns', 'conclusions', 'conditions', 'confirmation',
 'conflict', 'conflicts', 'confusion', 'connection', 'connections',
 'consequences', 'conservatives', 'conspiracy', 'constitution',
 'construction', 'consultant', 'consumption', 'contacts', 'contractors',
 'contributions', 'controversy', 'convenience', 'conversation',
 'conversations', 'conviction', 'cooperation', 'corporations', 'correction',
  'council', 'countries', 'counts', 'county', 'couples', 'coupon',
  'courses', 'coverage', 'creator', 'credits', 'crews', 'cricket', 'cried',
  'crimes', 'criticism', 'currency', 'custody', 'customer', 'customs',
  'dates', 'daughters', 'dealer', 'dealing', 'dealt', 'debates', 'debts',
  'decades', 'decisions', 'declaration', 'defender', 'deficit', 'deficits',
  'definition', 'delegates', 'demands', 'democracy', 'department',
  'departments', 'depending', 'deposits', 'depression', 'depth',
  'description', 'designers', 'designs', 'destination', 'destruction',
  'detainees', 'detention', 'developer', 'developers', 'development',
  'developments', 'devices', 'diabetes', 'diesel', 'differences',
  'dignity', 'dining', 'direction', 'director', 'directors',
  'disappointment', 'disclosure', 'diseases', 'displays', 'distinction',
  'distribution', 'diversity', 'dividend', 'division', 'divisions',
  'doctors', 'doctrine', 'dollar', 'donations', 'doubts', 'downloads',
  'dozens', 'drama', 'dressing', 'drilling', 'drinks', 'driver', 'drops',
  'drove', 'e-mails', 'economics', 'economist', 'editor', 'effects',
  'efficiency', 'election', 'electricity', 'electronics', 'elsewhere',
  'email', 'emissions', 'employer', 'employers', 'employment', 'enemies',
  'energy', 'entertainment', 'enthusiasm', 'entity', 'entries', 'episodes',
  'equality', 'equipment', 'error', 'errors', 'estimates', 'ethics',
  'evaluation', 'events', 'evolution', 'examination', 'exception',
  'exchanges', 'existence', 'expansion', 'expenses', 'experts',
  'explanation', 'explosion', 'exposure', 'expression', 'faces',
  'factory', 'facts', 'faculty', 'failures', 'falls', 'families',
  'farms', 'fathers', 'features', 'feeding', 'feelings', 'fiction',
  'fields', 'fighter', 'fights', 'figures', 'films', 'finals', 'finding',
  'fingers', 'firing', 'firms', 'fitness', 'flames', 'flexibility',
  'flies', 'flooding', 'focuses', 'followers', 'foods', 'footage',
  'forces', 'foreclosure', 'forms', 'formula', 'forum', 'foundation',
  'fraud', 'freedom', 'friendship', 'functionality', 'functions',
  'fundraising', 'funds', 'furniture', 'gaining', 'gains', 'gallery',
  'gates', 'generation', 'generations', 'genre', 'gentleman', 'getting',
  'girls', 'glasses', 'glory', 'goals', 'goodness', 'google', 'government',
  'graphics', 'gratitude', 'grief', 'grounds', 'groups', 'guarantees',
  'guests', 'guidance', 'guidelines', 'guitar', 'handling', 'hands',
  'having', 'heading', 'health', 'hearings', 'helps', 'heroes', 'hiding',
  'highlights', 'hiring', 'hockey', 'holds', 'homeowners', 'homes',
  'honour', 'hosting', 'hotel', 'housing', 'humanity', 'humans',
  'humour', 'hundreds', 'hurricane', 'ideas', 'identification',
  'ideology', 'idiot', 'ignorance', 'images', 'immigrants',
  'implementation', 'implications', 'importance', 'impression', 'inbox',
  'incentives', 'incidents', 'increases', 'individuals', 'industry',
  'infection', 'information', 'infrastructure', 'ingredients', 'inning',
  'innovation', 'inquiry', 'inspection', 'installation', 'instructions',
  'intentions', 'interests', 'investigating', 'investigators', 'investing',
  'investments', 'investor', 'investors', 'invitation', 'involvement',
  'joins', 'journalism', 'journalists', 'judges', 'judgment', 'kicks',
  'kinda', 'kindness', 'kinds', 'kingdom', 'knees', 'labels', 'labour',
  'lands', 'lawmakers', 'lawsuit', 'lawyer', 'leader', 'leaders', 'leads',
  'legislators', 'legislature', 'lenders', 'levels', 'liability',
  'libraries', 'library', 'lifestyle', 'lights', 'limits', 'lineup',
  'links', 'listings', 'lists', 'loans', 'location', 'logic', 'looks',
  'lover', 'loyalty', 'machines', 'mails', 'maintenance', 'makers',
  'manager', 'manners', 'markets', 'matches', 'materials', 'mayor',
  'meals', 'means', 'meanwhile', 'measures', 'media', 'medication',
  'meets', 'members', 'membership', 'memory', 'mens', 'merger', 'method', 'methods', 'miles', 'militants', 'ministers', 'misery', 'missiles', 'mistakes', 'mixture', 'moderation', 'moment', 'moments', 'monitoring', 'mortgages', 'mountains', 'moves', 'movie', 'movies', 'music', 'navigator', 'needs', 'negotiations', 'neighborhood', 'networking', 'nobody', 'nomination', 'notes', 'o`clock', 'objectives', 'observations', 'occasions', 'occupation', 'offense', 'offices', 'opens', 'opera', 'operation', 'operator', 'operators', 'optimism', 'options', 'organisation', 'organization', 'organizations', 'others', 'outcome', 'owner', 'ownership', 'pages', 'painting', 'palace', 'papers', 'parking', 'parliament', 'participants', 'participation', 'parties', 'partners', 'parts', 'passes', 'patience', 'patterns', 'payment', 'payments', 'peers', 'penalties', 'penalty', 'percentage', 'perception', 'performances', 'periods', 'permits', 'persons', 'photographer', 'photographs', 'physician', 'physicians', 'picks', 'pictures', 'platforms', 'playoff', 'plays', 'pockets', 'podcast', 'poetry', 'pointing', 'politicians', 'politics', 'polling', 'polls', 'pollution', 'ports', 'possibilities', 'possibility', 'poster', 'potatoes', 'pounds', 'poverty', 'powers', 'practices', 'prayers', 'preference', 'preparation', 'presentation', 'presentations', 'presidency', 'presidents', 'prices', 'prince', 'prisoner', 'prisoners', 'privacy', 'prizes', 'problems', 'procedure', 'procedures', 'proceedings', 'proceeds', 'processes', 'processing', 'production', 'productivity', 'products', 'profanity', 'profession', 'professionals', 'profits', 'programme', 'projects', 'properties', 'proposals', 'prosecution', 'prosperity', 'protection', 'protein', 'protesters', 'protests', 'prototype', 'providers', 'provinces', 'publicity', 'publishing', 'pulling', 'purposes', 'pursuit', 'putting', 'qualities', 'questions', 'quotes', 'racing', 'racism', 'radar', 'radiation', 'rates', 'rating', 'ratio', 'reaching', 'reads', 'rebounds', 'recession', 'recipe', 'recipes', 'recognition', 'recommendation', 'records', 'reduction', 'referendum', 'reforms', 'refugees', 'regex', 'regime', 'region', 'registration', 'reign', 'relationship', 'releases', 'removal', 'replacement', 'reports', 'representation', 'representatives', 'requirement', 'resolution', 'resource', 'respects', 'responses', 'restrictions', 'result', 'retailers', 'retirement', 'returns', 'revenue', 'reviews', 'revolution', 'risks', 'rivals', 'rocks', 'roles', 'rolls', 'roots', 'roster', 'rounds', 'roundup', 'routes', 'safety', 'salaries', 'sales', 'samples', 'saves', 'scenario', 'schools', 'scientist', 'scientists', 'screening', 'screens', 'seasons', 'seats', 'secretary', 'sections', 'sectors', 'securities', 'security', 'seeds', 'selection', 'selling', 'senators', 'seniors', 'sentences', 'sentiment', 'separation', 'sequel', 'server', 'serves', 'session', 'sessions', 'settings', 'settlement', 'shadows', 'shaking', 'sheets', 'shelves', 'ships', 'shirts', 'shopping', 'shops', 'shots', 'showing', 'shown', 'signing', 'signup', 'singer', 'sinking', 'sisters', 'situation', 'sizes', 'slaves', 'slept', 'soccer', 'software', 'somebody', 'somewhere', 'songs', 'sorrow', 'sorts', 'souls', 'sources', 'speaker', 'speakers', 'speculation', 'speech', 'spirits', 'spokesman', 'sponsors', 'spots', 'stages', 'stairs', 'stands', 'starts', 'statements', 'stations', 'statistics', 'status', 'stays', 'stealing', 'stepping', 'steps', 'sticks', 'stocks', 'stole', 'storage', 'stores', 'storms', 'strangers', 'streams', 'streets', 'strikes', 'structures', 'struggles', 'studies', 'subjects', 'submission', 'subscription', 'subsidies', 'success', 'suicide', 'suite', 'suits', 'supplier', 'suppliers', 'suspension', 'swine', 'sympathy', 'symptoms', 'tables', 'takes', 'talks', 'tanks', 'targets', 'tasks', 'taxpayers', 'teacher', 'teams', 'tears', 'technologies', 'technology', 'tenure', 'terms', 'territory', 'terror', 'terrorism', 'tests', 'texts', 'theater', 'themes', 'theories', 'theory', 'things', 'thirds', 'thoughts', 'thousands', 'threads', 'threshold', 'threw', 'throws', 'tickets', 'titles', 'to-day', 'tomorrow', 'tools', 'topics', 'tourism', 'towns', 'tracker', 'tracks', 'trademarks', 'traditions', 'trains', 'transactions', 'transformation', 'transition', 'transmission', 'treatment', 'treatments', 'treaty', 'trees', 'tribute', 'tricks', 'tries', 'troops', 'turning', 'turns', 'types', 'unemployment', 'unions', 'unity', 'universities', 'university', 'updates', 'urging', 'usage', 'users', 'vacation', 'valley', 'values', 'vegetables', 'version', 'versions', 'veterans', 'victim', 'victims', 'viewers', 'violations', 'virus', 'visitor', 'voice-over', 'voices', 'volumes', 'volunteers', 'voter', 'voters', 'votes', 'wages', 'walks', 'walls', 'wants', 'warfare', 'warnings', 'weakness', 'wealth', 'weapons', 'weblog', 'wildlife', 'windows', 'wings', 'winner', 'winners', 'wisdom', 'wishes', 'woods', 'words', 'worker', 'workers', 'worries', 'writer', 'writers', 'yahoo', 'youth']

let already = ['calls', 'changes', 'making', 'comes', 'costs',
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
'things', 'version', 'success', 'response', 'getting', 'education']

let rhymeWords = "";

data.forEach((word) => {
  fetch(`http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=true&relationshipTypes=rhyme&limitPerRelationshipType=10&api_key=b9d438030c5995f48fa01073fce0a8020f21b49789fa370cb`)
    .then((response) => {
      return response.json();
    })
    .then((set) => {
      if (set[0].words.length > 4) {
        if (already.indexOf(word) === -1)
          rhymeWords = ("'" + word + "'" + ", ")
          fs.appendFile('data.txt', rhymeWords, function (err) {
            if (err) throw err;
            console.log('Updated!');
          });
      }
    })
})

// fetch(`http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=100000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=1000&api_key=b9d438030c5995f48fa01073fce0a8020f21b49789fa370cb`)
//   .then((data) => {
//     return data.json();
//   })
//   .then((set) => {
//     set.forEach((obj) => {
//       data = data + ("'" + obj.word + "'" + ", ");
//     });
//   })
//   .then(() => {
//     fs.appendFile('data.txt', data, function (err) {
//       if (err) throw err;
//       console.log('Updated!');
//     });
//   })
