setup.createTown = function () {
  var prefix = ['Green', 'Elms', 'Oak', 'Fair', 'Farren', 'Tall', 'Nar', 'Alla', 'Lans', 'San', 'Col', 'Fri', 'Plain', 'Hon', 'Far', 'Barrow', 'Shi', 'Mel', 'Mal', 'Bon', 'Bie', 'Can', 'Pol', 'Pan', 'Fald', 'Frior', 'Pol', 'Stone', 'Water', 'Leaf', 'Ice', 'Flame', 'Sol', 'Storm', 'Earth', 'Gleam', 'Star', 'Art', 'War', 'Heart', 'Hard', 'Fall', 'Rock', 'Doom', 'Oak', 'Tear', 'Raven', 'Badger', 'Snake', 'Lion', 'Hell', 'Rage', 'Brine', 'Rat', 'Buck', 'Lily', 'Core', 'Stench', 'Mage', 'God', 'Soil', 'Pure', 'Mal', 'Cam', 'Fen', 'Clear', 'Split', 'Founders', 'Heir', 'Fair', 'Spin'].random()
  var suffix = ['dale', 'ten', 'den', 'ven', 'gen', 'len', 'lun', 'stun', 'ville', 'burn', 'view', 'nen', 'lan', 'sed', 'folk', 'ork', 'len', 'pan', 'rel', 'old', 'ten', 'tan', 'lend', 'vorn', 'vant', 'lid', 'lin', 'crest', 'bridge', 'run', 'catch', 'blade', 'haven', 'rise', 'more', 'light', 'main', 'blaze', 'place', 'tear', 'fold', 'rest', 'host', 'craft', 'lair', 'hollow', 'vale', 'hammer', 'pike', 'rail', 'spike', 'ring', 'henge', 'coil', 'spring', 'jaw', 'mark', 'hail', 'loch', 'child', 'keep', 'fort', 'brook', 'forth', 'melt', 'borourgh', 'ford', 'crawl', 'moral', 'combe', 'glen', 'garden', 'wish', 'fellow', 'ridge', 'ward'].random()
  var name = prefix + suffix
  setup.linguisticDrift(name)
  return name
}
